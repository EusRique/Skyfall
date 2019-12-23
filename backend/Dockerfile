FROM node:lts-alpine 

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home

WORKDIR /home/node/api

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD [ "npm", "start" ]