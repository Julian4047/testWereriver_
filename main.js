//_________________________________________________//
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    console.log(scrolled);
});

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    console.log(scrolled);
    if (scrolled >= 654) {
        document.getElementById("topMain").style.opacity = "1";

    } else {
        document.getElementById("topMain").style.opacity = "0";
    }
});

//_____________________________//
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    console.log(scrolled);
});

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    console.log(scrolled);
    if (scrolled >= 30) {
        document.getElementById("shopTitleFixed").style.opacity = "0";

    } else {
        document.getElementById("shopTitleFixed").style.opacity = "1";
    }
});
//_____________________________//
setTimeout(function() { document.getElementById("containerLoading").remove(); }, 3000);