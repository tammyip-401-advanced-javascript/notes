'use strict';

const schema = require('../models/notes-schema.js');
const Model = require('../models/model.js');
const Category = require('../models/categories-schema.js');
const mongoose = require('mongoose');

class Notes extends Model {
    constructor(args) {
        super();
        this.model = schema;
        this.execute(args.command);
    }

    async execute(command) {
        if (command.action === 'add') {
            await this.add(command);
        }
        if (command.action === 'delete') {
            await this.remove(command.idToDelete);
        }
        if (command.action === 'list') {
            await this.list(command.category);
        }
        mongoose.disconnect();
    }

    async add(input) {
        console.log(input)
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

        // const noteObject = new NoteModel(rawObject);

        await this.create(rawObject);
    }

    async remove(id) {
        console.log(id)
        let deleted = await this.delete(id);
        if (deleted) {
            console.log('successfully deleted:', deleted)
        } else {
            console.log('record does not exist.')
        }
    }

    async list(categoryName) {
        console.log(categoryName)
        let result = await this.read();
        if (categoryName) {
            result = result.filter(note => note.category === categoryName)
            console.log('Display record under category', categoryName)
        } else {
            console.log('Displaying all notes:');
        }
        console.log(result);
    }
};

module.exports = Notes;
