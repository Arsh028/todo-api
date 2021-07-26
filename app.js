const express = require('express');
const app = express();
app.use(express.json({ extended: true }));

let list = [];

//get all tasks
app.get('/', function (req, res) {
  res.json(list);
});

//add task to the list
app.post('/add', function (req, res) {
  const task = req.body.task;
  list.push(task);
  console.log('list is ' + list);
  //newlist = JSON.Parse(list);
  res.json(list);
});

//remove task by location
app.post('/remove', function (req, res) {
  const location = req.body.location;
  list.splice(location, 1);
  console.log('list is ' + list);
  res.json(list);
});

//update task by location
app.post('/update', function (req, res) {
  const task = req.body.task;
  const location = req.body.location;
  list[location] = req.body.task;
  console.log('list is ' + list);
  res.json(list);
});

app.listen(3000, function () {
  console.log('server started on 3000');
});
