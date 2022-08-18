"use strict";

const utils = require('../../Array/array.js');

const endString = (text) => {
	if (text.includes("&#13;") || /^(?:\[club\d+\|.*])/.test(text)) {
		return text;
	}
	let newText = text;
	if (/(?=[^\d])[\wа-яё]/i.test(utils.last(text.split("")))) {
		newText += ".";
	}
	if (/(?=[^\d])[\wа-яё]/.test(text[0])) {
		newText = newText.substring(1);
		newText = text[0].toUpperCase() + newText;
	}
	return newText;
};

exports.MessageFrom = endString;