const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

let contacts = [];
let count = 1;

app.get("/", (req, res) => {
  const person = contacts.map(contact => {
    const { password, ...value } = contact;
    return value;
  });
  res.send(person);

});

app.post("/", function(req, res) {
  let result = false;
  if (
    req.body.firstName &&
    req.body.lastName &&
    req.body.email &&
    req.body.phone &&
    req.body.password
  ) {
    req.body.id = count;
    count++;
    contacts.push(req.body);
    result = true;
  }
  res.send(result);
});

app.put('/', function (req, res) {
    let result = false;
    for(let i = 0; i < contacts.length; i++) {
        if(req.body.email === contacts[i].email) {
            contacts[i].password = req.body.password;
            contacts[i].firstName = "Changed";
            result = true;
        }
    }
        res.send(result);
})

app.delete('/', function (req, res) {
    let result = false;
    for(let i = 0; i < contacts.length; i++) {
        if(req.body.password === contacts[i].password && req.body.id === contacts[i].id) {
            contacts.splice([i]);
            result = true;
        }
    }
        res.send(result);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



