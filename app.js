// i have taken data in JSON format so in Postman go to headers and set Content-Type : application/json

//FOR /add route POST as "task" : "task 1"

// FOR /remove route POST as "location" : "2" (deletes the task at specified index)

// FOR /update route POST as (updates with the task provided at specified index)
// {
//     "task" : "task new",
//     "location" : "3"
// }

//SORRY I added node modules by mistake in the staging area

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
  if (list.length != 0) {
    const location = req.body.location;
    list.splice(location, 1);
    console.log('list is ' + list);
    res.json(list);
  } else {
    res.send('ERROR');
  }
});

//update task by location
app.post('/update', function (req, res) {
  const task = req.body.task;
  const location = req.body.location;
  if (list.length != 0 && location <= list.length) {
    list[location] = req.body.task;
    console.log('list is ' + list);
    res.json(list);
  } else {
    res.send('ERROR');
  }
});

app.listen(3000, function () {
  console.log('server started on 3000');
});
