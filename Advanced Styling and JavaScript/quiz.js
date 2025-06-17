const quiz = [
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Style System", "Color Style Syntax"],
    answer: 0
  },
  {
    question: "Which tag is used to include JavaScript?",
    options: ["<js>", "<javascript>", "<script>"],
    answer: 2
  },
  {
    question: "What was the first bug in a computer?",
    options: ["a moth", "Y2K Bug", "Therac-25"],
    answer: 0
  },
  {
    question: "Best language?",
    options: ["Rust", "GO", "asm"],
    answer: 2
  },
    {
    question: "Best Subject",
    options: ["math", "quantum physics", "history"],
    answer: 2
  }
];

let current = 0, score = 0;

function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").textContent = q.question;
  const options = document.getElementById("options");
  options.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (i === q.answer) score++;
      nextQuestion();
    };
    options.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("question").textContent = "Quiz Complete!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").textContent = `Your Score: ${score}/${quiz.length}`;
  }
}

loadQuestion();
