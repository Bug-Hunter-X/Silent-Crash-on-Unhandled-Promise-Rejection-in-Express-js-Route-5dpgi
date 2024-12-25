const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Something went wrong!');
    });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Database connection failed'));
    }, 100);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});