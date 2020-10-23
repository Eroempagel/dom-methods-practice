// 1. Your first task is to use DOM methods to re-create
//    the DOM tree below using only JavaScript.
//
// 2. Now, add a "click" event listener to the button element you created.
//    On click, remove the <main> element node from the page. After clicking
//    this button, the user should only see the button on the page and
//    the DOM tree should look like this:
//
// Stretch Goals
//
// 1. Create a 'remove element' button
//    a. To the body, add a text-type <input> and another button.
//       The user will type a valid CSS selector into the text box.
//       When the user clicks this new button, a click event listener
//       should take the text value from the input element and remove
//       the first element from the DOM which matches the CSS selector
//       provided by the user. For example: entering the string .image,
//       then clicking this new button, should remove the image element
//       with the class of "image" from the DOM.
//
// 2. Create an 'add element' button
//    a. To the body, add another text-type <input> and another new button.
//       When the user clicks this button, it should create a DIV element
//       and append it to the BODY, and should contain the text content
//       provided by the user in the text box.
//

/****************
 *    Part 1    *
 ****************/
let removeMainButtonElement = document.createElement("button");
removeMainButtonElement.classname = "remove-main-button";
removeMainButtonElement.id = 1;
removeMainButtonElement.append("Remove Main");

let resetButtonElement = document.createElement("button");
resetButtonElement.classname = "reset-button";
resetButtonElement.id = 2;
resetButtonElement.append("Reset Button");

let mainSectionElement = document.createElement("main");
mainSectionElement.className = "main-section";
mainSectionElement.id = 1;

let imgElement = document.createElement("img");
imgElement.src =
  "https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dinosaur.png";
let paragraphElement = document.createElement("p");
let textBeforeLinkElement = document.createTextNode(
  "Here we will add a link to "
);
paragraphElement.appendChild(textBeforeLinkElement);

let anchorElement = document.createElement("a");
let linkText = document.createTextNode("Google");
anchorElement.appendChild(linkText);
anchorElement.href = "https://google.com";
anchorElement.title = "https://google.com";
anchorElement.target = "_blank";

let bodySectionElement = document.querySelector("body");
bodySectionElement.append(removeMainButtonElement);
bodySectionElement.append(resetButtonElement);
bodySectionElement.append(mainSectionElement);
mainSectionElement = document.querySelector("main");
mainSectionElement.append(imgElement);
mainSectionElement.append(paragraphElement);
mainSectionElement.append(anchorElement);

/****************
 *    Part 2    *
 ****************/

removeMainButtonElement.addEventListener("click", function () {
  //  On click, remove the <main> element node from the page.
  mainSectionElement = document.querySelector("main");
  mainSectionElement.remove();
});

resetButtonElement.addEventListener("click", function () {
  //  On click, reset the page.
  let mainSectionElement = document.createElement("main");
  mainSectionElement.className = "main-section";
  mainSectionElement.id = 1;

  let imgElement = document.createElement("img");
  imgElement.src =
    "https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dinosaur.png";
  let paragraphElement = document.createElement("p");
  let textBeforeLinkElement = document.createTextNode(
    "Here we will add a link to "
  );
  paragraphElement.appendChild(textBeforeLinkElement);

  let anchorElement = document.createElement("a");
  let linkText = document.createTextNode("Google");
  anchorElement.appendChild(linkText);
  anchorElement.href = "https://google.com";
  anchorElement.title = "https://google.com";
  anchorElement.target = "_blank";

  let bodySectionElement = document.querySelector("body");
  bodySectionElement.append(removeMainButtonElement);
  bodySectionElement.append(resetButtonElement);
  bodySectionElement.append(mainSectionElement);
  mainSectionElement = document.querySelector("main");
  mainSectionElement.append(imgElement);
  mainSectionElement.append(paragraphElement);
  mainSectionElement.append(anchorElement);
});

/*****************
 *   Stretch 1   *
 *****************/
