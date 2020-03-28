'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  note: { type: String, required: true },
  category: { type: String }
});

// build a data model from this schema
// first parameter = collection name (must be in plural)

module.exports = mongoose.model('notes', notesSchema);