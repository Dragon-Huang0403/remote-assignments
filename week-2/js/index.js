// Assignment 4, Request 1
// Click "Welcome Message" then change the text to "Have a Good Time!"
document.querySelector("#greeting").addEventListener("click", function(e) {
    e.target.innerHTML = "Have a Good Time!";
})


// Assignment 4, Request 2
// Click to Show/Close Menu.
document.querySelector("#nav__items").addEventListener("click", function(e){
    let element = e.target;
    // Ensure click on the nav__icon or close-bun
    if (element.parentNode.id === "nav__icon" || element.parentNode.parentNode.id === "nav__icon" || element.id === "nav__list__close-btn"){
        // Toggle the class to Show/Close menu.
        document.querySelector("#nav__list").classList.toggle("menu-sm-hide")
    }
})


// Assignment 4, Request 3
// Show More Content Boxes.
document.querySelector("#section__bottom").addEventListener("click", function(e){
    // Get the element and remove "hide" class
    document.querySelector("#section__more").classList.remove("hide")
})