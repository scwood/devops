const path = require('path');
const redbird = require('redbird');

const proxy = redbird({
  port: 80,
  ssl: {
    port: 443,
    redirect: true,
  },
  letsencrypt: {
    path: path.join(__dirname, 'certs'),
    port: 9999,
  },
});

const routes = [
  ['201r.spncrwd.com', 'localhost:3000'],
  ['lab2.462.spncrwd.com', 'localhost:3001'],
  ['cities.201r.spncrwd.com', 'localhost:3002'],
  ['act8.201r.spncrwd.com', 'localhost:3006'],
  ['node.201r.spncrwd.com:3004', 'localhost:3004'],
  ['act9.201r.spncrwd.com', 'localhost:3007'],
];

const sslRoutes = [
  ['spncrwd.com', 'localhost:8080'],
  ['oauth.462.spncrwd.com', 'localhost:3003'],
  ['gossip.462.spncrwd.com', 'localhost:3005'],
  ['gossip2.462.spncrwd.com', 'localhost:3008'],
];

routes.forEach(([from, to]) => proxy.register(from, to));

sslRoutes.forEach(([from, to]) => {
  proxy.register(from, to , {
      ssl: {
        letsencrypt: {
          email: 'spencercwood@gmail.com',
          production: true,
        },
      },
    }
  );
});
