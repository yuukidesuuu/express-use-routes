const { Router } = require('express');

const r = Router();
r.all('/foo', (req, res) => {
  res.send('bar');
});
module.exports = r;
