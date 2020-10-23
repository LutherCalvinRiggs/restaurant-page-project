var homePageModule = (() => {

    var _buildHomePage = (() => {
        // create <div id="home-page-content">
        var homePageContent = document.createElement('div');
        homePageContent.id = "home-page-content";
        homePageContent.classList.add("page-content");
        // create <h2 id="welcome-header">
        var homePageHeader = document.createElement('h2');
        homePageHeader.id = "home-page-header";
        homePageHeader.textContent = "Welcome to Blend Astoria!";
        // create <p id="welcome-message">
        var homePageMessage = document.createElement('p');
        homePageMessage.id = "home-page-message";
        homePageMessage.textContent = "Join us in our new backyard garden and enjoy Astoria's favorite latin fusion cuisine!";

        // assemble welcome message
        homePageContent.appendChild(homePageHeader);
        homePageContent.appendChild(homePageMessage);

        return homePageContent;
    })();

    function showHomePage(mainContent) {
        // remove current content
        // content.removeChild();
        mainContent.appendChild(_buildHomePage);
    }

    return { showHomePage }
})();




var menuPageModule = (() => {

    var _buildMenuPage = (() => {

        // create <div id="menu-page-content">
        var menuPageContent = document.createElement('div');
        menuPageContent.id = "menu-page-content";
        menuPageContent.classList.add("page-content");
        // create <img src="images/blend-astoria.menu.jpg" id="menu-pdf">
        var menuPDF = document.createElement('img');
        menuPDF.src = "images/blend-astoria-menu.jpg";
        menuPDF.id = "menu-pdf";

        // assemble PDF
        menuPageContent.appendChild(menuPDF);

        return menuPageContent
    })();

    // connect to <div id="main-content">
    const mainContent = document.getElementById("main-content");
    // console.log(mainContent)

    function showMenuPage(mainContent) {
        mainContent.appendChild(_buildMenuPage);
    }

    return { showMenuPage }
})();




var contactPageModule = (() => {

    var _buildContactPage = (() => {

        // create <div id="contact-page-content">
        var contactPageContent = document.createElement('div');
        contactPageContent.id = "contact-page-content";
        contactPageContent.classList.add("page-content");

        var _createNameLabel = (() => {
            // create <label for="name">Name
            var nameLabel = document.createElement('label');
            nameLabel.htmlFor = "name";
            nameLabel.textContent = "Name";
            
            return nameLabel;
        })();

        var _createNameInput = (() => {
            // create <input type="text" id="name" name="name" required>
            var nameInput = document.createElement('input');
            nameInput.type = "text";
            nameInput.id = "name";
            nameInput.name = "name";
            nameInput.required = true;

            return nameInput;
        })();

        var _createEmailLabel = (() => {
            // create <label for="email">Email
            var emailLabel = document.createElement('label');
            emailLabel.htmlFor = "email";
            emailLabel.textContent = "Email";
           
            return emailLabel;
        })();
        
        var _createEmailInput = (() => {
            // create <input type="text" id="email" name="email" required>
            var emailInput = document.createElement('input');
            emailInput.type = "text";
            emailInput.id = "email";
            emailInput.name = "email";
            emailInput.required = true;

            return emailInput;
        })();

        var _createMessageLabel = (() => {
            // create <label for="message">Message
            var messageLabel = document.createElement('label');
            messageLabel.htmlFor = "message";
            messageLabel.textContent = "Message";

            return messageLabel;
        })();
        
        var _createMessageInput = (() => {
            // create <input type="text" id="message" name="message" required>
            var messageInput = document.createElement('textarea');
            messageInput.id = "message";
            messageInput.name = "message";
            messageInput.required = true;

            return messageInput;
        })();

        var _createSubmitButton = (() => {
            // <submit type="submit" value="Submit">
            var submitButton = document.createElement('button');
            submitButton.type = "submit";
            submitButton.value = "Submit";
            submitButton.textContent = "Send";
            submitButton.classList.add("submit-button");

            return submitButton;
        })();

        var _buildContactForm = (() => {
            // create <div id="contact-form">
            var contactForm = document.createElement('div');
            contactForm.id = "contact-form";

            contactForm.appendChild(_createNameLabel);
            contactForm.appendChild(_createNameInput);
            contactForm.appendChild(_createEmailLabel);
            contactForm.appendChild(_createEmailInput);
            contactForm.appendChild(_createMessageLabel);
            contactForm.appendChild(_createMessageInput);
            contactForm.appendChild(_createSubmitButton);

            return contactForm;
        })();
        
        // assemble form
        contactPageContent.appendChild(_buildContactForm);

        return contactPageContent
    })();

    // connect to <div id="main-content">
    const mainContent = document.getElementById("main-content");
    // console.log(mainContent)

    function showContactPage(mainContent) {
        mainContent.appendChild(_buildContactPage);
    }

    return { showContactPage }
})();


export { homePageModule, menuPageModule, contactPageModule };