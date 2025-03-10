// ===================Website ui ================

let backgroundVANTA = VANTA.NET({
    el: "#hero-image",
})
backgroundVANTA.resize()
backgroundVANTA.setOptions({
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xffffff,
    backgroundColor: 0xc5c5c5,
    points: 17.00,
    maxDistance: 25.00,
    spacing: 17.00,
    showDots: false
})


//VANTA.NET(heroImageDarkMode)






window.addEventListener("scroll", animationStart)
window.addEventListener("DOMContentLoaded", animationStart)
window.addEventListener("DOMContentLoaded", knowlegeController)
window.addEventListener("scroll", knowlegeController)
const modalContent = document.getElementById("modalContent")
const modal = document.getElementById("modal")
const closeModalBtn = document.querySelectorAll(".close")
const myLogo = document.getElementById("myLogo")
const mobileMyLogo = document.getElementById("mobileMylogo")
const allBoxShadows = document.querySelectorAll(".primaryShadow")
let isDarkMode = false


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



function changeRootVariables(isDarkMode) {
    // Access the root element

    let root = document.documentElement;
    if (isDarkMode) {

        root.style.setProperty('--hoverColorProjects', '#101021cb');
        root.style.setProperty('--primaryColor', '#101021');
        root.style.setProperty('--btnColor', '#424289');
        root.style.setProperty('--main-text-color', 'whitesmoke');
        root.style.setProperty('--primaryColorLessStrongWhite', 'rgb(12, 12, 24)');
        myLogo.style.filter = "invert(100%)"
        mobileMyLogo.style.filter = "invert(100%)"
        modal.style.backgroundColor = "#101021cb"
        document.getElementById("header").style.background = 'rgba(11, 11, 22, 0.9)';
        allBoxShadows.forEach((item) => item.classList.remove("primaryShadow"))
    } else {
        document.getElementById("header").style.background = 'rgba(250,250,250,0.9)';
        modal.style.backgroundColor = "rgba(214, 214, 214, 0.5)"
        root.style.setProperty('--hoverColorProjects', '#ffffffe0');
        root.style.setProperty('--btnColor', '#d3d3d3');
        root.style.setProperty('--primaryColor', 'white');
        root.style.setProperty('--main-text-color', 'black');
        root.style.setProperty('--primaryColorLessStrongWhite', 'rgb(250, 250, 250)');
        myLogo.style.filter = "invert(0%)"
        mobileMyLogo.style.filter = "invert(0%)"
        allBoxShadows.forEach((item) => item.classList.add("primaryShadow"))



    }

}






const darkModeBtn = document.querySelector(".toggle-btn");
const innerCircle = document.querySelector(".inner-circle")
let isInnerCircleColor = false
darkModeBtn.addEventListener("click", () => {
    if (!isInnerCircleColor) {
        innerCircle.style.backgroundColor = "#101021"
        changeRootVariables(true)
        backgroundVANTA.setOptions({
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x83ff,
            backgroundColor: 0xb0b16,
            showDots: false
        });

        isInnerCircleColor = true
    } else {
        isInnerCircleColor = false
        innerCircle.style.backgroundColor = "white"
        changeRootVariables(false)
        backgroundVANTA.setOptions({
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xffffff,
            backgroundColor: 0xc5c5c5,
            points: 17.00,
            maxDistance: 25.00,
            spacing: 17.00,
            showDots: false
        })

    }
    darkModeBtn.classList.toggle("active");

});



















function animationStart() {



    if (!window.matchMedia("(max-width: 600px)").matches) {

        switch (true) {
            case window.scrollY === 0:
                document.getElementById("header").style.background = 'rgba(0,0,0,0.0)';
                break;
            case window.scrollY > 90:
                if (isInnerCircleColor) {
                    document.getElementById("header").style.background = 'rgba(11, 11, 22, 0.9)';
                } else {
                    document.getElementById("header").style.background = 'rgba(250,250,250,0.9)';
                }



                break;
        }

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

        } else {
            start++

            el.innerHTML = `${start}%`

        }


    }, 10)



}





const projItemsArray = document.querySelectorAll('.item')
projItemsArray.forEach((item) => item.addEventListener("click", openModalPreviewProjects))

const realArrayFromItems = Array.from(projItemsArray)

const landingPage1 = {
    imgSrc: "./images/proj1preview.jpg",
    title: "Landing page 1",
    zipFile: "./Projects/proj1/proj1.zip",
    liveDemoLink: "./Projects/proj1/index.html",
    gitLink: "",
}

const landingPage2 = {
    imgSrc: "./images/proj2.jpg",
    title: "Landing page 2",
    zipFile: "./Projects/proj2/proj2.zip",
    liveDemoLink: "./Projects/proj2/index.html",
    gitLink: "",
}

const landingPage3 = {
    imgSrc: "./images/proj3.jpg",
    title: "Landing page 3",
    zipFile: "./Projects/proj3/proj3.zip",
    liveDemoLink: "./Projects/proj3/index.html",
    gitLink: "",
}

const landingPage4 = {
    imgSrc: "./images/proj4.jpg",
    title: "Landing page 4",
    zipFile: "./Projects/proj4/proj4.zip",
    liveDemoLink: "./Projects/proj4/index.html",
    gitLink: "",
}
const landingPage5 = {
    imgSrc: "./images/proj5.jpg",
    title: "Landing page 5",
    zipFile: "./Projects/proj5/proj5.zip",
    liveDemoLink: "./Projects/proj5/index.html",
    gitLink: "",
}

const landingPage6 = {
    imgSrc: "./images/proj6preview.jpg",
    title: "Landing page 6",
    zipFile: "./Projects/proj6/proj6.zip",
    liveDemoLink: "./Projects/proj6/index.html",
    gitLink: "",
}
const landingPage7 = {
    imgSrc: "./Projects/Timer/Timer.jpg",
    title: "Stop Watch",
    zipFile: "./Projects/Timer/Timer.zip",
    liveDemoLink: "https://kfir2k.github.io/Timer-project/",
    gitLink: "https://github.com/kfir2k/Timer-project.git",
}

const landingPage8 = {
    imgSrc: "./Projects/List/list.jpg",
    title: "Grocery-List",
    zipFile: "./Projects/List/GroceryList.zip",
    liveDemoLink: "https://kfir2k.github.io/Grocery-List/",
    gitLink: "https://github.com/kfir2k/Grocery-List.git",
}
const landingPage9 = {
    imgSrc: "./Projects/ElementCreator/elementCreator.jpg",
    title: "Element Creator",
    zipFile: "./Projects/ElementCreator/ElementCreator.zip",
    liveDemoLink: "https://kfir2k.github.io/ElementCreator/",
    gitLink: "https://github.com/kfir2k/ElementCreator.git",
}
const landingPage10 = {
    imgSrc: "./Projects/Simon/simon.jpg",
    title: "Simon",
    zipFile: "./Projects/Simon/Simon.zip",
    liveDemoLink: "https://kfir2k.github.io/Simon-Says/",
    gitLink: "https://github.com/kfir2k/Simon-Says.git",
}
const landingPage11 = {
    imgSrc: "./Projects/UserManagement/user.jpg",
    title: "User-Management",
    zipFile: "./Projects/UserManagement/user.zip",
    liveDemoLink: "https://kfir2k.github.io/User-Management/",
    gitLink: "https://github.com/kfir2k/User-Management.git",
}
const landingPage12 = {
    imgSrc: "./Projects/fifa/fifa.jpg",
    title: `FIFA Squad Builder`,
    zipFile: "./Projects/UserManagement/user.zip",
    liveDemoLink: "https://kfir2k.github.io/FIFASquadCreator/",
    gitLink: "https://github.com/kfir2k/FIFASquadCreator.git",
}










function renderItemModal(itemObject) {


    const links = modalContent.querySelectorAll("a")
    const projImg = modalContent.querySelectorAll("img")
    const title = modalContent.querySelectorAll("h3")
    const par = modalContent.querySelectorAll("p")

    par[0].style.display = "none"

    links[0].href = itemObject.zipFile
    links[1].href = itemObject.liveDemoLink

    if (itemObject.gitLink === "") {
        links[2].style.display = "none"
    } else {
        links[2].style.display = "block"
    }


    if (itemObject.title === "FIFA Squad Builder") {
        par[0].style.display = "block"
    }



    links[2].href = itemObject.gitLink
    projImg[0].src = itemObject.imgSrc
    title[0].innerText = itemObject.title

}





function openModalPreviewProjects() {

    document.querySelectorAll(['section', '#hero-image-container']).forEach((el) => { el.style.filter = "blur(5px)" })
    modal.style.opacity = "0";
    modal.style.display = "block";
    void modal.offsetWidth;
    modal.style.transition = "opacity 0.5s ease"; // Adjust the duration and easing as needed
    modal.style.opacity = "1";

    const clickedItemIndex = realArrayFromItems.indexOf(this)

    if (clickedItemIndex === 0) {
        renderItemModal(landingPage1)
    }
    if (clickedItemIndex === 1) {
        renderItemModal(landingPage2)
    }
    if (clickedItemIndex === 2) {
        renderItemModal(landingPage3)
    }
    if (clickedItemIndex === 3) {
        renderItemModal(landingPage4)
    }
    if (clickedItemIndex === 4) {
        renderItemModal(landingPage5)
    }
    if (clickedItemIndex === 5) {
        renderItemModal(landingPage6)
    }
    if (clickedItemIndex === 6) {
        renderItemModal(landingPage7)
    }
    if (clickedItemIndex === 7) {
        renderItemModal(landingPage8)
    }
    if (clickedItemIndex === 8) {
        renderItemModal(landingPage9)
    }
    if (clickedItemIndex === 9) {
        renderItemModal(landingPage10)
    }
    if (clickedItemIndex === 10) {
        renderItemModal(landingPage11)
    }
    if (clickedItemIndex === 11) {
        renderItemModal(landingPage12)
    }
}

