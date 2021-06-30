#/bin/bash

mkdir ./public-site;

cp ./index.html ./public-site;

cp -r ./assets ./public-site;

cp -r ./css ./public-site;

cp -r ./js ./public-site;

echo 'street-ar-t.nihilux.org' > ./public-site/CNAME
