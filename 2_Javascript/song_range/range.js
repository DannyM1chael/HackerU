function rangeJS(n,m,k) {
    let a = [];
    if (isNaN(m) && isNaN(k)) {
        for (let i = 0; i <= n - 1; i++) {
            a.push(i);
        } 
    } else if (isNaN(k)) {
        for (let i = n; i <= m - 1; i++) {
            a.push(i);
        } 
    } else {
        for (let i = n; i <= m - 1; i+=k) {
            a.push(i);
        } 
    } console.log(a)
}