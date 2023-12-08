/*
   The code selects the navigation elements using 'querySelector'. 
   It sets up an event listener on a mobile navigation toggle ('mobile-nav-toggle'). 
   When the toggle is clicked, it checks the visibility state of the navigation ('data-visible' attribute). 
   If it's 'false', it sets it to 'true' and updates 'aria-expanded'. 
   If it's already 'true', it sets it to 'false' and updates 'aria-expanded'. 
   
   This toggling manages the visibility state of the mobile navigation.
*/
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})
