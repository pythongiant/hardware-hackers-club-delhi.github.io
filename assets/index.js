function toggleBurger() {
    
    var burger = document.getElementsByClassName("burger")[0];
    var menu = document.getElementsByClassName('navbar-menu')[0];
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}