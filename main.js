// ===================Website ui ================

console.log("test");
window.addEventListener("scroll", animationSrtart)
function animationSrtart() {

    console.log(window.scrollY);


    switch (true) {
        case window.scrollY === 0:
            document.getElementById("header").style.background = 'rgba(0,0,0,0.0)';
            break;
        case window.scrollY > 90 && window.scrollY < 800:
            document.getElementById("header").style.background = 'rgba(250,250,250,0.8)';
            break;


    }




}