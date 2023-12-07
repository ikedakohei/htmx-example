const express = require('express');
const app = express();
const port = 3002;

// ホームページを提供
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// ランダムな数字を生成して返すルート
app.get('/random-number', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.send(randomNumber.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
