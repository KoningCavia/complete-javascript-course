// Remember, we're gonna use strict mode in all scripts now!

// in console do live-server to open lie server
('use strict');

const x = '23';

if (x === 23) console.log(23);

const calcAge = birthyear => 2037 - birthyear;

console.log(calcAge(1991));
