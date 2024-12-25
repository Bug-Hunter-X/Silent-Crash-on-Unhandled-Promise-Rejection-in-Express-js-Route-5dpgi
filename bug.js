const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling missing or insufficient
    console.error(err);
    res.status(500).send('Something went wrong!');
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    setTimeout(() => {
      reject(new Error('Database connection failed'));
    }, 100);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});