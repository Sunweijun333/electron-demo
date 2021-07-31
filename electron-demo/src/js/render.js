let filesystem = require('fs')

console.log('Hello NodeJs');
console.log(filesystem);

filesystem.writeFile('fstest.txt', 'Hello Node.js', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('写入成功');
    }
})

