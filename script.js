const changeAnimation = () => {
  console.log("HERE");
  let animations = "textColor";
  if (changeAnimation.calls % 2 == 0) animations += ", movex";
  else animations += ", movey";
  document
    .getElementById("test1")
    .setAttribute("style", `--animation: ${animations}`);
  changeAnimation.calls++;
};
changeAnimation.calls = 0;

(function () {
  console.log("Runs at the start");
})();

class Text {
  static assignedIds = [];

  constructor(id, text, color) {
    this.id = id;
    this.text = text;
    this.color = color;

    if (Text.assignedIds.includes(id))
      throw "Element with this id already in use";

    this.host = document.getElementById(id);
    if (!this.host) throw "Id does not exist";

    Text.assignedIds.push(id);
    const sentence = document.createElement("div");
    sentence.classList.add("sentence");
    sentence.setAttribute(this.id, "");
    sentence.innerHTML = this.text;
    this.host.appendChild(sentence);

    console.log("HERE");
    const customStyle = document.createElement("style");
    customStyle.innerHTML = `
    .sentence[${this.id}] {
      color: ${this.color};
    }
    `;
    document.head.appendChild(customStyle);
  }
}

const text1 = new Text("test3", "fun-text", "blue");
console.log(text1.color);
console.log(Text.assignedIds);

function changeFile(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  document.getElementById("download").setAttribute("href", url);
}

let consoleStyle = [
  "font-family: monospace",
  "font-weight: bold",
  "font-size: 10px",
  "color: green",
  "background-color: lightgreen",
  "padding: 10px",
  "border-radius: 5px",
].join(";");

console.log("%cThis is a fany mesage\nanother line", consoleStyle);
