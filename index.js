const express = require('express');
const app = express();
const Vigenere = require('caesar-salad').Vigenere;
const port = 2000;

app.get('/', (req, res) => {
    res.send('Hello, world!!!\n');
});

app.get('/:text', (req, res) => {
    const MainText = req.params.text;
    res.send(MainText);
});

app.get(`/encode/:text`, (req, res) => {
    const text1 = req.params.text;
    const encodeText = Vigenere.Cipher('password').crypt(text1);
    res.send(encodeText);
});


app.get(`/decode/:text`, (req, res) => {
    const text2 = req.params.text;
    const decodeText = Vigenere.Decipher('password').crypt(text2);
    res.send(decodeText);
});

app.listen(port, () => {
    console.log(`Server listening at  http://localhost:${port}`);
});

