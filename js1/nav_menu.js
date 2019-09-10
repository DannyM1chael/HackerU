function changeSize(className) {
    var elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.size = Math.random();
    }
}