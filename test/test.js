const lib = require('../src/index');
const assert = require('node:assert');

const m = new lib.Message(lib.messageTypeEnum.GAME_OVER, 4, '30d97757-62e4-4a25-bd97-f6e1c8f665b0', { yee: 'yee' });

const serializedVariation1 = '{"type":2,"playerID":4,"gameID":"30d97757-62e4-4a25-bd97-f6e1c8f665b0","yee":"yee"}';
const serializedVariation2 = '{"gameID":"30d97757-62e4-4a25-bd97-f6e1c8f665b0","playerID":4,"type":2,"yee":"yee"}';

const serializedMessage = m.serialize();

const match = serializedMessage === serializedVariation1 || serializedMessage === serializedVariation2;

assert.ok(match);

lib.debug('yee');
