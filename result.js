const result = JSON.parse(localStorage.getItem("quizplay_last_result") || "null");

if (!result) {
  location.href = "explore.html";
} else {
  document.getElementById("result-title").textContent = result.title;
  document.getElementById("score").textContent = result.score;
  document.getElementById("correct").textContent = result.correct;
  document.getElementById("wrong").textContent = result.wrong;
  document.getElementById("total").textContent = result.total;
  document.getElementById("retry").href = `quiz.html?id=${encodeURIComponent(result.quizId)}`;

  let message = "Keep practicing and try again!";
  if (result.score >= 80) message = "Excellent! You really know your stuff.";
  else if (result.score >= 60) message = "Good job! A little more practice and you can get a higher score.";
  document.getElementById("result-message").textContent = message;
}
