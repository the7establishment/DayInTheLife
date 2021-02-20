const bcrypt = require('bcrypt-nodejs');
const SALT_FACTOR = 10;
var noop = function() {};

export async function encrypt(password) {
  

 const hashedPassword = await new Promise((resolve, reject) => {
  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if(err) { reject(err) }
    bcrypt.hash(password, salt, noop, 
      function(err, hash) {
        if (err) { reject(err) }
        resolve(hash)
      })
  })
});

  return hashedPassword
}

