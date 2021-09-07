ARG NODE_JS_VERSION
FROM node:${NODE_JS_VERSION}-alpine3.12

# ARG USER=user
# ARG UID=1001
# ARG GID=1001

# RUN \
#   echo "$USER:x:$UID:$GID::/home/user:" >> /etc/passwd && \
#   echo "$USER:!:$(($(date +%s) / 60 / 60 / 24)):0:99999:7:::" >> /etc/shadow && \
#   echo "$USER:x:$GID:" >> /etc/group && \
#   mkdir -p /home/user/dev && chown -R $UID:$GID /home/user && \
#   cd /home/user/dev && npm install


# USER $USER
# WORKDIR /home/user/dev

ARG NODE_JS_VERSION
FROM node:${NODE_JS_VERSION}-alpine3.12

WORKDIR /usr/src/timwispot-api
COPY package.json ./
RUN npm install

CMD ["npm", "start"]