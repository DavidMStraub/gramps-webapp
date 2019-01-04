from setuptools import setup, find_packages


with open('README.md') as f:
    LONG_DESCRIPTION = f.read()


setup(name='grampsrest',
      version='0.1',
      author='David M. Straub <david.straub@tum.de>',
      long_description=LONG_DESCRIPTION,
      long_description_content_type='text/markdown',
      license='MIT',
      packages=find_packages(),
      install_requires=['flask', 'flask-restful'],
      )
