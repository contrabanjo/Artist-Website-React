const express = require("express");
const path = require('path');

const fs = require('fs');
const cors = require('cors');


const app = express();


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

app.use(express.static("public"))

app.use(cors());

app.get('/allMedia', (req, res)=>{
  const folder = "public/images";
  const imageObject = {
    images: fs.readdirSync(folder)
  }
  res.send(JSON.stringify(imageObject));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})