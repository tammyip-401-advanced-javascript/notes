'use strict';

const LinkedList = require('./linkedlist.js');

describe('passes all lab tests', () => {
  it('can instantiate an empty list', () => {
    expect(() => {
      new LinkedList();
    }).not.toThrow();
  });

  it('can insert a value into the list with insert()', () => {
    let newList = new LinkedList();
    newList.insert('A');
    let str = newList.toString();

    expect(str).toBe('A -> null');
  });

  it('can search for values in a linked list with includes()', () => {
    let linkedList = new LinkedList();
    linkedList.insert(5);
    linkedList.insert(10);
    linkedList.insert(15);
    linkedList.insert(20);

    expect(linkedList.includes(5)).toEqual(true);
    expect(linkedList.includes(10)).toEqual(true);
    expect(linkedList.includes(15)).toEqual(true);
    expect(linkedList.includes(20)).toEqual(true);
    expect(linkedList.includes(100)).toEqual(false);
    expect(linkedList.includes(200)).toEqual(false);
  });

  it('can create a string representing all values in the linked list with toString()', () => {
    let linkedList = new LinkedList();

    expect(linkedList.toString()).toEqual('null');

    linkedList.insert(300);
    expect(linkedList.toString()).toEqual('300 -> null');

    linkedList.insert(200);
    expect(linkedList.toString()).toEqual('200 -> 300 -> null');

    linkedList.insert(100);
    expect(linkedList.toString()).toEqual('100 -> 200 -> 300 -> null');
  });

});