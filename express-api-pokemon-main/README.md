## The node.js API Pokemon app

Api project with express and mongoDB

## Requirements

For dataBase, you will need mongoDB (https://www.mongodb.com/cloud/atlas)

For development, you will only need Node.js (version : 19) and a node global package, npm, installed in your environement.
Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v19.3.0

    $ npm --version
    9.2.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be
happy.

    $ npm install npm -g

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/Jrm-bnt/express-api-pokemon.git
cd ./app/backend
```

```bash
npm install
```

## Steps for read and write access

Step 1: create `.env` at ./app/backend/ inject your credentials and so it will look like this

```
NODE_ENV=development
PORT=5000
MONGO_URI=<address mongodb+srv>
```

Step 2: To start the express server, run the following command

```bash
npm run start
```

or, if you want auto restart server :

```bash
npm run server
```

`

Final Step:

Open Postman or other API tools at http://localhost:5000 and test routes

