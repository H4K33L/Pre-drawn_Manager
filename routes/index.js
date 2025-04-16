var express = require('express');
var router = express.Router();
const fs = require('node:fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  /* set the folder path */
  const folderPath = 'views/character_sheet/';

  /* function use to remove extension in file list */
  const removeExtension = str => {
    const index = str.indexOf('.');
    return str.substring(0, index);
  }

  /* get all the files in the folder in a array of strings */
  sheets = fs.readdirSync(folderPath)
    .map(fileName => {
      return removeExtension(fileName)
    })

  /* remove the '' empty sheet */
  var sheets = sheets.filter(function (el) {
      return el != "";
    });

  /* render the index page and send all the sheets to the template */
  res.render('index', { sheets: sheets });
});

module.exports = router;
