// Assignment 4, Request 1
// Click "Welcome Message" then change the text to "Have a Good Time!"
document.querySelector(".header__title h1").addEventListener("click", function(e) {
    e.target.textContent = "Have a Good Time!";
})


// Assignment 4, Request 2
// Click to Show/Close Menu.
document.querySelector(".nav__items").addEventListener("click", function(e){
    let element = e.target;
    let parent = element.parentNode;

    // Ensure click on the nav__icon or close-bun
    if (parent.classList.contains("nav__items__icon") || parent.parentNode.classList.contains("nav__items__icon")){

        // Toggle the class to Show/Close menu.
        document.querySelector(".nav__items__list").classList.add("nav__items__list-open");
        document.querySelector(".nav__items__icon__open-bg").classList.remove("hide");
    
    // If click close btn or outside of the list, then close list.
    } else if (element.classList.contains("nav__list__btn-close") || element.classList.contains("nav__items__icon__open-bg")) {

        document.querySelector(".nav__items__list").classList.remove("nav__items__list-open");
        document.querySelector(".nav__items__icon__open-bg").classList.add("hide");
    }
})


// Assignment 4, Request 3
// Show More Content Boxes.
document.querySelector(".section__action").addEventListener("click", function(e){
    // Get the element and remove "hide" class
    document.querySelector(".section__more").classList.remove("hide");

    // let btn = e.target.parentNode;
    // let parent = btn.parentNode;
    // let firstChild = document.querySelector(".section__container");
    // btn.className = "section__add"
    // btn.childNodes[1].textContent = "Add Content"
    // parent.insertBefore(btn, firstChild);
})


// Additional practice 1
// Click add button to create more content box
let boxNumber = 9;

document.querySelector(".section__add").addEventListener("click", function(e) {
    let element = document.createElement("div");
    document.querySelector(".section__container").appendChild(element);
    element.outerHTML = `<div class="section__container__item">Content Box ${boxNumber}<br><button>Delete</button></div>`;
    boxNumber++;
})


// Additional practice 2
// Delete function
document.querySelector(".section").addEventListener("click", function(e) {
    let element = e.target;
    if (element.textContent === "Delete") {
        let removedEle = element.parentNode;
        removedEle.remove();
    }
})