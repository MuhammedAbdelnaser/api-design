const fs = require('fs/promises');
const path = require('path');

// const result = fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8')
// console.log(result)

const read =  async () => {
  const result = fs.readFile(path.join(__dirname, 'package.json'), 'utf-8')
  return result
}
read().then(res => console.log(res))
console.log('first')
