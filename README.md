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
- [social-links](http://localhost:4200/social-links)
- [recipe](http://localhost:4200/recipe)
- [product-preview-card](http://localhost:4200/product-preview)
- [four-cardfeature](http://localhost:4200/four-card)

## Other Readme Links

- [qrcode](src/app/qrcode/README.md)
- [blog-preview-card](src/app/blog-preview-card/README.md)
- [social-links](src/app/social-links/README.md)
- [recipe](src/app/recipe/README.md)
- [product-preview-card](src/app/product-preview-card/README.md)
- [four-card-feature](src/app/four-card-feature/README.md)



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
