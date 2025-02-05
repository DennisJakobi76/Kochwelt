let responsive_menu = document.getElementById('responsive-nav-links');
let burger_menu_button = document.getElementById('burger-icon-btn');

// Toggle Menu Function
function toggleElement() {
    responsive_menu.classList.toggle('burger-nav-links-closed');

    burger_menu_button.classList.toggle('change');
}
