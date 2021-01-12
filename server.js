const express = require('express');
const expressSession = require('express-session');
const app = express();

app.set('view engine', 'hbs');

app.use(
  expressSession({
    resave: true, // saves the cookie on each client <-> communication
    saveUninitialized: true, // save cookie even if nothing to track
    secret: 'some long random string here', // used to encrypt the cookie
    name: 'mericookie',
  })
);

app.get('/', (req, res) => {
  console.log(req.session);

  if (!req.session.visits) req.session.visits = 1;
  else req.session.visits++;

  res.render('index', { count: +req.session.visits });
});

app.listen(3333, () => {
  console.log('http://localhost:3333');
});
