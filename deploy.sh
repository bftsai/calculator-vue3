#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
# git checkout -b main
# git checkout main
git add -A
git commit -m 'deploy'

# if you are deploying to https://bftsai.github.io
# git push -f git@github.com:bftsai/bftsai.github.io.git main

# if you are deploying to https://bftsai.github.io/calculator-vue3
git push -f git@github.com:bftsai/calculator-vue3.git main:gh-pages

cd -