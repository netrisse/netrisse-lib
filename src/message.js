module.exports = class Message {
  /**
  *
  * @param { messageTypeEnum } type
  * @param { UUID } playerID
  * @param { UUID } gameID
  * @param { Object }     o              - optional message properties
  * @param { Direction }    o.direction  - direction to move a shape
  * @param { Number }       o.junkLines  - number of junk lines to send
  * @param { String }       o.seed       - shared seed for the game
  * @param { UUID }         o.toPlayer   - player to send junk lines to
  */
  constructor(type, playerID, gameID, o = {}) {
    this.type = type;
    this.playerID = playerID;
    this.gameID = gameID;

    Object.assign(this, o);
  }

  serialize() {
    return JSON.stringify(this);
  }
};
