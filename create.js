const form = document.getElementById("quiz-form");
const questions = document.getElementById("questions");
const addBtn = document.getElementById("add-question");
const message = document.getElementById("form-message");
let questionCount = 0;

function addQuestion() {
  questionCount++;
  const div = document.createElement("div");
  div.className = "question-builder";
  div.innerHTML = `
    <button type="button" class="remove-question">Remove</button>
    <h3>Question ${questionCount}</h3>
    <label>Question
      <input class="q-text" required placeholder="Write your question...">
    </label>
    <div class="form-row">
      <label>Option A<input class="q-option" required></label>
      <label>Option B<input class="q-option" required></label>
    </div>
    <div class="form-row">
      <label>Option C<input class="q-option" required></label>
      <label>Option D<input class="q-option" required></label>
    </div>
    <label>Correct Answer
      <select class="q-answer">
        <option value="0">A</option><option value="1">B</option>
        <option value="2">C</option><option value="3">D</option>
      </select>
    </label>
  `;
  div.querySelector(".remove-question").onclick = () => {
    div.remove();
    renumber();
  };
  questions.appendChild(div);
}
function renumber() {
  [...questions.children].forEach((el, i) => el.querySelector("h3").textContent = `Question ${i + 1}`);
  questionCount = questions.children.length;
}
addBtn.onclick = addQuestion;
addQuestion();

form.addEventListener("submit", e => {
  e.preventDefault();
  if (!questions.children.length) {
    message.textContent = "Add at least one question.";
    return;
  }

  const newQuiz = {
    id: "custom-" + Date.now(),
    title: document.getElementById("title").value,
    description: document.getElementById("description").value || "A custom quiz created with QuizPlay.",
    category: document.getElementById("new-category").value,
    difficulty: document.getElementById("new-difficulty").value,
    questions: [...questions.children].map(box => ({
      question: box.querySelector(".q-text").value,
      options: [...box.querySelectorAll(".q-option")].map(x => x.value),
      answer: Number(box.querySelector(".q-answer").value)
    }))
  };

  const custom = JSON.parse(localStorage.getItem("quizplay_custom_quizzes") || "[]");
  custom.push(newQuiz);
  localStorage.setItem("quizplay_custom_quizzes", JSON.stringify(custom));
  message.textContent = "Quiz saved! Opening Explore...";
  setTimeout(() => location.href = "explore.html", 700);
});
