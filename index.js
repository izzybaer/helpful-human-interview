const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));
app.use(express.static(`${__dirname}/build`));
app.get('*', (req, res) => res.sendFile(`${__dirname}/build/index.html`));

app.listen(3000, () => {
  console.log('__SERVER_UP__', 3000);
});
