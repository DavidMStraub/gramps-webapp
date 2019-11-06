import logging
import os

import boto3
from botocore.exceptions import ClientError
from gramps.gen.utils.file import expand_media_path


logging.basicConfig(level=logging.INFO)


class MediaBucketUploader:
    """Class to upload media objects to an S3 bucket."""

    def __init__(self, db, bucket_name, create=False, logger=None):
        """Initialize the class.

        `db` is an instance of an appropriate subclass of `gramps.gen.db.base.DbReadBase`.
        `bucket_name` is the S3 bucket name.
        If `create` is True, the bucket will be created if it doesn't exist.
        """
        self.db = db
        self.bucket_name = bucket_name
        self.s3 = boto3.resource("s3")
        self.client = boto3.client("s3")
        self.logger = logger or logging.getLogger()
        if create:
            self.logger.info("Creating bucket {} if it does not exist".format(bucket_name))
            self.client.create_bucket(Bucket=bucket_name)
        self.bucket = self.s3.Bucket(self.bucket_name)
        self.base_path = expand_media_path(self.db.get_mediapath(), self.db)

    def get_remote_handles(self):
        """Get a set of all names of objects (media handles) in the bucket."""
        return set([obj.key for obj in self.bucket.objects.all()])

    def get_local_handles(self):
        """Get a dictionary of handle and mime types of all media objects in
        the database."""
        return {m.handle: m.get_mime_type() for m in self.db.iter_media()}

    def get_full_path(self, handle):
        """Get the full local path to a media object by handle."""
        m = self.db.get_media_from_handle(handle)
        return os.path.join(self.base_path, m.path)

    def upload(self, handle, mime):
        """Upload a media object with given handle and MIME type."""
        path = self.get_full_path(handle)
        try:
            self.client.upload_file(
                path, self.bucket_name, handle, ExtraArgs={"ContentType": mime}
            )
        except ClientError as e:
            logging.error(e)
            return False
        return True

    def upload_all(self):
        """Upload all media objects (overwriting existing ones)."""
        local_handles = self.get_local_handles()
        for handle, mime in local_handles.items():
            self.upload(handle, mime)

    def upload_missing(self):
        """Upload the media objects that are not yet in the bucket."""
        local_handles_dict = self.get_local_handles()
        local_handles = set(local_handles_dict.keys())
        remote_handles = self.get_remote_handles()
        missing = local_handles - remote_handles
        N = len(missing)
        self.logger.info("Found {} objects to upload.".format(N))
        for i, handle in enumerate(missing):
            self.logger.info("Uploading file {} of {} ({}%)".format(i + 1, N, round(100 * i / N)))
            mime = local_handles_dict[handle]
            self.upload(handle, mime)
