import {Response,Request} from 'express';
import express from 'express';
import path from 'path';
import { Server, Socket } from 'socket.io';

const app = express();
const port = process.env.PORT||9000;
// the actuall main thing in the express is app.listen() method
// it enables or host the express server
const server = app.listen(port);
const io:Server = new Server(server);
// this is the file path .. says to comeback form the relative path of that file/directory
// breakdown the syntax .. +/public
const filepath = path.join(__dirname,'../client/ws','index.html');

io.on('connection',(socket:Socket)=>console.log(socket.id));

// express routes 

app.get('/',(req:Request,res:Response)=>{
    res.sendFile(filepath);
});

