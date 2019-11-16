import os

import click

from .api import create_app, get_db


@click.group("cli")
def cli():
    pass


@cli.group()
@click.option("-O", "--open", help="Family tree to use")
@click.option("--no-auth", help="Disable authentication", is_flag=True)
@click.pass_context
def app(ctx, open, no_auth):
    if open:
        os.environ["TREE"] = open
    if no_auth:
        os.environ["GRAMPS_AUTH_PROVIDER"] = 'none'
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


@cli.group("user")
@click.argument("db")
@click.pass_context
def user(ctx, db):
    from .auth import SQLAuth
    ctx.obj = SQLAuth(db_uri=db, logging=False)


@user.command("add")
@click.argument("name")
@click.argument("password"  )
@click.option("--fullname", help="Full name", default="")
@click.option("--email", help="E-mail address", default=None)
@click.pass_context
def user_add(ctx, name, password, fullname, email):
    auth = ctx.obj
    auth.add_user(name, password, fullname, email)


@user.command("delete")
@click.argument("name")
@click.pass_context
def user_del(ctx, name):
    auth = ctx.obj
    auth.delete_user(name)


if __name__ == "__main__":
    cli()
