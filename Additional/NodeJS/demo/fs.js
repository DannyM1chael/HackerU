const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err){
//         throw err
//     }
//     console.log('Directory is done');
// });

const filepath = path.join(__dirname, 'test', 'test.txt');

// fs.writeFile(filepath, 'Hello NodeJS', err => {
//     if(err) {
//         throw err
//     }
//     console.log('File is created');
// })

// fs.appendFile(filepath, '\nHello Again', err => {
//     if(err) {
//         throw err
//     }
//     console.log('File is created');
// })

fs.readFile(filepath,'utf-8', (err, content) => {
    if(err) {
        throw err
    }

    console.log(content);
    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString());
})