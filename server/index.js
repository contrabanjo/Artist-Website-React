const express = require("express");
const path = require('path');


const app = express();


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.use(express.static("public"))
app.use(express.static(path.join(__dirname, '../dist')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// })

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})