'use strict';
const mongoose = require('mongoose');
const notesMongooseModel = require('./notes-schema.js');

class Model {
  constructor() {
  }

  async create(record) {
    try {
      let recordToAdd = new this.model(record);
      let addedRecord = await recordToAdd.save();
      console.log('successfully add: ', addedRecord);
      return addedRecord;
    } catch (e) {
      console.error('ERROR CREATING RECORD', e);
      return false;
    }
  }

  async read(_id) {
    try {
      // if (! typeof _id === mongoose.ObjectId) throw 'err';
      // let foundRecord = await this.model.find({ _id });
      // if (foundRecord.length) return foundRecord[0];
      // else throw 'err';
      let list = await this.model.find({});
      return list;
    } catch (e) {
      console.error('ERROR READING RECORD');
      return false;
    }
  }

  async update(id, record) {
    try {
      let updated = await this.model.findByIdAndUpdate(id, record, { new: true });
      console.log('successfully updated: ', updated);
      return updated;
    } catch (e) {
      console.error('ERROR UPDATING RECORD');
    }
  }

  async delete(_id) {
    console.log('testing delete:', _id)
    try {
      // if (! typeof _id === mongoose.ObjectId) throw 'err';
      let deleteRecord = await this.model.findByIdAndDelete(_id);
      return deleteRecord;
      // if (deleteRecord.deletedCount === 0) throw 'err';
    } catch (e) {
      console.log(e);
      // console.error('ERROR DELETING RECORD');
      return false;
    }
  }
}

module.exports = Model;;