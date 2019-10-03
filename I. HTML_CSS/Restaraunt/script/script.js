function toggle() {
    if (document.querySelector(".menu-opener").classList.contains('active')) {
        document.querySelector(".menu-opener-inner").classList.remove('active');
        document.querySelector(".menu-opener").classList.remove('active');
        document.querySelector(".menu").classList.remove('active');
    } else {
        document.querySelector(".menu-opener-inner").classList.add('active');
        document.querySelector(".menu-opener").classList.add('active');
        document.querySelector(".menu").classList.add('active');
    }
}

document.querySelector(".menu-opener").onclick = toggle;