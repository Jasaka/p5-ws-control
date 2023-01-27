require('localenv');

const path = require('path');

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const router = express.Router()
const port = process.env.PORT || 3000;

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/admin.html'))
})

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('special', (specialIndex) => {
        console.log('special: ' + specialIndex);
        io.emit('special', specialIndex);
    });

    socket.on('sceneOne', (sceneOneIndex) => {
        console.log('sceneOne: ' + sceneOneIndex);
        io.emit('sceneOne', sceneOneIndex);
    });

    socket.on('sceneTwo', (sceneTwoIndex) => {
        console.log('sceneTwo: ' + sceneTwoIndex);
        io.emit('sceneTwo', sceneTwoIndex);
    });

    socket.on('sceneThree', (sceneThreeIndex) => {
        console.log('sceneThree: ' + sceneThreeIndex);
        io.emit('sceneThree', sceneThreeIndex);
    });

    socket.on('sceneFour', (sceneFourIndex) => {
        console.log('sceneFour: ' + sceneFourIndex);
        io.emit('sceneFour', sceneFourIndex);
    });

    socket.on('sceneFive', (sceneFiveIndex) => {
        console.log('sceneFive: ' + sceneFiveIndex);
        io.emit('sceneFive', sceneFiveIndex);
    });
});

app.use('/', router)
app.use('/admin', router)
app.use('/public', express.static(path.join(__dirname + '/public')));

http.listen(port, () => {
    console.log(`App listening on ${port}`)
})
