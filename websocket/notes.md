## websockets

this may leads to the heavy load on the server

when you connect a normal http connection to the server you close the connection to the server after getting the response 

websocket is used to hold the connection paradigm untill you want to close the connection with the server 

> websocket(to float on the internet / or to stay connected with the server)

> we just do with upgradation of the response header


## socket.io is a library used to upgrade the header of the normal http header 

> ways to conncecting to the backed servers/http servers

1) we can have normal req,res (single dulplex connection)
2) long polling (we keep on sending the req to the server in every on sec)
3) websocket --> it is a communication protocol which modifies the normal http header which provides the full-duplex communication

> assume a single connection to the server as a socket in websocket

when you want to run a live fronted which updates the data in the fronted vigorusly then better to use websocket in which if the data from the server can be sent with a timebounded or live 

**if you want to stay connected with the server to have the live updates from the server**

> methods of socket.io
    emmit --> is used to send 
    This method is used to send events and associated data to the other party (either the client or the server).
---
    on --> is used to listen the connection / to catch 
    This method is used to listen for events sent from the other party (either the client or the server).
---
    to--> to send the connection to the specific user/ ws connection in the sever
    join --> to group the ws connections ex: grouping for 

> there is differnce between io.emmit and socket.emmit
io.emmit===socket.broadcast.emmit



> package.json file -->
    script tag --> we can config the trems in this file like npm run dev , npm start