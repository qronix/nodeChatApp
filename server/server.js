const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000;
const {generateMessage} = require('./utils/message');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New user connected!');

    //socket.emit from admin welcome
    //socket.broadcast.emit from admin, new use joined
    socket.emit('newMessage',generateMessage("Admin","Welcome to the chat app"));

    socket.broadcast.emit('newMessage',generateMessage("Admin","New user joined!"));

    socket.on('createMessage',(message)=>{
        console.log(message);
        socket.broadcast.emit('newMessage',generateMessage(message.from,message.text));
 
        // socket.broadcast.emit('newMessage',{
        //     form:message.from,
        //     text:message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect',(socket)=>{
        console.log('That shit was closed!');
    });

});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});