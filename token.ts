const {sign} = require('jsonwebtoken');

let user = {
     name:"Omar",
     age:20,
     country:"egypt",
     role:'admin'
};

const token = sign(user,"Omar_secret_key",{expiresIn:"210s"});

console.log(token);
