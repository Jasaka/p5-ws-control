require('localenv');

const express = require('express');
const path = require('path');
const socketIO = require('socket.io');

const app = express()
const router = express.Router()
const port = process.env.PORT || 3000;

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'))
})

router.get('admin', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/admin.html'))
})


app.use('/' , router)
app.use('/admin' , router)
app.use('/public', express.static(path.join(__dirname+'/public')));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})