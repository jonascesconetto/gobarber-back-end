# GoBarber API

## Getting started

### Requirements

-   Node.js
-   Yarn (recommended) or npm

### Clone the project and access folder

```sh
$ git clone https://github.com/edjust/gobarber-back-end.git && cd gobarber-back-end
```

### Follow the steps below

```sh
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name redis -p 6379:6379 -d -t redis:alpine

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```
