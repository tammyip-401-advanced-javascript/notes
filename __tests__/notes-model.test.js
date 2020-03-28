const supergoose = require('@code-fellows/supergoose');
const NoteModel = require('../models/notes-model.js');

beforeAll(async () => {
  await NoteModel.create({
    action: 'add',
    payload: 'this is a book',
    category: 'random',
  });

  await NoteModel.create({
    action: 'add',
    payload: 'good morning',
    category: 'random',
  });
});

describe('Database can create', () => {
  it('for best case', async () => {
    let response = await NoteModel.create({
      action: 'add',
      payload: 'this is an apple',
      category: 'random',
    });
    console.log(response);

    expect(response).not.toBe(false);
    expect(response.payload).toBe('this is an apple');
  })
});

describe('Database can delete', () => {
  it('an existing record', async () => {
    let response = await NoteModel.readByField({
      payload: 'this is an apple',
    });
    expect(response.length).toBe(1);
    let appleId = response[0]._id;
    let delRecord = await NoteModel.delete(appleId);
    expect(delRecord).toBe(true);
  })
});
