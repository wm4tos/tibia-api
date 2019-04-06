const { GetDomFromURL, GetTextContent } = require('../utils/dom.utils');

const GetCharacterInfos = async (playerName) => {
  if (!playerName) throw new Error('Player name is required');

  const url = `https://secure.tibia.com/community/?subtopic=characters&name=${playerName}`;
  const dom = await GetDomFromURL(url);
  
  const playerNameSelector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)`;
  const playerNameFromDOM = GetTextContent(dom, playerNameSelector);
}

module.exports = {
  GetCharacterInfos,
}
