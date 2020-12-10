const sendmail = require('sendmail')();

sendmail({
    from: 'mail@example.com',
    to: 'mail@example.com',
    subject: 'Probando',
    html: 'Probando',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});