const mysql = require('mysql');
const bluebird = require('bluebird');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'loot',
  database: 'hero_module',
});

db.connect();

db.query = bluebird.promisify(db.query);

const selectImageURIsByListingID = (listingID) => {
  const sql = 'SELECT uri FROM photos WHERE listing_id=?';
  return db.query(sql, [listingID]);
};

module.exports = {
  selectImageURIsByListingID,
};
