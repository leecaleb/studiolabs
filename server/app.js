const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Serverf is up and running!' });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
