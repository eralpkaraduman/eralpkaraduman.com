Source of [eralpkaraduman.com](https://eralpkaraduman.com)  
Built with [GatsbyJS](https://www.gatsbyjs.org)  
Auto-Deploys to AWS S3 & CloudFront via GitHub Actions

## install

npm install

## build

NODE_OPTIONS=--openssl-legacy-provider npm run build

## coolify deployment (nixpack)

build pack: nixpack
static image: nginx:alpine
publish directory: /public
is it static site: yes
