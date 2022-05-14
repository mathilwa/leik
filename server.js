const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, 'build');
const port = process.env.PORT || 3000;

console.log('dir', __dirname)
console.log('public', publicPath)
app.use(express.static(publicPath));
// app.use(express.static(__dirname + '/build'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
