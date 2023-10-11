//Question 1
// Select the `h3` element and change its value to `Hello` instead of `Welcome`.

const heading3 = document.querySelector("h3");
heading3.innerHTML = "Hello";

//Question 2
// Select all the `h4` elements on the page and change their `margin-bottom` style to `-20px`.

const heading4 = document.querySelectorAll("h4");

for (let i = 0; i < heading4.length; i++) {
  heading4[i].style.marginBottom = "-20px";
}

//Question 3
// Set the background colour of the second `h4` element to `red`.

heading4[1].style.backgroundColor = "red";

//Question 4
// Set the font size of the first paragraph element on the page to `24px` and its color to `blue`.

const paragraph = document.querySelectorAll("p");
paragraph[0].style.fontSize = "24px";
paragraph[0].style.color = "blue";

//Question 5
// Add `span` tags around the content of the third paragraph element on the page.

paragraph[2].innerHTML = "<span>" + paragraph[2].innerText + "</span>";

//Question 6
//Add a new paragraph to the div with a class of `content`. Add the paragraph after the others.

const newContent = document.querySelector(".content");
newContent.innerHTML += "<p>Dorum</p>\n";

//Question 7
// Add a new class called `content-item` to each paragraph in the div with a class of `content`.

const contentItem = document.querySelectorAll(".content p");

for (let i = 0; i < contentItem.length; i++) {
  contentItem[i].classList.add("content-item");
}

//Question 8
// Select the `ul` element on the page by its id and add a new list item to the beginning of the list.

const list = document.getElementById("services");
list.innerHTML = "<li>new item</li>" + list.innerHTML;

//Question 9
// Programmatically remove the class from the `ul` element.

list.classList.remove("service-list");

// Hide the element with the id of `hide`.

const hideElement = document.getElementById("hide");

hideElement.style.display = "none";
