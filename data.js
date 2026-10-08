const defaultQuizzes = [
  {
    id: "cyber-basic",
    title: "Cybersecurity Basic",
    description: "Test your basic knowledge about cybersecurity.",
    category: "Cybersecurity",
    difficulty: "Easy",
    questions: [
      { question: "What is phishing?", options: ["A type of social engineering attack", "A computer game", "A firewall system", "A programming language"], answer: 0 },
      { question: "What is a strong password?", options: ["123456", "password", "A long and unique combination", "Your birthday"], answer: 2 },
      { question: "What does MFA stand for?", options: ["Main File Access", "Multi-Factor Authentication", "Multiple Firewall Access", "Managed File Account"], answer: 1 },
      { question: "What is malware?", options: ["Malicious software", "A hardware device", "A search engine", "A backup method"], answer: 0 },
      { question: "What is a firewall used for?", options: ["Editing photos", "Controlling network traffic", "Playing games", "Creating passwords"], answer: 1 }
    ]
  },
  {
    id: "it-basic",
    title: "IT Fundamentals",
    description: "A quick quiz about basic information technology.",
    category: "IT",
    difficulty: "Easy",
    questions: [
      { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing User"], answer: 0 },
      { question: "Which one is an operating system?", options: ["Windows", "Google", "HTML", "Wi-Fi"], answer: 0 },
      { question: "What is RAM?", options: ["Permanent storage", "Temporary working memory", "A processor", "A network cable"], answer: 1 },
      { question: "Which is a programming language?", options: ["Python", "Chrome", "Windows", "Ethernet"], answer: 0 },
      { question: "What does URL identify?", options: ["A web address", "A keyboard", "A CPU", "A printer"], answer: 0 }
    ]
  },
  {
    id: "english-basic",
    title: "English Vocabulary",
    description: "Practice common English words and meanings.",
    category: "English",
    difficulty: "Easy",
    questions: [
      { question: "What does 'purpose' mean?", options: ["Tujuan", "Masalah", "Tempat", "Kecepatan"], answer: 0 },
      { question: "What does 'comfortable' mean?", options: ["Marah", "Nyaman", "Lapar", "Takut"], answer: 1 },
      { question: "What does 'ingredient' mean?", options: ["Bahan", "Harga", "Rasa", "Ukuran"], answer: 0 },
      { question: "What does 'almost' mean?", options: ["Selalu", "Hampir", "Jarang", "Sudah"], answer: 1 },
      { question: "What does 'except' mean?", options: ["Termasuk", "Kecuali", "Sebelum", "Setelah"], answer: 1 }
    ]
  },
  {
    id: "general-basic",
    title: "General Knowledge",
    description: "Simple questions to test your general knowledge.",
    category: "General",
    difficulty: "Medium",
    questions: [
      { question: "What is the capital of Indonesia?", options: ["Bandung", "Surabaya", "Jakarta", "Medan"], answer: 2 },
      { question: "How many days are there in a week?", options: ["5", "6", "7", "8"], answer: 2 },
      { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Mercury"], answer: 0 },
      { question: "How many continents are commonly recognized?", options: ["5", "6", "7", "8"], answer: 2 },
      { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 }
    ]
  }
];

function getQuizzes() {
  const custom = JSON.parse(localStorage.getItem("quizplay_custom_quizzes") || "[]");
  return [...defaultQuizzes, ...custom];
}
