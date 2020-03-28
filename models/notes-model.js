'use strict';
const mongoose = require('mongoose');
const notesMongooseModel = require('./notes-schema.js');

class Model {
  constructor(mongooseModel) {
    this.model = mongooseModel;
  }

  async create(record) {
    try {
      let recordToAdd = new this.model(record);
      await recordToAdd.save();
      console.log('successfully add: ', recordToAdd);
    } catch (e) {
      console.error('ERROR CREATING RECORD');
      return false;
    }
  }

  async read(_id) {
    try {
      if (! typeof _id === mongoose.ObjectId) throw 'err';
      let foundRecord = await this.model.find({ _id });
      if (foundRecord.length) return foundRecord[0];
      else throw 'err';
    } catch (e) {
      console.error('ERROR READING RECORD');
      return false;
    }
  }

  async update(record) {
    try {
      let recordToUpdate = new this.model(record);
      await recordToUpdate.updateOne();
      console.log('successfully update: ', recordToUpdate);
    } catch (e) {
      console.error('ERROR UPDATING RECORD');
    }
  }

  async delete(_id) {
    try {
      if (! typeof _id === mongoose.ObjectId) throw 'err';
      let deleteRecord = await this.model.findByIdAndDelete({ _id });
      if (deleteRecord.deletedCount === 0) throw 'err';
    } catch (e) {
      console.error('ERROR DELETING RECORD');
      return false;
    }
  }
}

let noteModel = new Model(notesMongooseModel);

module.exports = noteModel;