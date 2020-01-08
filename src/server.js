require('./databases');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const publicDir = require('path').join(__dirname, '../public');

const imageRoutes = require('./routes/images');

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization,Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicDir));

// index sample
// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/index.html`);
// });

// All routes
imageRoutes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
