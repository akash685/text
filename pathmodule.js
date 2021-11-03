const path = require('path')

console.log(path.sep)

const filePath = path.join('/contant', 'subfolder', 'test.txt')
console.log(filePath)


const base = path.basename(filePath)
console.log(base)

const absulute  = path.resolve(__dirname, 'contant', 'subfolder', 'text.txt')
console.log(absulute)