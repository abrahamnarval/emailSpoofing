const sendmail = require('sendmail')();

sendmail({
    from: 'abrahamnarvaezv@gmail.com',
    to: 'abrahamnarval@misena.edu.co',
    subject: 'Probando',
    html: 'Probando',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});