from setuptools import setup, find_packages


with open('README.md') as f:
    LONG_DESCRIPTION = f.read()


setup(name='gramps-webapp',
      version='0.1',
      author='David M. Straub <david.straub@tum.de>',
      long_description=LONG_DESCRIPTION,
      long_description_content_type='text/markdown',
      license='GPLv3',
      packages=find_packages(),
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
