# MERN-Auth

MERN-Auth is web application utilizing ReactJS for frontend, ExpressJS and NodeJS for backend and MongoDB for database.
The application is from the course of Traversy Media with main focus in authentication.

# Installation

After cloning or downloading the application from github, run:

```bash
npm install
```

# Usage

To get the web app up and running, first you have to create a `.env` with the enviromental variables:

```bash
NODE_ENV=development
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/mern-auth
JWT_SECRET="your secret"
```

For the `MONGO_URI` variable you either have the mongod (daemon) running locally with the url of your choosing, or you use another cloud-based database.

Finally, run:

```bash
npm run dev
```

to have the application up and running.
