ARG LIBRARY=docker.io
ARG DOCKER_TAG=16.11-alpine
ARG PLATFORM=linux/x86_64
ARG PORT=3000

FROM --platform=${PLATFORM} ${LIBRARY}/node:${DOCKER_TAG} as build-step
WORKDIR /app
COPY package.json /app
COPY tsconfig.json /app
RUN npm install --quiet
COPY . /app
RUN npm install

FROM --platform=${PLATFORM} ${LIBRARY}/node:${DOCKER_TAG}
WORKDIR /app
COPY --from=build-step /app /app
EXPOSE ${PORT}
CMD [ "npm", "start" ]