const lib = require('../src/index');
const assert = require('node:assert');

const m = new lib.Message(lib.messageTypeEnum.GAME_OVER, 4, 2, { yee: 'yee' });

assert.strictEqual(m.serialize(), '{"type":2,"playerID":4,"gameID":2,"yee":"yee"}');

lib.debug('yee');
