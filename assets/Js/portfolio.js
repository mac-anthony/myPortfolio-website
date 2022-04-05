//scroll to top functionality
const scrollUp = document.getElementById("scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
//With the above functionality, when the user clicks on the scroll-to-top button, the page scrolls to the top and left side of the website smoothly. I did this by setting top to 0, left to 0, and behavior to smooth.

// TOGGLING THE HAMBURGER MENU(ON/OFF)
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
// The burger variable select the hamburger menu bars
// The ul variable selects the list items (the nav links altogether)
// The nav variable selects the container itself (the nav element).What we need to do next is toggle the nav ul.show class when the user clicks the hamburger menu bar.

burger.addEventListener("click", () =>{
  ul.classList.toggle("show");
});

//To close Hamburger menu when a link is click >>Select navlinks
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => 
  link.addEventListener("click", () =>{
    ul.classList.remove("show");
  })
);
