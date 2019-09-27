#!/usr/bin/env node

const argv = require('yargs').argv;
const { red, green } = require('chalk');
const shotter = require('./index');
(async function() {
  try {
    const url = new URL(argv._[0]);
    await shotter(url);
    console.log(green('WP Theme shot successful'));
  } catch (e) {
    return console.error(red(e.message));
  }
})();
