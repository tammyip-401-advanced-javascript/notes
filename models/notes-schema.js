'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  note: { type: String, required: true },
  category: { type: Array }
});

// build a data model from this schema
// first parameter = collection name (must be in plural)

const notesModel = mongoose.model('notes', notesSchema);

module.exports = notesModel;