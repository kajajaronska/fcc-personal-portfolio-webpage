"use strict";
const navbar = document.querySelector("#navbar");
const logo = document.querySelector('.logo');
const navlinks = document.querySelectorAll('.main-nav-link');

window.onscroll = () => {
  if (
    document.body.scrollTop >= 645 ||
    document.documentElement.scrollTop >= 645
  ) {
    navbar.classList.add("scroll");
    logo.src = "images/kaja-logo-light.jpg";
    navlinks.forEach((e)=> e.classList.add('links-on-scroll'));
    console.log("We are changing to SAGE!")
  } else {
    navbar.classList.remove("scroll");
    logo.src = "images/kaja-logo-dark.jpg";
    navlinks.forEach((e)=> e.classList.remove('links-on-scroll'));
  }
};

