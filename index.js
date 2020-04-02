'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/app';

//start the database
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

let parsedInput = new Input(process.argv.slice(2));
let notes = new Notes(parsedInput);



