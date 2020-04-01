
// Generate Random Hex Colour Values

function colour() {
    let c = Math.random();
    console.log(c);
    c = c.toString(16);
    console.log(c);
    return '#' + Math.random().toString(16).substring(2,8);
}

console.log(colour());  