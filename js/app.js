"use strict";

/*========================================
    DOM Elements
========================================*/

const backToTopButton = document.querySelector(".back-to-top");
const contactForm = document.querySelector("#contactForm");

const menuButton = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-list a");

/*========================================
    Initialize Website
========================================*/

document.addEventListener("DOMContentLoaded", init);

function init(){


    initMobileMenu();

    initBackToTop();

    initContactForm();

    // بعداً اینجا قابلیت‌های عمومی سایت
    // مثل Back To Top
    // فرم تماس
    // منوی موبایل
    // Scroll Animation
    // اضافه می‌شوند.

}

/*========================================
    Back To Top
========================================*/

function initBackToTop(){

    if(!backToTopButton) return;

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 500){

            backToTopButton.classList.add("show");

        }else{

            backToTopButton.classList.remove("show");

        }

    });

    backToTopButton.addEventListener("click", ()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}


/*========================================
    Contact Form
========================================*/

function initContactForm(){

    if(!contactForm) return;

    const successMessage = document.querySelector("#formSuccess");

    contactForm.addEventListener("submit", (e)=>{

        e.preventDefault();

        contactForm.reset();

        if(successMessage){

            successMessage.classList.add("show");

            setTimeout(()=>{

                successMessage.classList.remove("show");

            },4000);

        }

    });

}
/*========================================
    Mobile Menu
========================================*/

function initMobileMenu(){

    if(!menuButton || !navbar) return;

    menuButton.addEventListener("click", ()=>{

        navbar.classList.toggle("mobile-open");

        menuButton.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if(navbar.classList.contains("mobile-open")){

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        }else{

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

    navLinks.forEach(link=>{

        link.addEventListener("click", ()=>{

            navbar.classList.remove("mobile-open");
            menuButton.classList.remove("active");

            const icon = menuButton.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}