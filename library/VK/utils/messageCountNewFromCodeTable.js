"use strict";

const textArray = (text) => { if (text.slice(0)) { return text[0].toUpperCase() + text.slice(1) + "."; } };

module.exports = textArray;