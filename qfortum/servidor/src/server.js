const express = require('express');
const fileUpload = require('express-fileupload')
const path = require('path');


const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('Server listening to port 3000');
});


app.post('/upload', (req, res)=>{
  let EDFile = req.files.file
  EDFile.mv('./${EDFile.name}')
  console.log(EDFile.name)
});


app.get('/', (req, res) =>{
  console.log('Funciona')
});


