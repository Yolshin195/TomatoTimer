const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app
  .use('/dist', express.static(path.join(__dirname, 'dist')))
  .use('/', express.static(path.join(__dirname, 'dist')))
  .get('/', (req,res) => res.sendFile("index.html",{root: __dirname}))
  .get('/settings', (req,res) => res.sendFile("index.html",{root: __dirname}))
  .get('/todo', (req,res) => res.sendFile("index.html",{root: __dirname}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
