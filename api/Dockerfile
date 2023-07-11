FROM node:16-alpine as build-step
WORKDIR /app
COPY package.json /app
COPY tsconfig.json /app
RUN npm install --quiet
COPY . /app
RUN npm install

FROM node:16-alpine
WORKDIR /app
COPY --from=build-step /app /app
EXPOSE 3000
CMD [ "npm", "start" ]