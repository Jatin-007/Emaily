const express = require ('express'); // node js does not have es2015 module support... thatsy we didnt usedthe expression 'import'
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'cyaaa'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);