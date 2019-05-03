from distutils.core import Command
from setuptools import setup, find_packages


setup(
    name='reverb-code-challenge',
    version='0.0.2a',
    packages=find_packages(),
    tests_require=[
        'pytest-runner',
        'pytest-cov',
    ],
)
