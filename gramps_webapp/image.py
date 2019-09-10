"""Functions for manipulating images, e.g. generating thumbnails."""


import io

from PIL import Image, ImageOps
from pdf2image import convert_from_path


def get_image(path, mime):
    if mime == 'application/pdf':
        ims = convert_from_path(path,
                                single_file=True,
                                use_cropbox=True,
                                dpi=100)
        if not ims:
            return None
        return ims[0]
    return Image.open(path)


def get_thumbnail(path, size, square=False, mime=None):
    """Return a thumbnail of `size` (longest side) for the image at `path`.

    If `square` is true, the image is cropped to a centered square."""
    im = get_image(path, mime)
    if square:
        im = ImageOps.fit(im, (size, size), bleed=0.0, centering=(0.0, 0.5), method=Image.BICUBIC)
    else:
        im.thumbnail((size, size))
    f = io.BytesIO()
    im.save(f, format='JPEG')
    f.seek(0)
    return f


def get_thumbnail_cropped(path, size, x1, y1, x2, y2, square=False, mime=None):
    """Return a cropped thumbnail of `size` (longest side) of the image at `path`.

    The arguments `x1`, `y1`, `x2`, `y2` are the coordinates of the cropped region
    in terms of the original image's coordinate system.

    If `square` is true, the image is cropped to a centered square."""
    im = get_image(path, mime)
    w, h = im.size
    im = im.crop((x1 * w / 100, y1 * h / 100, x2 * w / 100, y2 * h / 100))
    im.thumbnail((size, size))
    if square:
        im = ImageOps.fit(im, (size, size), bleed=0.0, centering=(0.0, 0.5), method=Image.BICUBIC)
    else:
        im.thumbnail((size, size))
    f = io.BytesIO()
    im.save(f, format='JPEG')
    f.seek(0)
    return f
