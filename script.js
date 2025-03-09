// JavaScript Document

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