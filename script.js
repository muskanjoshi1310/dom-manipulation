// Make sure the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', function() {
function nav(){
  // Get the container where the navbar will be inserted
    const navbarContainer = document.getElementById('navbar-container');

    // Create the navbar using JavaScript
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'bg-dark');

    // Create the container fluid for the navbar
    const container = document.createElement('div');
    container.classList.add('container-fluid');

    // Create the brand section with a logo and text
    const brandLink = document.createElement('a');
    brandLink.classList.add('navbar-brand');
    brandLink.href = '#';

    // Create the logo (You can replace this with your own logo URL)
    const logo = document.createElement('img');
   // logo.src = "1.jpg"; // Placeholder logo
    logo.alt = 'Logo';
    logo.classList.add('d-inline-block', 'align-text-top');

    // Add the logo image and text to the brand link
    brandLink.appendChild(logo);
    brandLink.appendChild(document.createTextNode('My Website'));

    // Append the brand link to the container
    container.appendChild(brandLink);

    // Create the navbar toggler button for small screens
    const navbarTogglerButton = document.createElement('button');
    navbarTogglerButton.classList.add('navbar-toggler');
    navbarTogglerButton.type = 'button';
    navbarTogglerButton.setAttribute('data-bs-toggle', 'collapse');
    navbarTogglerButton.setAttribute('data-bs-target', '#navbarNav');
    navbarTogglerButton.setAttribute('aria-controls', 'navbarNav');
    navbarTogglerButton.setAttribute('aria-expanded', 'false');
    navbarTogglerButton.setAttribute('aria-label', 'Toggle navigation');

    // Create the icon for the toggler
    const togglerIcon = document.createElement('span');
    togglerIcon.classList.add('navbar-toggler-icon');
    navbarTogglerButton.appendChild(togglerIcon);

    // Append the navbar toggler button to the container
    container.appendChild(navbarTogglerButton);

    // Create the collapsible navbar content
    const collapseDiv = document.createElement('div');
    collapseDiv.classList.add('collapse', 'navbar-collapse');
    collapseDiv.id = 'navbarNav';

    // Create the navbar list
    const navbarList = document.createElement('ul');
    navbarList.classList.add('navbar-nav', 'ms-auto');

    // Sign In and Sign Up buttons
    const signInButton = document.createElement('button');
    signInButton.classList.add('btn', 'btn-outline-primary', 'me-2');
    signInButton.textContent = 'Sign In';

    const signUpButton = document.createElement('button');
    signUpButton.classList.add('btn', 'btn-outline-success');
    signUpButton.textContent = 'Sign Up';
    signUpButton.onclick= ()=>{
        signuppage()
    }

    // Add Sign In and Sign Up buttons to the list
    const buttonItem = document.createElement('li');
    buttonItem.classList.add('nav-item');
    buttonItem.appendChild(signInButton);
    buttonItem.appendChild(signUpButton);
    navbarList.appendChild(buttonItem);

    // Add the navbar list to the collapsible content
    collapseDiv.appendChild(navbarList);

    // Create the search form
    const searchForm = document.createElement('form');
    searchForm.classList.add('d-flex');
    searchForm.setAttribute('role', 'search');

    const searchInput = document.createElement('input');
    searchInput.classList.add('form-control', 'me-2');
    searchInput.setAttribute('type', 'search');
    searchInput.setAttribute('placeholder', 'Search');
    searchInput.setAttribute('aria-label', 'Search');

    const searchButton = document.createElement('button');
    searchButton.classList.add('btn', 'btn-outline-secondary');
    searchButton.setAttribute('type', 'submit');
    searchButton.textContent = 'Search';

    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);

    // Add the search form to the collapsible content
    collapseDiv.appendChild(searchForm);

    // Append the collapsible content to the container
    container.appendChild(collapseDiv);

    // Append the container to the navbar
    navbar.appendChild(container);

    // Append the navbar to the navbar container on the page
    navbarContainer.appendChild(navbar);
}

function signuppage(){
    // const mainDiv = document.getElementById('navbar-container');
    // nav();
    // mainDiv.textContent = 'Search';
    // mainDiv.textContent="this is my page"
    const container = document.getElementById('signup-container');

            // Create the form container
            const form = document.createElement('form');
            form.classList.add('card', 'p-4');
            form.setAttribute('method', 'POST');

            // Add heading
            const heading = document.createElement('h3');
            heading.classList.add('text-center');
            heading.textContent = 'Sign Up';
            form.appendChild(heading);

            // Create Email input
            const emailDiv = document.createElement('div');
            emailDiv.classList.add('mb-3');
            const emailLabel = document.createElement('label');
            emailLabel.setAttribute('for', 'email');
            emailLabel.classList.add('form-label');
            emailLabel.textContent = 'Email address';
            const emailInput = document.createElement('input');
            emailInput.setAttribute('type', 'email');
            emailInput.setAttribute('id', 'email');
            emailInput.classList.add('form-control');
            emailInput.setAttribute('placeholder', 'Enter your email');
            emailInput.required = true;
            emailDiv.appendChild(emailLabel);
            emailDiv.appendChild(emailInput);
            form.appendChild(emailDiv);

            // Create Password input
            const passwordDiv = document.createElement('div');
            passwordDiv.classList.add('mb-3');
            const passwordLabel = document.createElement('label');
            passwordLabel.setAttribute('for', 'password');
            passwordLabel.classList.add('form-label');
            passwordLabel.textContent = 'Password';
            const passwordInput = document.createElement('input');
            passwordInput.setAttribute('type', 'password');
            passwordInput.setAttribute('id', 'password');
            passwordInput.classList.add('form-control');
            passwordInput.setAttribute('placeholder', 'Enter your password');
            passwordInput.required = true;
            passwordDiv.appendChild(passwordLabel);
            passwordDiv.appendChild(passwordInput);
            form.appendChild(passwordDiv);

            // Create the Sign Up button
            const signUpButton = document.createElement('button');
            signUpButton.classList.add('btn', 'btn-primary', 'w-100');
            signUpButton.setAttribute('type', 'submit');
            signUpButton.textContent = 'Sign Up';
            form.appendChild(signUpButton);

            // Add form to the container
            container.appendChild(form);
        }


