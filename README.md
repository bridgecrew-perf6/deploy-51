# WayUp Frontend

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Launch project with docker compose

### Prerequisites

At first [Docker](https://docs.docker.com/engine/install/) should be installed. Thereafter install [Docker compose](https://docs.docker.com/compose/install/).

### Building and launching project in docker container

To launch docker container you could either run, depending on version of compose you installed:

```sh
docker-compose up --build
```
for docker compose version ~ 1

```sh
docker compose up --build
```
for compose version >= 2
