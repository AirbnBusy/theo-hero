const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../public/')));


app.listen(3003, () => {
  console.log('listening on port 3003');
});
