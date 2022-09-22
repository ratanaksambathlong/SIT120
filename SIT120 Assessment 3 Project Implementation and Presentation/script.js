function bgChange() {
  let colour = document.getElementById("bgChoice").value;
  document.body.style.backgroundColor = colour;
  localStorage.setItem("bgColour", colour);
}

function bgSave(colour) {
  document.body.style.backgroundColor = colour;
  localStorage.setItem("bgColour", colour);
}

let bgChoice = localStorage.getItem("bgColour");
if (bgChoice != null) {
  bgSave(bgChoice);
}

function resetDefault() {
  bgSave("#d5dce2");
}
