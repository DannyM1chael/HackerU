function f1(a) {
    let b = 2;
    setTimeout(function () {
        console.log(a, b)
    }, 1000);
}

// function f2() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(function () {
//             console.log(i) // 3 3 3
//         }, 1000 * i);
//     }
// }

function f3() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i)
        }, 1000 * i);
    }
}

function f4() {
    for (var i = 0; i < 3; i++) {
        setTimeout((function (x) {
            console.log(x)
        }).bind(this, i), 1000 * i);
    }
}

f4();
