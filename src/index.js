import { mainPageModule } from "./mainPageModule.js";
import { homePageModule, menuPageModule, contactPageModule } from "./pageModules.js";
import "./style.css";

// build landing page
mainPageModule.buildMainPage();

// connect to <div id="main-content">
const mainContent = document.getElementById("main-content");

// auto-load homePageModule
homePageModule.showHomePage(mainContent);


// store .nav-links and add event listeners and functionality
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(item => {
    item.addEventListener('click', event => {
        var id = event.target.id;
        var currentContent = document.querySelector(".page-content");
        if (id === 'home-page-link') {
            mainContent.removeChild(currentContent);
            homePageModule.showHomePage(mainContent);
        } else if (id === 'menu-page-link') {
            mainContent.removeChild(currentContent);
            menuPageModule.showMenuPage(mainContent);
        } else if (id === 'contact-page-link') {
            mainContent.removeChild(currentContent);
            contactPageModule.showContactPage(mainContent);
        }
    })
})
