const express = require('express');
const app = express();


// app.get("/test", (req, res) => {
//   res.send('Successfull starting');
// });

app.use(express.static('public'))

app.listen(8000, () => {
  console.log('port is listening');
});
