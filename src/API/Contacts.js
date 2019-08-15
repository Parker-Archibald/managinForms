
const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://admin:AdminAccess@cluster0-cww12.mongodb.net/test?retryWrites=true&w=majority';
const dbName = 'Practice';

function connToDB(whatToDo, props) {
MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
    assert.equal(null,err);
    console.log("Connected succesfully to server");

    const db = client.db(dbName);

    const insertDocuments = function(db, callback) {
        const collection = db.collection('documents');
        let firstName = props.firstName;
        let lastName = props.lastName;
        let email = props.email;
        let phone = props.phone;
        let password = props.password;

        collection.insertMany([
            {firstName: firstName, lastName: lastName, email: email,
            phone: phone, password: password}
        ]), function(err, result) {
            assert.equal(err, null);
            console.log("Added user");
            callback(result);
        }
    }
    
    const removeDocument = function(db, callback) {
        let userEmail = props.email;
        let userPass = props.password;
        const collection = db.collection('documents');
        collection.deleteOne({email: userEmail, password: userPass}, function(err, result) {
            console.log("Removed " + props.email + " " + userPass);
            callback(result);
        })
    }

  //   const getDocuments = function(db, callback) {
  //     const collection = db.collection('documents');
  //     collections.find({}).toArray(function(err, docs) {
  //         assert.equal(err,null);
  //         callback(docs);
  //     })
  // }

    // whatToDo(db, function() {
    //     client.close();
    //   });
    if(whatToDo === "insertDocuments") {
        insertDocuments(db, function() {
        client.close();
      });
    }
    else if(whatToDo === "removeDocument") {
        removeDocument(db, function() {
            client.close();
        })
    }

    // if(whatToDo === "getDocumnets") {
    //   getDocuments(db, function() {
    //     client.close();
    //   })
    // }


const updateDocument = function(db, callback) {
    const collection = db.collection('documents');
    collection.updateOne({email :props.email}, {$set: {password: props.password}}, function(err, result) {
        console.log("Updated the document with the field firstName to yeet");
        callback(result);
    })
}

})
}

app.use(express.json());
app.use(cors());

let contacts = [];
let count = 1;

app.get("/", (req, res) => {
  const person = contacts.map(contact => {
    const { password, confirm, login, ...value } = contact;
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
    const {confirm, login, redirect, id, ...peeps} = req.body;
    connToDB("insertDocuments", peeps);
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
    }
  }
      res.send(result);
})

app.delete('/', function (req, res) {
    let result = false;
    for(let i = 0; i < contacts.length; i++) {
        if(req.body.password === contacts[i].password && req.body.email === contacts[i].email) {
            contacts.splice([i]);
            result = true;            
        }
        console.log(contacts);
    }
    connToDB("removeDocument", req.body);
        res.send(result);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



