var crypto = require('crypto'),
    idSecKey = require('../../../config').ID_SEC_KEY,
    algorithm = 'rc2';

exports.decode = function(id) {

  if(!+id) {
    var decrypted = '';
    try{
      var decipher = crypto.createDecipher(algorithm, idSecKey);
      decrypted += decipher.update(id.toString(), 'base64', 'utf8');
      decrypted += decipher['final']('utf8');console.log(3)
      id = decrypted;
    }catch(ex){console.log(ex)}
    return id;
  } else {
    return 0;
  }
};


exports.encode = function(id) {
  if(!+id)
    return id;
  var encrypted = "";
  var cip = crypto.createCipher(algorithm, idSecKey);
  encrypted += cip.update(id.toString(), 'utf8', 'base64');
  encrypted += cip.final('base64');
  id = encrypted;

  return id;
}
