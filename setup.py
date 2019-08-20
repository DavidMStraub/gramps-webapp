from setuptools import setup, find_packages
import glob


with open('README.md') as f:
    LONG_DESCRIPTION = f.read()


PACKAGE_DATA = [p[14:] for p in glob.glob('gramps_webapp/js/**/*', recursive=True)]


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
                        'Pillow'],
      entry_points={
        'console_scripts': [
            'gramps_webapp=gramps_webapp.api:cli'
        ],
      },
)
