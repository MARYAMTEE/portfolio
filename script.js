// JavaScript Document
const navLinks = document.querySelectorAll(".nav-list .nav-link");
const menuOpenButton = document.querySelector("#open-menu-btn");
const menuCloseButton = document.querySelector("#close-menu-btn");


// Toggle Visibility
menuOpenButton.addEventListener("click", () => {
	document.body.classList.toggle("show-mobile-menu");
});

// Closes menu button
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Left Side Bar
const openButton = document.querySelector("#open-btn");
const closeButton = document.querySelector("#close-btn");

// Open Left Side
openButton.addEventListener("click", () => {
	document.body.classList.toggle("show-menu");
});

// Closes menu button
closeButton.addEventListener("click", () => openButton.click());

// close when the navlink is clicked
navLinks.forEach(link => {
	link.addEventListener("click", () => menuOpenButton.click())
});

//create stars
function createStars(count) {
            const maxWidth = Math.floor(document.body.scrollWidth);  
            const maxHeight = Math.floor(document.body.scrollHeight); 

            for (let i = 0; i < count; i++) {
                let star = document.createElement("div");
                star.classList.add("star");

                // Random position within the screen bounds
                let x = Math.floor(Math.random() * maxWidth);
                let y = Math.floor(Math.random() * maxHeight);
                star.style.left = `${x}px`;
                star.style.top = `${y}px`;

                // Random movement range
                let moveX = Math.random() * 50 - 25 + "px";
                let moveY = Math.random() * 50 - 25 + "px";
                star.style.setProperty("--moveX", moveX);
                star.style.setProperty("--moveY", moveY);

                // Random animation delay
                star.style.animationDelay = `${Math.random() * 3}s`;

                document.body.appendChild(star);
            }
        }

		document.body.style.overflowX = "hidden";

        createStars(200); 

// Toogle button
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("switch");
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("lightMode") === "enabled") {
        body.classList.add("light-mode");
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("light-mode");
            localStorage.setItem("lightMode", "enabled");
        } else {
            body.classList.remove("light-mode");
            localStorage.setItem("lightMode", "disabled");
        }
    });
});
