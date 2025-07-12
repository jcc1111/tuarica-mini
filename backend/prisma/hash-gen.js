const bcrypt = require('bcryptjs');
const password = 'mundo1';
const hash = bcrypt.hashSync(password, 10);
console.log('Hash para "' + password + '":', hash);
