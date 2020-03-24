'use strict';

const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
  name: { type: String, required: true },
});

// build a data model from this schema
// first parameter = collection name (must be in plural)

const categoriesModel = mongoose.model('categories', categoriesSchema);

module.exports = categoriesModel;