const express = require('express');
const path = require('path');
const app = express();
const data = require('./data');

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/api/people', (req, res) => {
  res.send(data.people);
});

app.get('/api/people/:name', (req, res) => {
  const person = data.people.find((person) => {
    return person.name === req.params.name;
  });

  if (person) {
    res.status(200).json({ person });
  } else {
    res.status(404).json({ message: `<h3>${req.params.name} Not Found</h3>` });
  }
});

app.listen(PORT, () => {
  console.log(`Server Started on Port: ${PORT}`);
});
