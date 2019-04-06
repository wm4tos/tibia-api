const { JSDOM } = require('jsdom');

const GetDomFromURL = async (url) => {
  if (!url) throw new Error('URL is required');
  try {
    const dom = await JSDOM.fromURL(url);
    return dom;
  } catch (err) {
    console.error(err);
    throw new Error("Wasn't possible load this page now, sorry :(");
  };
}

const GetTextContent = (dom, selector) => {
  if (!dom.window) throw new Error('DOM must contains a window property');
  if (!selector) throw new Error('Selector is required');

  return dom.window.document.querySelector(selector).textContent;
}

module.exports = {
  GetDomFromURL,
  GetTextContent,
}
