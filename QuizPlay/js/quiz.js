const params = new URLSearchParams(location.search);
const quizId = params.get("id");
const quiz = getQuizzes().find(q => q.id === quizId) || getQuizzes()[0];

let current = 0;
let score = 0;
let selected = null;

const title = document.getElementById("quiz-title");
const count = document.getElementById("question-count");
const progress = document.getElementById("progress-bar");
const number = document.getElementById("question-number");
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

title.textContent = quiz.title;

function loadQuestion() {
  selected = null;
  nextBtn.disabled = true;
  const q = quiz.questions[current];
  count.textContent = `${current + 1} / ${quiz.questions.length}`;
  number.textContent = `QUESTION ${current + 1}`;
  question.textContent = q.question;
  progress.style.width = `${((current + 1) / quiz.questions.length) * 100}%`;
  options.innerHTML = q.options.map((option, i) =>
    `<div class="option" data-index="${i}">
      <span>${String.fromCharCode(65 + i)}.</span> ${option}
    </div>`
  ).join("");

  document.querySelectorAll(".option").forEach(el => {
    el.addEventListener("click", () => {
      document.querySelectorAll(".option").forEach(x => x.classList.remove("selected"));
      el.classList.add("selected");
      selected = Number(el.dataset.index);
      nextBtn.disabled = false;
    });
  });

  nextBtn.textContent = current === quiz.questions.length - 1 ? "Finish Quiz" : "Next Question";
}

nextBtn.addEventListener("click", () => {
  if (selected === quiz.questions[current].answer) score++;
  current++;
  if (current < quiz.questions.length) {
    loadQuestion();
  } else {
    const result = {
      quizId: quiz.id,
      title: quiz.title,
      score: Math.round((score / quiz.questions.length) * 100),
      correct: score,
      total: quiz.questions.length,
      wrong: quiz.questions.length - score
    };
    localStorage.setItem("quizplay_last_result", JSON.stringify(result));
    location.href = "result.html";
  }
});

loadQuestion();
