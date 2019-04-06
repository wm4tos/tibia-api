const { GetDomFromURL } = require('../utils/dom.utils');

const Character = require('../models/Character');

const GetCharacterInfos = (playerName) => {
  if (!playerName) throw new Error('Player name is required');

  return new Promise(async (resolve, reject) => {
    try {
      const url = `https://secure.tibia.com/community/?subtopic=characters&name=${playerName}`;
      const dom = await GetDomFromURL(url);

      const character = new Character(dom);
      
      if(character.PlayerDoesntExists()) {
        reject(new Error("Player doesn't exists"));
      }

      resolve(character.allCharacterInformation);
    } catch (err) {
      reject(err);
    };
  });

}

module.exports = {
  GetCharacterInfos,
}
