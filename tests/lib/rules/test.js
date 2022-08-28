'use strict';

const assert = require('assert');
const describe = require('describe');
const it = require('it');

describe('simple test', () => {
  it('even simpler test', () => {
    const trueObj = true;
    assert.strictEqual(trueObj, true);
  });
});
