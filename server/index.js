const express = require('express');
const routes = require('./routes/api')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const SessionModel = require('./models/Session')


var app = express()
var http = require('http').createServer(app);

app.use(cors())

app.set('secretKey', 'CHEIESECRETA');

//connect to MongoDB
mongoose.connect('mongodb://localhost/unitymed', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', routes);

var io = require('socket.io')(http);
  
var socket = require('socket.io');

io
    .of('/sessions')
    .on('connection', (socket) => {

        console.log('made socket connection');


        socket.on("joinRoom", async room => {
            //TODO: Add db check to see if room exists
            socket.join(room)
            console.log("Joining Room...: " + room);

            var session = await SessionModel.findById({_id:room})
            socket.emit("success", "Room Name: " + room);

            // Handle chat event
            socket.on('chat', function(data){
                console.log(data);
                session.conversation.push(data)
                session.save()

                io
                .of('/sessions')
                .to(room)
                .emit('chat', data);
            });
        })

        // Handle typing event
        socket.on('typing', function(data){
            socket.broadcast.emit('typing', data);
        });
});


//error handling
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

http.listen(4000, ()=>{
    console.log('Server running on port 4000')
})
