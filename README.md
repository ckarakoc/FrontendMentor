# ![img.png](src/assets/readme/img.png)

Professionally designed challenges created from frontendmentor.io

## Usage

```shell
ng serve
```
Or go to [link](https://ckarakoc.github.io/FrontendMentor/) to see for yourself.

## Routes

- [qrcode](http://localhost:4200/qrcode)
- [blog-preview-card](http://localhost:4200/blog-preview)

## Other Readme Links

- [qrcode](src/app/qrcode/README.md)
- [blog-preview-card](src/app/blog-preview-card/README.md)


## Deploy to `gh-pages` with these commands

```shell
ng build --output-path docs --base-href=https://ckarakoc.github.io/FrontendMentor/
```
```shell
robocopy /move /e .\docs\browser\ .\docs\
```
```shell
copy .\docs\index.html .\docs\404.html
```
