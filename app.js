/*
 * standart : commonJS va ES:(`ecma script`) moduls
 */
const user = require("./task.js");
console.log("user:", user);

console.log('app.js module:',module.children[0].exports);
