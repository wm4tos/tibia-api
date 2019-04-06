const { GetTextContent } = require('../utils/dom.utils')

class Character {
  constructor(dom) {
    this._dom = dom;
  }

  get name() {
    const playerNameSelector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)`

    const name = GetTextContent(this._dom, playerNameSelector)
 
    return name
  }
}

module.exports = Character;
