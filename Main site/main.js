document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded");
  dragElement(document.getElementById("interface"))
});

const readingWindow = document.getElementById("reading-window");
const fontSize = document.getElementById("font-size");
const body = document.body
const font = document.getElementById("different-fonts")
const fontStyle = document.getElementById('font-style')
const lineSpacing = document.getElementById('line-spacing')


const updateFontSize = () => {
  const newFontSize = fontSize.value;

  let isValidSize = false;
  if (newFontSize >= 8 && newFontSize <= 300) {
    isValidSize = true;
  }

  if (isValidSize) {
    readingWindow.style.fontSize = newFontSize + "px";
  }
};


const updateFont = () => {
  const newFont = font.value
  readingWindow.style.fontFamily = newFont
}


const updateFontStyle = () => {
  const newFontStyle = fontStyle.value
  if (newFontStyle === "Normal") {
    readingWindow.style.fontWeight = "Normal"
    readingWindow.style.fontStyle = "Normal"
    readingWindow.style.textDecoration = "None"
  } else if (newFontStyle === "Bold") {
    readingWindow.style.fontWeight = "Bold"
    readingWindow.style.fontStyle = "Normal"
    readingWindow.style.textDecoration = "None"
  } else if (newFontStyle === "Italic") {
    readingWindow.style.fontWeight = "Normal"
    readingWindow.style.fontStyle = "Italic"
    readingWindow.style.textDecoration = "None"
  } else if (newFontStyle == "Underline") {
    readingWindow.style.fontWeight = "Normal"
    readingWindow.style.fontStyle = "Normal"
    readingWindow.style.textDecoration = "Underline"
  }
}


const updateLineSpacing = () => {
  const newLineSpacing = parseFloat(lineSpacing.value) + 0.2
  readingWindow.style.lineHeight = newLineSpacing
}

//Drag
dragElement(document.getElementById("interface"))

//citation: this is straight from W3 schools (https://www.w3schools.com/howto/howto_js_draggable.asp)
function dragElement(elmnt) {
  console.log('dragging')
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  document.getElementById("drag-menu").onmousedown = dragMouseDown;
  

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}