const express = require('express');
const next = require('next');

const dev = false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const port = 3001

nextApp.prepare().then(() => {
  const app = express();

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on localhost:${port}`);
  });
});

