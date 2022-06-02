FROM node:14-alpine

EXPOSE 3000
ENV HOST 0.0.0.0

RUN apk update && \
    apk add git && \
    yarn global add create-react-app