// allows us to use import syntax in specs
require('babel-register')();
const jsdom = require('jsdom'); // https://github.com/tmpvar/jsdom
const data = require('../public/data');

global.document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };

module.exports.buildState = (props = {}) => {
  const defaultState = {
    cats: data.cats,
    dogs: data.dogs,
    selectedAnimal: null,
  };

  return Object.assign(defaultState, props);
};
