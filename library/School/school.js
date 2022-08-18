"use strict";

function getSchool (array) {

try {
array = array.toLocaleString();
array = array.split("");

var result1 = array.join(" "); 
var result1 = result1.replace(/(к|k)/ig, '000');
var result1 = result1.replace(/(м|m)/ig, '000000');
var result1 = result1.replace(/(к|k)/ig, '000');
var result1 = result1.replace(/(м|m)/ig, '000000');

var result = result1.replace("*", "*");
var result = result1.replace("/", "/");
var result = result1.replace("+", "+");
var result = result1.replace(":", "/");
var result = result1.replace("-", "-");
var result = result1.match(/[0-9]{1,3}/g)

var ArrayList = [];

ArrayList.push({
id: 1,
resh: result[0] + array[1] + result[1],
resh1: eval(result[0] + array[1] + result[1]),
result: eval(array[0],array[1],array[2])
});

ArrayList.push({
id: 2,
resh1: eval(ArrayList[ArrayList.length-1].resh + array[3] + result[2]),
resh: ArrayList[ArrayList.length-1].resh + array[3] + result[2],
});

/*if (Object.keys(array).length === 3) {
ArrayList[0].resh = result[0] + array[0];
ArrayList[0].resh1 = eval(result[0] + result[2])
}*/

if (Object.keys(array).length === 6) {

ArrayList[ArrayList.length - 1].resh = ArrayList[ArrayList.length-2].resh + array[3] + result[2] + result[3];
ArrayList[ArrayList.length - 1].resh1 = eval(ArrayList[ArrayList.length-1].resh + array[3] + result[2] + result[3]);

}

if (Object.keys(array).length === 7) {

ArrayList.push({
id: 3,
resh1: eval(ArrayList[ArrayList.length - 1].resh + array[5] + result[3]),
resh: ArrayList[ArrayList.length - 1].resh + array[5] + result[3]
});

}

/*if (Object.keys(array).length >= 7) {
ArrayList.push({
id: 3,
resh1: eval(ArrayList[ArrayList.length-1].resh += array[3] + result[2]),
resh: ArrayList[ArrayList.length-1].resh += array[3] + result[2]
});
}*/

var text = "";
var compare = eval(array.join(""));
var evalute = compare;
var primer = evalute.toLocaleString().split("").reverse().join('').match(/[0-9]{1,3}/g).join(',').split('').reverse().join('');

text += `👔 Решил ваш пример:

💎 Результат: ${eval(array.join(""))}
👔 Результат: ${primer}
👤 50% от результата: ${eval(array.join("")) / 2}

👑 Решение:

${ArrayList.map(e=>`${e.id}. ${e.resh} = ${e.resh1}`).join("\n")}
`;
if (Object.keys(array).length <= 7) {
return text;
}
else if (Object.keys(array).length > 7) {
return text = `💎 Нельзя вводить такие примеры!
👑 Максимальные пример: 5+5*4*7`;
}
} catch (error) {
error = error.toLocaleString();
console.error(error);
}
};

console.log(getSchool("5+5+7/9"))