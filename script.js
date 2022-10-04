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

function* myGenerator() {
  let count = 0;
  while (count < 10) {
    yield count;
    count++;
  }
}

console.log(...myGenerator());
const gen = myGenerator();
function getGen() {
  console.log(gen.next().value);
}

let testArray = [true, false, true, true];
console.log(testArray.reduce((a1, a2) => a1 || a2));

testArray = [1];
console.log(
  testArray.reduce((a1, a2) => {
    console.log(typeof a1, typeof a2);
    return a1 + a2;
  }, 10)
);

const sortArray = [4, 7, 2, 8, 3, 6, 3, 6, 4];
console.log(sortArray.sort((a, b) => a - b));
console.log(sortArray.sort((a, b) => b - a));

const sparseArray = [0, , 1, 2, , , 3, 4, , 5];
console.log(sparseArray.sort());

let test = 1;
test = (test++, test);
console.log(test);

test = 1;
test = ++test;
console.log(test);

let a = 1,
  b = 2,
  c = 3;
console.log(a, b, c);
[a, b] = [b, a];
console.log(a, b, c);

true && console.log("TRUE");
false && console.log("FALSE");

const objectArray = [
  { l: "d", f: "G" },
  { l: "a", f: "I" },
  { l: "a", f: "B" },
  { l: "c", f: "U" },
];
console.log(
  objectArray.sort(
    (o1, o2) => o1.l.localeCompare(o2.l) * 10 + o1.f.localeCompare(o2.f)
  )
);

const forInOf = [5, 6, 7];
forInOf["foo"] = "bar";
for (fin in forInOf) console.log(fin);
for (fof of forInOf) console.log(fof);

// https://javascript.info/currying-partials debunking this article smh
function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] ${importance} ${message}`
  );
}

const logTest = curry(log)(new Date())("Test");
logTest("Time one");
setTimeout(() => logTest("Time should be 5 sec bigger"), 5000);
