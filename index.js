"use strict";

const { MessageFrom } = require("./library/VK/utils/messageNewFromCode.js");
const { MessageFromTo } = require("./library/VK/utils/messageCountNewFromCodeTable.js");
const { IP, IP6 } = require('./library/IP/ip.js');
const { IPVK, IPTG } = {};
const { getLast } = require("./library/AnonymousFunction/getLast.js");
const { getProcent } = require("./library/AnonymousFunction/getProcent.js");
const { getDeviceInfo } = require("./library/AnonymousFunction/getDevice.js");
const { whileUtils } = require("./library/VK/utils/token.js");
//c onst { getReat } = require("./library/AnonymousFunction/getReat.js");


exports.MessageFrom = MessageFrom; // From UpperCase, .
exports.MessageFromTo = MessageFromTo;
exports.IP = IP; // IP
exports.IP6 = IP6; // IP6
exports.IPVK = IPVK; // IPVK
exports.IPTG = IPTG; // IPTG
exports.getLast = getLast; // getLast element
// exports.getProcent = getProcent; // getProcent element
exports.getDeviceInfo = getDeviceInfo; // info device
exports.whileUtils = whileUtils; // whileutils from token VK
exports.port = require('port-default'); // get port in from utils
// exports.getReat = getReat; // getReat in text
