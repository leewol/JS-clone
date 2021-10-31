const body = document.querySelector("body");

const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.png", "5.png", "6.png"];

const chosenImage = imgs[Math.floor(Math.random() * imgs.length)];

body.style.backgroundImage = `url("img/${chosenImage}")`;