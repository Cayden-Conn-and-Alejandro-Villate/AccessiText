document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded");
});

const readingWindow = document.getElementById("reading-window");
const fontSize = document.getElementById("font-size");
const body = document.body
const font = document.getElementById("different-fonts")
const fontStyle = document.getElementById('font-style')


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
  body.style.fontFamily = newFont
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


///New function: EDIT LINE SPACING
const updateLineSpacing = () => {
  console.log('change')
}