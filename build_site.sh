#!/bin/bash

mkdir ./public;

cp ./index.html ./public;

cp -r ./assets ./public;

cp -r ./css ./public;

cp -r ./js ./public;

echo 'street-ar-t.nihilux.org' > ./public/CNAME
