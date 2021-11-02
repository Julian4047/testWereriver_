function myFunction(x) {
    if (x.matches) {
        let a = document.getElementById("iframe");
        a.style.width = "65vw";
        let b = document.createElement("div");
        b.setAttribute("id", "shop_animation");
        document.body.appendChild(b);
        let c = document.createElement("img");
        c.setAttribute("src", "../img/68658-creative-3d-visual-animation-website-development.gif")
        c.setAttribute("id", "shop_animation_img")
        b.appendChild(c);

    } else {
        let a = document.getElementById("iframe");
        let b = document.getElementById("shop_animation");
        a.style.width = "100vw";
        b.remove();
    }
}

var x = window.matchMedia("(min-width: 1030px)")
myFunction(x)
x.addListener(myFunction)


//    <div id="shop_animation">
//<img src="./img/55932-laptop-and-man.gif" id="shop_animation_img">
//</div>