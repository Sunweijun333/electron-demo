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

let btnForCreateFile = document.querySelector('button');

let i = 1;
btnForCreateFile.onclick = function() {
    filesystem.writeFile(`fstest${i}.txt`, `File${i}: Hello Node.js`, (err) => {
        if (err) {
            console.log(err);
        } else {
            i++;
            console.log('写入成功');
        }
    })
    
} 
