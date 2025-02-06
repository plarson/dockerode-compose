FROM ubuntu

RUN \
  apt-get update && \
  apt-get install -y nginx && service nginx start

COPY config.sh /docker-entrypoint-initdb.d/