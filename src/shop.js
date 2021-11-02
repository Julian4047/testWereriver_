//Sort/R_________________________________________________//
let theme = document.getElementById("orderBy"),
    paintings = document.getElementById("shop"),
    figures = paintings.getElementsByTagName("figure"),
    original = paintings.innerHTML;

theme.onchange = function() {
    let fader = window.setTimeout(fadeOut, 0)
    let waitforfade = window.setTimeout(replace, 1000);
    let waitforreplace = window.setTimeout(fadeIn, 1600);
    // currently a little crude; should really be a series of more sophisticated callbacks
}

function fadeIn() {
    i = 1;
    Array.prototype.forEach.call(figures, function(figure) {
        setTimeout(function() { figure.classList.add("visible") }, 400 * i)
        i++;
    })
}

function sortUs(parent, child, key) {
    let items = Array.prototype.slice.call(document.querySelectorAll(parent + " " + child)).sort(function(a, b) {
        let comparA = a.querySelector(key).innerHTML;
        let comparB = b.querySelector(key).innerHTML;
        return (comparA < comparB) ? -1 : (comparA > comparB) ? 1 : 0;
    });
    for (let i = 0; i < figures.length; i++) {
        paintings.appendChild(items[i]);
    }
}

function reverseUs(parent, child, key) {
    let items = Array.prototype.slice.call(document.querySelectorAll(parent + " " + child)).sort(function(b, a) {
        let comparA = a.querySelector(key).innerHTML;
        let comparB = b.querySelector(key).innerHTML;
        return (comparA < comparB) ? -1 : (comparA > comparB) ? 1 : 0;
    });
    for (let i = 0; i < figures.length; i++) {
        paintings.appendChild(items[i]);
    }
}

function fadeOut() {
    i = 1;
    Array.prototype.forEach.call(figures, function(figure) {
        setTimeout(function() { figure.classList.remove("visible"); }, 300 * i)
        i++;
    });
}

function replace() {
    if (theme.value == "sort") {
        sortUs("#shop", "figure", el);
    } else {
        if (theme.value == "reverse") { el = "p"; }
        reverseUs("#shop", "figure", el);
    }
}

fadeIn();

//________________________________________
function myFunction1() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("shop");
    li = ul.getElementsByTagName("figure");
    for (i = 0; i < li.length; i++) {
        figcaption = li[i].getElementsByTagName("figcaption")[0];
        txtValue = figcaption.textContent || figcaption.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}