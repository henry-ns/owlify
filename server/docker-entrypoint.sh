#!/bin/sh

dockerize -wait tcp://owlify_pg:5432 -wait tcp://owlify_influx:8086 -timeout 300s

yarn migrate

if [ "$1" == "production" ];
then
  cp ./src/config/postgres.js ./dist/config/postgres.js

  yarn build
  yarn start
  yarn pm2 monit
else
  yarn dev
fi