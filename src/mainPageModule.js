var mainPageModule = (() => {
    // link to <div id="content">
    const content = document.getElementById("content");

    // create a <nav>
    function _buildNavBar() {
        // create a <nav>
        const navBar = document.createElement('nav');

        // create a restaurant logo
        var _addLogo = (() => {
            const restaurantLogo = document.createElement('img');
            restaurantLogo.id = "restaurant-logo";
            restaurantLogo.src = "images/restaurant-logo.jpg";
            
            return restaurantLogo;
        })();

        var _buildNavLinkList = (() => {
            // create <ul id="nav-link-list">
            const navLinkList = document.createElement('ul');
            navLinkList.id = "nav-link-list";
            
            var _buildHomeLink = (() => {
                // create <li id="home-page-link" class="nav-link">Home
                const homeLink = document.createElement('li');
                homeLink.innerText = "Home";
                homeLink.id = "home-page-link";
                homeLink.classList.add("nav-link");

                navLinkList.appendChild(homeLink);

                return homeLink;
            })();

            var _buildMenuLink = (() => {
                // create <li id="menu-page-link" class="nav-link">Home
                const menuLink = document.createElement('li');
                menuLink.innerText = "Menu";
                menuLink.id = "menu-page-link";
                menuLink.classList.add("nav-link");

                navLinkList.appendChild(menuLink);

                return menuLink;
            })();
            
            var _buildContactLink = (() => {
                // create <li id="contact-page-link" class="nav-link">Home
                const contactLink = document.createElement('li');
                contactLink.innerText = "Contact";
                contactLink.id = "contact-page-link";
                contactLink.classList.add("nav-link");

                navLinkList.appendChild(contactLink);

                return contactLink;
            })();
            
            // append <li> to <ul id="nav-link-list">
            navLinkList.appendChild(_buildHomeLink);
            navLinkList.appendChild(_buildMenuLink);
            navLinkList.appendChild(_buildContactLink);

            return navLinkList;
        })();

        // assemble the navBar
        navBar.appendChild(_addLogo);
        navBar.appendChild(_buildNavLinkList);

        return navBar;
    }

    function _buildMainPage() {
        const main = document.createElement('main');

        var _mainContent = (() => {
            // create <div id="main-content">
            var mainContent = document.createElement('div');
            mainContent.id = "main-content";
           
            var _landingImage = (() => {
                var landingImage = document.createElement('img');
                landingImage.src = "images/carne-asada.jpg";

                return landingImage;
            })();
            
            // assemble main content (landing image)
            mainContent.appendChild(_landingImage);

            return mainContent;
        })();

        // assemble the main content
        main.appendChild(_mainContent);

        return main;
    }

    function _buildFooter() {
        const footer = document.createElement('footer');

        const _footerInfoList = (() => {
            // create <ul id="footer-info-list">
            const footerInfoList = document.createElement('ul');
            footerInfoList.id = "footer-info-list";
            
            var _restaurantAddress = (() => {
                // create and add restaurant address
                const addressLi = document.createElement('li');
                addressLi.classList.add("restaurant-info");
                addressLi.textContent = "37-17 30th Ave Astoria, NY 11103";

                return addressLi;
            })();
            
            var _restaurantPhoneNumber = (() => {
                // create and add restaurant address
                const phoneNumberLi = document.createElement('li');
                phoneNumberLi.classList.add("restaurant-info");
                phoneNumberLi.textContent = "718-606-6383";

                return phoneNumberLi;
            })();
            
            var _instagramSocialLink = (() => {
                // create instagram icon li
                const instagramLi = document.createElement('li');
                // create instagram icon link
                const instagramIconLink = document.createElement('a');
                instagramIconLink.classList.add("social-media-link");
                // create instagram icon img
                const instagramIcon = document.createElement('img');
                instagramIcon.id = "instagram-icon";
                instagramIcon.classList.add("social-icon");
                instagramIcon.src = "images/instagram-icon.png";
                // assemble instagram link
                instagramIconLink.appendChild(instagramIcon);
                instagramLi.appendChild(instagramIconLink);

                return instagramLi;
            })();

            var _facebookSocialLink = (() => {
                // create facebook icon li
                const facebookLi = document.createElement('li');
                // create facebook icon link
                const facebookIconLink = document.createElement('a');
                facebookIconLink.classList.add("social-media-link");
                // create facebook icon img
                const facebookIcon = document.createElement('img');
                facebookIcon.id = "facebook-icon";
                facebookIcon.classList.add("social-icon");
                facebookIcon.src = "images/facebook-icon.png";
                // assemble facebook link
                facebookIconLink.appendChild(facebookIcon);
                facebookLi.appendChild(facebookIconLink);

                return facebookLi;
            })();

            // assemble footer info list
            footerInfoList.appendChild(_restaurantAddress);
            footerInfoList.appendChild(_restaurantPhoneNumber);
            footerInfoList.appendChild(_instagramSocialLink);
            footerInfoList.appendChild(_facebookSocialLink);

            return footerInfoList;
        })();

        // assemble footer content
        footer.appendChild(_footerInfoList);
        
        return footer;
    }

    const buildMainPage = () => {
        // functios to build your page elements
        var navBar = _buildNavBar();
        var mainPage = _buildMainPage();
        var footer = _buildFooter();

        // append elements to <div id="content">
        content.appendChild(navBar);
        content.appendChild(mainPage);
        content.appendChild(footer);
    }

    return { buildMainPage };
})();



// export mainPageModule
export { mainPageModule };
