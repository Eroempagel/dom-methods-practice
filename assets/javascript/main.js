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
removeMainButtonElement.className = "remove-main-button";
removeMainButtonElement.id = 1;
removeMainButtonElement.append("Remove Main");

let resetButtonElement = document.createElement("button");
resetButtonElement.className = "reset-button";
resetButtonElement.id = 2;
resetButtonElement.append("Reset Button");

/*****************
 *   Stretch 1   *
 *****************/
// add a text-type <input> and another button.
let inputFieldElementOne = document.createElement("input");
inputFieldElementOne.type = "text";
inputFieldElementOne.placeholder = "Please input a CSS selector";
inputFieldElementOne.className = "css-selector-input";
inputFieldElementOne.id = "css-selector-input";

let removeElementButton = document.createElement("button");
removeElementButton.className = "remove-element-button";
removeElementButton.id = 3;
removeElementButton.append("Remove Element");

//end Stretch 1

/*****************
 *   Stretch 2   *
 *****************/
let inputFieldElementTwo = document.createElement("input");
inputFieldElementTwo.type = "text";
inputFieldElementTwo.placeholder = "Please input some text";
inputFieldElementTwo.className = "user-text-input";
inputFieldElementTwo.id = 2;

let createElementButton = document.createElement("button");
createElementButton.className = "create-element-button";
createElementButton.id = 4;
createElementButton.append("Create Element");

let divSectionElement = document.createElement("div");

//end Stretch 2

/****************
 *    Part 1    *
 *  continued   *
 ****************/

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

bodySectionElement = document.querySelector("body");
bodySectionElement.append(removeMainButtonElement);
bodySectionElement.append(resetButtonElement);
bodySectionElement.append(inputFieldElementOne);
bodySectionElement.append(removeElementButton);
bodySectionElement.append(inputFieldElementTwo);
bodySectionElement.append(createElementButton);
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

// perhaps I should have made the reset after the strech goals
// we can revisit this at that point
resetButtonElement.addEventListener("click", function () {
  //  On click, reset the page.
  location.reload();
  return false;
});

/*****************
 *   Stretch 1   *
 *   continued   *
 *****************/
removeElementButton.addEventListener("click", function () {
  inputFieldElementOne = document.querySelector(".css-selector-input");
  console.log(inputFieldElementOne.value);
  let removeThisElement = inputFieldElementOne.value;

  // There must be a better way, but this works for now
  if (removeThisElement === "p") {
    paragraphElement.remove();
  } else if (removeThisElement === "a") {
    anchorElement.remove();
  } else if (removeThisElement === "img") {
    imgElement.remove();
  } else if (removeThisElement === "main") {
    mainSectionElement.remove();
  } else if (removeThisElement === "body") {
    bodySectionElement.remove();
  } else if (removeThisElement === "div") {
    divSectionElement.remove();
  }
});

/*****************
 *   Stretch 2   *
 *   continued   *
 *****************/
createElementButton.addEventListener("click", function () {
  inputFieldElementTwo = document.querySelector(".user-text-input");
  console.log(inputFieldElementTwo.value);
  divSectionElement = document.createElement("div");
  let userTextInput = document.createTextNode(inputFieldElementTwo.value);
  divSectionElement.appendChild(userTextInput);
  bodySectionElement.append(divSectionElement);
});
