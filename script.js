'use strict';

/**
 * navbar toggle
 */
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelector("[data-nav-liink");
const navElemArr = [navOpenBtn, navCloseBtn,overlay];
const navToggleEvent = function(elem){
    for(let i=0;i< elem.length; i++){
        elem[i].addEventListener("click", function(){
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        });
        }
    }
    navToggleEvent(navElemArr);
    navToggleEvent(navLinks);
    document.getElementById('inquireBtn').addEventListener('click', function() {
      const destination = document.getElementById('destination').value;
      const paxNumber = document.getElementById('paxNumber').value;
      const checkinDate = document.getElementById('checkinDate').value;
      const checkoutDate = document.getElementById('checkoutDate').value;
  
      // Basic validation
      if (!destination || !paxNumber || !checkinDate || !checkoutDate) {
          alert("Please fill out all fields.");
          return;
      }
  
      // Example action on button click
      alert(`Inquiry submitted for ${destination} with ${paxNumber} people from ${checkinDate} to ${checkoutDate}.`);
  });
  

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});