"use strict";

const os = require("os");

const bytes = os.freemem()
var gg
if (bytes >= 1073741824) { gg = (bytes / 1073741824).toFixed(2) + " GB"; }
else if (bytes >= 1048576) { gg = (bytes / 1048576).toFixed(2) + " MB"; }
else if (bytes >= 1024) { gg = (bytes / 1024).toFixed(2) + " KB"; }
else if (bytes > 1) { gg = bytes + " bytes"; }
else if (bytes == 1) { gg = bytes + " byte"; }
else { gg = "0 bytes"; }
const bytess = os.totalmem()
var ggs
if (bytess >= 1073741824) { ggs = (bytess / 1073741824).toFixed(2) + " GB"; }
else if (bytess >= 1048576) { ggs = (bytess / 1048576).toFixed(2) + " MB"; }
else if (bytess >= 1024) { ggs = (bytess / 1024).toFixed(2) + " KB"; }
else if (bytess > 1) { ggs = bytess + " bytes"; }
else if (bytess == 1) { ggs = bytess + " byte"; }
else { ggs = "0 bytes"; }

exports.getDeviceInfo = {
op: ggs,
sp: gg
};