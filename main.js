// ===================Website ui ================

//console.log("test");
window.addEventListener("scroll", animationStart)
window.addEventListener("DOMContentLoaded", animationStart)
window.addEventListener("DOMContentLoaded", knowlegeController)
window.addEventListener("scroll", knowlegeController)
const modalContent = document.getElementById("modalContent")
const modal = document.getElementById("modal")
const closeModalBtn = document.querySelectorAll(".close")
console.log("closeModalBtn", closeModalBtn);

window.onclick = function (event) {
    if (event.target == modal) {
        document.querySelectorAll(['section', '#hero-image-container']).forEach((el) => {
            el.style.filter = "none";
        });

        // Apply transition effect
        modal.style.transition = "opacity 0.5s ease";

        // Set opacity to 0 to hide the modal smoothly
        modal.style.opacity = "0";

        // Hide the modal after the transition
        setTimeout(() => {
            modal.style.display = "none";
        }, 500); // Adjust this timeout to match the duration of the transition
    }
}

closeModalBtn[0].onclick = function (event) {
    console.log("clicked");
    if (event.target === closeModalBtn[0]) {
        document.querySelectorAll(['section', '#hero-image-container']).forEach((el) => {
            el.style.filter = "none";
        });

        // Apply transition effect
        modal.style.transition = "opacity 0.5s ease";

        // Set opacity to 0 to hide the modal smoothly
        modal.style.opacity = "0";

        // Hide the modal after the transition
        setTimeout(() => {
            modal.style.display = "none";
        }, 500); // Adjust this timeout to match the duration of the transition
    }
}


function animationStart() {

    //console.log("scroll ev", window.scrollY);

    switch (true) {
        case window.scrollY === 0:
            document.getElementById("header").style.background = 'rgba(0,0,0,0.0)';
            break;
        case window.scrollY > 90:
            document.getElementById("header").style.background = 'rgba(250,250,250,0.9)';
            break;
    }
}

let progressBarExecuted = false;
function knowlegeController() {
    if (!progressBarExecuted && document.documentElement.scrollTop > 500) {
        progressBar("html", 100);
        progressBar("css", 100);
        progressBar("js", 100);
        progressBar("react", 80);
        progressBar("react-native", 80);
        progressBar("typescript", 100);
        progressBar("photoshop", 100);

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
            // console.log("interval cleard");
        } else {
            start++
            //console.log(start);
            el.innerHTML = `${start}%`

        }
        // console.log("interval cleard done!!!!!!!!!!!");

    }, 10)



}





const projItemsArray = document.querySelectorAll('.item')
projItemsArray.forEach((item) => item.addEventListener("click", openModalPreviewProjects))
console.log("--------", projItemsArray);
const realArrayFromItems = Array.from(projItemsArray)

const landingPage1 = {
    imgSrc: "./images/proj2.jpg",
    title: "Landing page 1",
    zipFile: "zip -=-==-=-=-test",
    liveDemoLink: "live test",
    gitLink: "git test",
}

function renderItemModal(itemObject) {


    const links = modalContent.querySelectorAll("a")
    console.log("links", links);
    console.log("=====", itemObject.zipFile);
    links[0].href = itemObject.zipFile
    links[1].href = itemObject.liveDemoLink
    links[2].href = itemObject.gitLink

}





function openModalPreviewProjects() {
    // modal.style.display = "block"
    document.querySelectorAll(['section', '#hero-image-container']).forEach((el) => { el.style.filter = "blur(5px)" })
    // Set the display to block with a transition effect
    modal.style.opacity = "0"; // Initially hide the modal
    modal.style.display = "block";

    // Trigger reflow before adding the transition class
    void modal.offsetWidth; // This line forces the browser to trigger a reflow, enabling the transition

    // Apply transition effect
    modal.style.transition = "opacity 0.5s ease"; // Adjust the duration and easing as needed

    // Set opacity to 1 to reveal the modal smoothly
    modal.style.opacity = "1";



    const clickedItemIndex = realArrayFromItems.indexOf(this)
    console.log("clicked index", clickedItemIndex);
    if (clickedItemIndex === 0) {
        renderItemModal(landingPage1)
    }
}

