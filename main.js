// ===================Website ui ================

console.log("test");
window.addEventListener("scroll", animationStart)

function animationStart() {

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

let progressBarExecuted = false;
window.onscroll = function () {
    if (!progressBarExecuted && document.documentElement.scrollTop > 500) {
        progressBar("html", 100);
        progressBar("css", 100);
        progressBar("js", 100);
        progressBar("react", 100);
        progressBarExecuted = true;
    }
};






function progressBar(el, precent) {
    el = document.getElementById(el);
    el.style.width = `${precent}%`
    let start = 0
    let interval = setInterval(() => {
        if (start >= precent) {
            clearInterval(interval)
            console.log("interval cleard");
        } else {
            start++
            console.log(start);
            el.innerHTML = `${start}%`

        }
        console.log("interval cleard done!!!!!!!!!!!");

    }, 10)



}


//progressBar()

