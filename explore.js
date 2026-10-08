const search = document.getElementById("search");
const category = document.getElementById("category");
const difficulty = document.getElementById("difficulty");
const list = document.getElementById("quiz-list");

function render() {
  const q = search.value.toLowerCase();
  const quizzes = getQuizzes().filter(item =>
    (item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)) &&
    (category.value === "all" || item.category === category.value) &&
    (difficulty.value === "all" || item.difficulty === difficulty.value)
  );
  list.innerHTML = quizzes.length ? quizzes.map(quizCard).join("") :
    '<p style="color:#6b7280">No quiz found.</p>';
}
search.addEventListener("input", render);
category.addEventListener("change", render);
difficulty.addEventListener("change", render);
render();

function quizCard(quiz) {
  return `
    <article class="quiz-card">
      <span class="quiz-tag">${quiz.category}</span>
      <h3>${quiz.title}</h3>
      <p>${quiz.description}</p>
      <div class="quiz-meta">
        <span>${quiz.questions.length} Questions</span>
        <span>${quiz.difficulty}</span>
      </div>
      <a class="btn primary" href="quiz.html?id=${encodeURIComponent(quiz.id)}">Play Quiz</a>
    </article>
  `;
}
