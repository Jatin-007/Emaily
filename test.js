const express = require ('express');
const app = express (); // launching up the express framework

app.get('./asdasd', (req, res) => res.send('Helloooo'))

app.listen(3001, ()=> {
    console.log('everything works fine!!!');
})