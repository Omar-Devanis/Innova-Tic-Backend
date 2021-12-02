import express from 'express';
import cors from 'cors'; 
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import conectarDB from "./db/db.js"
import {typeDefs} from './graphql/types.js'
import {resolvers} from './graphql/resolvers.js'

dotenv.config();

const server = new ApolloServer({
    typeDefs:typeDefs,
    resolvers:resolvers
})

const app = express();

app.use(express.json());
app.use(cors())

app.listen({port: process.env.PORT || 4000},async() => {
    await conectarDB();
    await server.start();
    server.applyMiddleware({app});

    console.log("Servidor OK")
});

