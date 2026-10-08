document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("featured-quizzes");
  getQuizzes().slice(0, 3).forEach(quiz => {
    container.insertAdjacentHTML("beforeend", quizCard(quiz));
  });
});

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
