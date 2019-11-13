import os

import click

from .api import create_app, get_db


@click.group("cli")
def cli():
    pass


@cli.group()
@click.option("-O", "--open", help="Family tree to use")
@click.pass_context
def app(ctx, open):
    if open:
        os.environ["TREE"] = open
    ctx.obj = create_app()


@app.command("run")
@click.option("-p", "--port", help="Port to use (default: 5000)", default=5000)
@click.pass_context
def run(ctx, port):
    """Custom CLI command."""
    app = ctx.obj
    app.run(port=port, threaded=False)


@app.group()
@click.option("--bucket", help="S3 bucket name", required=True)
@click.pass_context
def s3(ctx, bucket):
    ctx.obj = {"bucket": bucket, "app": ctx.obj}


@s3.command("upload")
@click.pass_context
def s3_upload(ctx):
    """Upload media objects to AWS S3 cloud storage."""
    app = ctx.obj["app"]
    bucket = ctx.obj["bucket"]
    from .s3 import MediaBucketUploader

    with app.app_context():
        if not get_db().dbstate.is_open():
            get_db().open()

        uploader = MediaBucketUploader(
            get_db().db, bucket, create=True, logger=app.logger
        )
        uploader.upload_missing()
        get_db().close()


if __name__ == "__main__":
    cli()
