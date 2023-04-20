const MCQS = [
  {
    question: "The content of the page (such as your pictures, text, links) will show up here.", 
    a: "Head",
    b: "Body",
    c: "Style",
    d: "Folder",
    ans: "ans2"
  },
  {
    question: "The default link color for hyperlinks:",
    a: "Green",
    b: "Blue",
    c: "Purple",
    d: "Red",
    ans: "ans2"
  },
  {
    question: "HTML files are saved by default with the extension?",
    a: ".html5",
    b: ".html",
    c: ".HTML",
    d: "All of the above",
    ans: "ans2"
  },
  {
    question: "Defines a division or a section in an HTML document. Used to group block-elements to format them with CSS?",
    a: "div",
    b: "span",
    c: "caption",
    d: "Group",
    ans: "ans1"
  },
  {
    question: "Which property is used to change the background colour?",
    a: "bgcolor",
    b: "background-color",
    c: "bcolor",
    d: "background-colour",
    ans: "ans2"
  },
  {
    question: "In how many ways can CSS be written in?", 
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    ans: "ans2"
  },
  {
    question: "CSS rules are enclosed with __________",
    a: "< >",
    b: "( )",
    c: "{ }",
    d: '" "',
    ans: "ans3"
  },
  {
    question: "What is a variable",
    a: "Store values so we can use them later and change them from the code.",
    b: "Store values so we can use them but cannot change them.",
    c: "Store values so we can use them once.",
    d: "Store values in containers so we can't use them later.",
    ans: "ans1"
  },
  {
    question: "How do you write Hello W3docs in an alert box?",
    a: "alertBox(Hello W3docs);",
    b: "alert(Hello W3docs);",
    c: "msgBox(Hello W3docs);",
    d: "None of the above",
    ans: "ans2"
  },
  {
    question: "Who give you this oppurtunity to build this project?",
    a: "Folio 3",
    b: "Systems Limited",
    c: "SYNC Intern's",
    d: "ByteWise",
    ans: "ans3"
  }
];

// Start button
let start = document.querySelector("#begin");

// if start button clicks 
start.addEventListener("click", () => {
  start.style.display = "none";
  quizbox.style.display = "block";
});

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const next = document.querySelector('#next');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const playagain = document.querySelector("#playagain");

let no_of_question = 0;
let score = 0;

const inputquestions = () => {
  const questionlist = MCQS[no_of_question];
  question.innerHTML = questionlist.question;
  option1.innerHTML = questionlist.a;
  option2.innerHTML = questionlist.b;
  option3.innerHTML = questionlist.c;
  option4.innerHTML = questionlist.d;
} 

inputquestions();

const getAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) =>
      {
          if (curAnsElem.checked)
              {
                  answer = curAnsElem.id;
           }
      });
  return answer;
};

const terminateALL = () => {
  answers.forEach((curAnsElem) =>curAnsElem.checked = false);  
};

next.addEventListener('click', () => {
  const checkedAnswer = getAnswer();
  console.log(checkedAnswer);
  if (checkedAnswer === MCQS[no_of_question].ans)
      {
          score++;
      };
      no_of_question++;
  terminateALL();
  if (no_of_question < MCQS.length) {
      inputquestions();
  }
  else{ 
    quizbox.style.display = "none";
    res.style.display = "block";
    showScore.innerHTML = `
    <h3>You scored ${score} out of ${MCQS.length}  Questions!<h3>
    <h3>Thank you for playing.<h3>` 
    showScore.classList.remove('scoreArea');
  }
}
);