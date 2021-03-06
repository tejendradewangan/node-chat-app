const path = require('path');
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname + '/../public')
// console.log(publicPath)

var app = express();
var server = http.createServer(app)

const port = process.env.PORT || 3000;

var io = socketIO(server);

// http://localhost:3000/socket.io/socket.io.js
app.use(express.static(publicPath))

io.on('connection', (socket)=>{
	console.log("New user connected...")

	socket.on('disconnect',()=>{
			console.log("User disconnected")
		})
})  	



server.listen(port, ()=> {
	console.log(`Server is running on port ${port}`);
});