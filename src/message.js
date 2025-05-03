module.exports = class Message {
  chatText;
  direction;
  gameID;
  junkLines;
  playerID;
  playerName;
  seed;
  toPlayer;
  type;
  players;  // only sent by the server to clients, containing an object: { playerID: 'playerName', ... }

  /**
  *
  * @param { messageTypeEnum } type
  * @param { UUID }       playerID
  * @param { UUID }       gameID
  * @param { Object }       o            - optional message properties
  * @param { Direction }    o.direction  - direction to move a shape
  * @param { Number }       o.junkLines  - number of junk lines to send
  * @param { String }       o.seed       - shared seed for the game
  * @param { UUID }         o.toPlayer   - player to send junk lines to
  * @param { String }       o.chatText   - text sent in chat
  * @param { String }       o.playerName - name of the player connecting
  */
  constructor(type, playerID, gameID, o = {}) {
    this.type = type;
    this.playerID = playerID;
    this.gameID = gameID;

    Object.assign(this, o);
  }

  /**
   * @returns { Message } message
   */
  static deserialize(rawData) {
    const m = new Message();
    return Object.assign(m, JSON.parse(rawData));
  }

  serialize() {
    return JSON.stringify(this);
  }
};
