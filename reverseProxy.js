const path = require('path');
const redbird = require('redbird');

const proxy = redbird({ port: 80 });

const routes = [
  ['spncrwd.com', '127.0.0.1:3000'],
  ['outdoorstorage.spncrwd.com', '127.0.0.1:3001'],
  ['test.spncrwd.com', '127.0.0.1:3002'],
  ['test2.spncrwd.com', '127.0.0.1:3003'],
];

routes.forEach(([from, to]) => proxy.register(from, to));
