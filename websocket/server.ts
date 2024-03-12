/**
 * websocket --> updating the header to stay connected with the server 
 * socket.io is a library
 */

// first create a simple express server

import express,{ Response,Request } from "express";
import cors from 'cors';
import { Socket } from "socket.io";

const app = express();
// as listen hosts the server 
const port = process.env.PORT || 3000;
const server = app.listen(port);


// middlewares
app.use(cors());


// express routes

app.get('/chat',(req:Request,res:Response)=>{

})