const questions = [
  {
    question: "question one",
    a: "odio officiis desed alias,luptatum?",
    b: "odio officiis deserunt sed alias, ",
    c: "o deserunt um?",
    d: "odio officied aliavoluptatum",
    anwswer: "c",
  },
  {
    question: "question two",
    a: "odio officiis desed alias, apem?",
    b: "odio ofunt sed alias, ",
    c: "odio officrunt um?",
    d: "odio alias, aperiam quae tum?",
    anwswer: "a",
  },
  {
    question: "question tree",
    a: "odio officiis desed alias, aperiam quae voluptatum?",
    b: "odio officiis deserunt sed alias, ",
    c: "odio officiis deserunt um?",
    d: "odio officiis deserunt sed alias, aperiam quae voluptatum?",
    anwswer: "d",
  },
  {
    question: "question four",
    a: "-1",
    b: "999",
    c: "85",
    d: "2500",
    anwswer: "a",
  },
  {
    question: "question five",
    a: "||",
    b: "%%",
    c: "**",
    d: "&&",
    anwswer: "d",
  },
];
let startBtn = document.querySelector(".start-btn");
let stageStarter = 0;
let currentAnswer = null;
//textInsert function
const textInsert = (element, text) => {
  element.textContent = text;
};

//reseting stage
const reset = () => {
  const container = document.querySelector(".col-md-5");
  const html = `<h2 class="display-4 start-text">Lets Start the Quiz</h2>
  <button class="start-btn">Start</button>`;
  container.innerHTML = html;
  const startBtn = document.querySelector(".start-btn");
  startBtn.addEventListener("click", ali);
};

const makeQuiz = () => {
  const container = document.querySelector(".col-md-5");
  const html = `<p id="mainQ"></p>
  <ul id="qContainer">
    <li>
      <input type="radio" name="answer" id="a" value="a" /><label
        id="lOne"
        for="a"
      ></label>
    </li>
    <li>
      <input type="radio" name="answer" id="b" value="b" /><label
        id="lTwo"
        for="b"
      ></label>
    </li>
    <li>
      <input type="radio" name="answer" id="c" value="c" /><label
        id="lTree"
        for="c"
      ></label>
    </li>
    <li>
      <input type="radio" name="answer" id="d" value="d" /><label
        id="lFour"
        for="d"
      ></label>
    </li>
  </ul>
  <button id="mainBtn" class="next-btn">Next</button>`;
  container.innerHTML = html;
};

const win = () => {
  const container = document.querySelector(".col-md-5");
  const html = `
  <h2 class="display-4 win-text">You Won</h2>
  <button class="reset-quis">Reset</button>`;
  container.innerHTML = html;
  const resetGame = document.querySelector(".reset-quis");
  resetGame.addEventListener("click", reset);
};
function ali() {
  if (stageStarter === questions.length) return;
  makeQuiz();
  const paraQ = document.querySelector("#mainQ");
  const quisBtb = document.querySelector("#mainBtn");
  const labelOne = document.getElementById("lOne");
  const labelTwo = document.getElementById("lTwo");
  const labelTree = document.getElementById("lTree");
  const labelFour = document.getElementById("lFour");
  const allRadio = document.querySelectorAll("input");
  const stage = (currentStage) => {
    let cObj = questions[currentStage];
    paraQ.textContent = cObj.question;
    textInsert(labelOne, cObj.a);
    textInsert(labelTwo, cObj.b);
    textInsert(labelTree, cObj.c);
    textInsert(labelFour, cObj.d);
    currentAnswer = cObj.anwswer;
  };
  stage(0);
  quisBtb.addEventListener("click", () => {
    // if (stageStarter === questions.length - 1) return;

    //checking the answer
    for (let s of allRadio)
      if (s.checked && s.value === currentAnswer) {
        stageStarter++;
        if (questions.length === stageStarter) {
          stageStarter = 0;
          currentAnswer = null;
          win();
          return;
        }
        const con = document.querySelector(".col-md-5");
        con.classList.add("scale");
        setTimeout(() => {
          con.classList.remove("scale");
        }, 600);
        s.checked = false;
      } //reseting for wrong answer
      else if (s.checked && s.value !== currentAnswer) {
        quisBtb.textContent = "Start Again";
        quisBtb.classList.add("wrong");
        quisBtb.classList.remove("next-btn");
        quisBtb.id = "reset";
        const resetBtn = document.querySelector("#reset");
        resetBtn.addEventListener("click", () => {
          stageStarter = 0;
          currentAnswer = null;
          reset();
        });
      }
    stage(stageStarter);
  });
}
startBtn.addEventListener("click", ali);
