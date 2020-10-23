// 1. Your first task is to use DOM methods to re-create
//    the DOM tree below using only JavaScript.

let buttonElement = document.createElement("button");
buttonElement.classname = "button";
buttonElement.id = 1;
buttonElement.append("remove main");

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
bodySectionElement.append(buttonElement);
bodySectionElement.append(mainSectionElement);
mainSectionElement = document.querySelector("main");
mainSectionElement.append(imgElement);
mainSectionElement.append(paragraphElement);
mainSectionElement.append(anchorElement);
