const express = require('express');
const app = express();
const reload = require('express-reload');
const port = 3000;
const path = `${__dirname}/src/`

app.use(reload(path));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(
  port,
  () => console.log(`App listening at http://localhost:${port}`)
);