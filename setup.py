from setuptools import setup, find_packages
import glob
import os


with open('README.md') as f:
    LONG_DESCRIPTION = f.read()


PACKAGE_DATA = [p[14:] for p in glob.glob('gramps_webapp/js/**/*', recursive=True)]
PACKAGE_DATA = [f for f in PACKAGE_DATA if os.path.isfile(os.path.join('gramps_webapp', f))]


setup(name='gramps-webapp',
      version='0.1',
      author='David M. Straub <david.straub@tum.de>',
      author_email='david.straub@tum.de',
      url='https://github.com/DavidMStraub/gramps-webapp',
      long_description=LONG_DESCRIPTION,
      long_description_content_type='text/markdown',
      license='GPLv3',
      packages=find_packages(),
      package_data={'gramps_webapp': PACKAGE_DATA},
      install_requires=['flask',
                        'flask-restful',
                        'flask-caching',
                        'flask-jwt-extended',
                        'flask-cors',
                        'flask-compress',
                        'Pillow',
                        'pdf2image',
                        'boto3',
                        'bleach'],
      entry_points={
        'console_scripts': [
            'gramps_webapp=gramps_webapp.api:cli'
        ],
      },
)
