import setuptools

setuptools.setup(
    name="nbpawspublic",
    version='0.1.0',
    url="https://github.com/yuvipanda/nbpawspublic",
    author="Yuvi Panda",
    packages=setuptools.find_packages(),
    install_requires=[
        'notebook',
    ],
    package_data={'nbpawspublic': ['static/*']},
)
