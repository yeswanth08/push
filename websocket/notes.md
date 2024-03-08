#### actually clients and server communicate using polling

this may leads to the heavy load on the server

when you connect a normal http connection to the server you close the connection to the server after getting the response 

websocket is used to hold the connection paradigm untill you want to close the connection with the server 

> websocket(to float on the internet / or to stay connected with the server)

> we just do with upgradation of the request header


## socket.io is a library used to upgrade the header of the normal http header 