const express = require('express');

const app = express();
const path = require('path');
const { selectImagesByListingId } = require('../database/db-func');

app.use(express.static(path.resolve(__dirname, '../public/')));

app.get('/api/listings/:listingID/photos', (req, res) => {
  const { listingID } = req.params;
  selectImagesByListingId(listingID)
    .then(images => res.status(200).send(images))
    .catch(err => res.status(500).send(err.message));
});

app.listen(3003, () => {
  console.log('listening on port 3003');
});

module.exports = app;
