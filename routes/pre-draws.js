var express = require('express');
var router = express.Router();
const fs = require('node:fs');

/* GET pre-draw selection page */
router.get('/:folder', function(req, res, next) {
  /* set the folder path */
  var folderPath = 'data/';

  /* get the folder name */
  preDrawFolder =  req.params.folder;

  /* function use to remove extension in file list */
  const removeExtension = str  => {
    const index = str.indexOf('.');
    return index == -1 ? str : str.substring(0, index);
  }

  /* function use to get all the name of content in folder path in input */
  const fileInFolder = path => {
    return fs.readdirSync(path)
      .map(fileName => {
        return removeExtension(fileName);
      })
  }

  var dataList = fileInFolder(folderPath);
  
  if( dataList.includes(preDrawFolder) ){
    folderPath += "/"+preDrawFolder
    var preDrawsList = fileInFolder(folderPath)

    /* 
    render the template and all the pre-draws caracter 
    in the folder coresponding to the caracter sheet template
    */
    res.render('pre-draws', {sheet : preDrawFolder, preDraws : preDrawsList});
  } else {
    // redirection index + message éreur
  }
  
});

module.exports = router;