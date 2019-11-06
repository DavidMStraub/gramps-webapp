import logging
import os

import boto3
from botocore.exceptions import ClientError
from flask import redirect, send_file

from .image import get_thumbnail, get_thumbnail_cropped


class MediaHandler:
    def __init__(self, handle, media_info):
        self.handle = handle
        self.media_info = media_info
        self.mime = media_info["mime"]


class FileHandler(MediaHandler):
    def __init__(self, handle, media_info, base_path=None):
        super().__init__(handle, media_info)
        if base_path is None:
            self.path = media_info["full_path"]
        else:
            self.path = os.path.join(base_path, media_info["path"])

    def send_file(self):
        return send_file(self.path)

    def send_thumbnail_square(self, size):
        f = get_thumbnail(self.path, size, square=True, mime=self.mime)
        return send_file(f, self.mime)

    def send_thumbnail_square_cropped(self, size, x1, y1, x2, y2):
        f = get_thumbnail_cropped(
            self.path, size, x1, y1, x2, y2, square=True, mime=self.mime
        )
        return send_file(f, self.mime)


class S3Handler(MediaHandler):
    def __init__(self, handle, media_info, bucket_name, base_path=None):
        super().__init__(handle, media_info)
        self.bucket_name = bucket_name
        self.client = boto3.client(
            "s3",
            config=boto3.session.Config(
                s3={"addressing_style": "path"}, signature_version="s3v4"
            ),
        )
        self.object_name = handle
        self.url_lifetime = 3600
        if base_path is None:
            self.path = media_info["full_path"]
        else:
            self.path = os.path.join(base_path, media_info["path"])

    def get_presigned_url(self, expires_in):
        try:
            response = self.client.generate_presigned_url(
                "get_object",
                Params={
                    "Bucket": self.bucket_name,
                    "Key": self.object_name,
                    "ResponseContentType": self.mime,
                },
                ExpiresIn=expires_in,
            )
        except ClientError as e:
            logging.error(e)
            return None
        return response

    def upload_file(self):
        try:
            self.client.upload_file(
                self.path,
                self.bucket_name,
                self.object_name,
                ExtraArgs={"ContentType": self.mime},
            )
        except ClientError as e:
            logging.error(e)
            return False
        return True

    def download_fileobj(self):
        try:
            response = self.client.get_object(
                Bucket=self.bucket_name, Key=self.object_name
            )
        except ClientError as e:
            logging.error(e)
            return None
        return response["Body"]

    def send_file(self):
        url = self.get_presigned_url(expires_in=self.url_lifetime)
        return redirect(url, 307)

    def get_thumbnail_square(self, size):
        f = self.download_fileobj()
        return get_thumbnail(f, size, square=True, mime=self.mime)

    def get_thumbnail_square_cropped(self, size, x1, y1, x2, y2):
        f = self.download_fileobj()
        return get_thumbnail_cropped(
            f, size, x1, y1, x2, y2, square=True, mime=self.mime
        )

    def send_thumbnail_square(self, size):
        f = self.get_thumbnail_square(size)
        return send_file(f, self.mime)

    def send_thumbnail_square_cropped(self, size, x1, y1, x2, y2):
        f = self.get_thumbnail_square_cropped(size, x1, y1, x2, y2)
        return send_file(f, self.mime)
