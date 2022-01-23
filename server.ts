import path from 'path';
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(_req: any, res: any) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
});
