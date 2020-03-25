'use strict';

const Note = require('./models/notes-schema.js');
const Category = require('./models/categories-schema.js');

class Notes {
    constructor(args) {
        this.execute(args.command);
    }

    execute(command) {
        if (command.action === 'add') {
            this.add(command.payload);
        }
    }

    async add(input) {

        const oneCategory = Category.findOne({ name: input.category });

        if (!oneCategory) {
            const newCategory = new Category({ name: input.category });
            try {
                let catRes = await newCtegory.save();
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
    }

    async delete(input) {
        try {
            const oneCategory = await Category.findByIdAndDelete(input.command.idToDelete);
            console.log('successfully deleted: ', oneCategory);
        } catch (e) {
            console.error(e);
        }
    }

    async list(input) {
        try {
            const allNotes = await NoteModel.find();
            allNotes.forEach(val => {
                console.log(val.note);
            });
        } catch (e) {
            console.error(e);
        }
    }
};

module.exports = Notes;
