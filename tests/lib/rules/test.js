'use strict';

const assert = require('assert');
const describe = require('describe'); // eslint-disable-line
const it = require('it'); // eslint-disable-line

describe('simple test', () => {
  it('even simpler test', () => {
    const trueObj = true;
    assert.strictEqual(trueObj, true);
  });
});
