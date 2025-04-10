
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

    //Retrieve stored colors
    let savedBgColor = localStorage.getItem("bgColor");
    let savedTextColor = localStorage.getItem("textColor");
    let isLightMode = localStorage.getItem("lightMode") === "enabled";

    //Apply saved background-color to dark mode
    document.documentElement.style.setProperty("--saved-dark-bg", savedBgColor);

    if(isLightMode) {
        body.classList.add("light-mode");
        toggleSwitch.checked = true;
        body.style.color = savedBgColor;
        body.style.backgroundColor = "#E5E5E5";
    }else {
    // Always reset to default color when loading in dark mode
    const defaultDarkColor = colorPalette[0];
    body.style.color = "white";
    body.style.backgroundColor = defaultDarkColor;

    // Set CSS variable and update localStorage
    document.documentElement.style.setProperty("--saved-dark-bg", defaultDarkColor);
    localStorage.setItem("bgColor", defaultDarkColor);
}




    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            let latestBgColor = localStorage.getItem("bgColor") || "#222";
            body.classList.add("light-mode");
            body.style.color = latestBgColor;
            body.style.backgroundColor = "#E5E5E5";
            localStorage.setItem("lightMode", "enabled");
            localStorage.setItem("textColor", latestBgColor);
        } else {
            let latestTextColor = localStorage.getItem("textColor") || savedBgColor;
            body.classList.remove("light-mode");
            body.style.color = "white";
            body.style.backgroundColor = latestTextColor;
			
			// Update stored dark mode background color
            localStorage.setItem("bgColor", latestTextColor);
            document.documentElement.style.setProperty("--saved-dark-bg", latestTextColor);
            localStorage.setItem("lightMode", "disabled");
        }
    });
});

// Toggle visibility
    const bgBtn = document.getElementById("bg-btn");
    const palette = document.getElementById("palette");
	const closePalette = document.getElementById("close-palette")

    bgBtn.addEventListener("click", () => {
        palette.style.display = (palette.style.display === "none" || palette.style.display === "") ? "block" : "none";
    });

	closePalette.addEventListener("click", () => bgBtn.click());

	document.addEventListener("click", (event) => {
    const isClickInside = palette.contains(event.target) || bgBtn.contains(event.target);
    if (!isClickInside && palette.style.display === "block") {
        palette.style.display = "none";
    }
});

// Change Background color
const colorPalette = ["#161B22", "#181818", "#100F1E", "#282A36", "#1A1325", "#3B1E1E"];

 function changeBackground(color) {
    document.documentElement.style.setProperty("--saved-dark-bg", color);
    const body = document.body;

    if(!body.classList.contains("light-mode")){
        // Change background only in dark mode
        body.style.backgroundColor = color;
    }

    // Store this color to be used as text color in light mode
    localStorage.setItem("textColor", color);

    // If in light mode, update text color
    if(body.classList.contains("light-mode")){
        body.style.color = color;
		localStorage.setItem("textColor", color);
    }
}

// Change Text Color in Light Mode
function changeTextColor(color) {
    const body = document.body;
    if (body.classList.contains("light-mode")) {
        body.style.color = color;
        localStorage.setItem("textColor", color);
    }
}

// Mobile slides
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    document.getElementById('next').addEventListener('click', () => showSlide(currentSlide + 1));
    document.getElementById('prev').addEventListener('click', () => showSlide(currentSlide - 1));
});

// Scroll to mobile/desktop
function scrollToSection(mobileId, desktopId, event) {
  event.preventDefault(); // Stop link from jumping to top
  const isMobile = window.innerWidth <= 768;
  const targetId = isMobile ? mobileId : desktopId;
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}