'use strict';

const NoteModel = require('../models/notes-schema.js');
const Category = require('../models/categories-schema.js');
const mongoose = require('mongoose');

class Notes {
    constructor(args) {
        this.execute(args.command);
    }

    execute(command) {
        if (command.action === 'add') {
            this.add(command);
        }
        if (command.action === 'delete') {
            this.delete(command);
        }
        if (command.action === 'list') {
            this.list(command);
        }
    }

    async add(input) {

        const oneCategory = Category.findOne({ name: input.category });

        if (!oneCategory) {
            const newCategory = new Category({ name: input.category });
            try {
                let catRes = await newCategory.save();
                console.log('successfully add: ', catRes);
            } catch (e) {
                console.error(e);
            }
        }

        const rawObject = {
            note: input.payload,
            category: input.category,
        }

        const noteObject = new NoteModel(rawObject);
        try {
            const noteRes = await noteObject.save();
            console.log('successfully add: ', noteRes);
        } catch (e) {
            console.error(e);
        }
        mongoose.disconnect();
    }

    async delete(input) {
        try {
            const oneNotetoDelete = await NoteModel.findByIdAndDelete(input.idToDelete);
            if (oneNotetoDelete) {
                console.log('successfully deleted: ', oneNotetoDelete);
            } else {
                console.log('Fail to delete.')
            };
        } catch (e) {
            console.error(e);
        }
        mongoose.disconnect();
    }

    async list(input) {
        try {
            const allNotes = await NoteModel.find();
            allNotes.forEach(val => {
                console.log(val);
            });
        } catch (e) {
            console.error(e);
        }
        mongoose.disconnect();
    }
};

module.exports = Notes;
