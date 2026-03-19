## Node.js + postgresSQL

# A production structeured CRUID REST API using node.js, express,js and postgresSQL

## PROJECT STRUCTURE
- server.js  -> main file
src->
    db-> index.js
    routes-> user.routes.js
    controller-> user.controller.js
    services-> user.services.js




# SETUP INSTRUCTION
1- prequities-> NOde.js and PostgresSQL 



## Clone PROJECT
 git clone https://github.com/Praveen1692/backend_assignment.git
 npm install

 config .env file



 create database and run schema 
 - psql -U postgres -d backend_assignment -f src/schema/schema.sql



 # Start The Server
 # Production
 npm start

# Development
 npm run dev


