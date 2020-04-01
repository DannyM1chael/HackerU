function f() {
    if (area !== undefined) {
        console.log('var', area);
    }
    try {
        console.log('let', name);
    } catch (error) {
        console.log(error.name)
        console.log(error.message)
    }

    let name = 'Bert';
    var area = 'Geology';
}

f();