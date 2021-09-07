ARG NODE_JS_VERSION
FROM node:${NODE_JS_VERSION}-alpine3.12

WORKDIR /usr/src/timwispot-web
COPY package.json ./
RUN yarn

CMD ["yarn", "start"]