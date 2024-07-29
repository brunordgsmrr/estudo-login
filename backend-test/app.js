const bcrypt = require('bcrypt');

const saltRounds = 10;

const password = 'olamundo'

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, (err, hash)=>{
        
        console.log(hash)
    })
})