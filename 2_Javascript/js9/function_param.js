let f = function (a, b) {
    if (arguments.length === f.length) {
        console.log('Matched')
    } else {
        console.log('Not matched')
    }
};

f(1);
f(1, 2);
f(1, 2, 3);
