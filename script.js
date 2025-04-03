const welcomeScreen = document.getElementById("welcome-screen");
const pollContainer = document.getElementById("poll-container");
const triviaIntro = document.getElementById("trivia-intro");
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-button");

// Poll Questions and Answers
const pollQuestions = [
  {
    question: "How many times have you attended an ICSpark showcase?",
    answers: ["This is my first year", "I've been multiple times", "I'm a judge/mentor", "I don't remember"],
    votes: [0, 0, 0, 0],
    type: "poll"
  },
  {
    question: "How much website expertise do you have?",
    answers: ["I don't know anything", "I am attending the ICSpark classes", "I know a few things", "I know so much it can be my job"],
    votes: [0, 0, 0, 0],
    type: "poll"
  },
  {
    question: "Have you had fun at the previous contestant's projects?",
    answers: ["YES! I've loved all the amazing projects", "It's okay, the projects were cool", "Meh, this is the best project I've seen", "Nah, it's kinda boring"],
    votes: [0, 0, 0, 0],
    type: "poll"
  },
  {
    question: "What motivates you to participate in showcases like this?",
    answers: ["I'm not participating", "The challenge", "The prizes", "The opportunity to learn", "The fun of competition and to meet new people"],
    votes: [0, 0, 0, 0, 0],
    type: "poll"
  },
  {
    question: "What is your favorite part of watching a coding showcase?",
    answers: ["The excitement of the competition", "Seeing creative projects", "Learning new things", "Supporting friends and family"],
    votes: [0, 0, 0, 0],
    type: "poll"
  },
];

// Trivia Questions and Answers
const triviaQuestions = [
  {
    question: "What does HTML stand for?",
    answers: ["Hypertext Markup Language", "High-Level Text Markup Language", "Hyperlink and Text Markup Language", "Hypertext Multi-Language"],
    correct: 0,
    type: "trivia"
  },
  {
    question: "Which of the following is a valid way to declare a variable in JavaScript?",
    answers: ["var myVariable;", "variable myVariable;", "declare myVariable;", "let myVariable;"],
    correct: 0
  },
  {
    question: "What is the purpose of CSS?",
    answers: ["To structure content on the web", "To style and layout web pages", "To add interactivity to web pages", "To manage databases"],
    correct: 1
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1
  },
  {
    question: "In CSS, how do you select an element with the class name 'example'?",
    answers: ["#example", ".example", "*example", "example"],
    correct: 1
  },
  {
    question: "What is the correct syntax for a JavaScript function?",
    answers: ["function myFunction[] {}", "function myFunction() {}", "myFunction() function {}", "function: myFunction() {}"],
    correct: 1
  },
  {
    question: "Which of the following is a CSS property used to change the text color?",
    answers: ["color", "text-color", "font-color", "background-color"],
    correct: 0
  },
  {
    question: "What does the <div> tag represent in HTML?",
    answers: ["A division or section in a document", "A hyperlink", "An image", "A form element"],
    correct: 0
  },
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correct: 3
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
    correct: 2
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: ["Gold", "Iron", "Diamond", "Quartz"],
    correct: 2
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Oxygen", "Gold", "Silver", "Hydrogen"],
    correct: 0
  },
  {
    question: "What is the smallest prime number?",
    answers: ["0", "1", "2", "3"],
    correct: 2
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: ["Tomato", "Avocado", "Pepper", "Onion"],
    correct: 1
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["China", "Japan", "Thailand", "South Korea"],
    correct: 1
  },
];

// Combine all questions
const allQuestions = [...pollQuestions, ...triviaQuestions];

let currentQuestionIndex = 0;
let isAnswering = false; // Flag to prevent multiple clicks

// Function to start the website
function startWebsite() {
  setTimeout(() => {
    welcomeScreen.classList.add("hidden");
    pollContainer.classList.remove("hidden");
    showQuestion();
  }, 3000); // Show welcome screen for 3 seconds
}

// Function to display the current question
function showQuestion() {
  const currentQuestion = allQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  answerButtons.forEach((button, index) => {
    if (currentQuestion.answers[index]) {
      button.textContent = currentQuestion.answers[index];
      button.style.visibility = "visible";
    } else {
      button.style.visibility = "hidden";
    }

    // Add click event
    button.onclick = () => handleAnswer(index);
  });
}

// Handle when the user clicks an answer
function handleAnswer(selectedIndex) {
  if (isAnswering) return; // Prevent multiple clicks
  isAnswering = true; // Set flag to true

  const currentQuestion = allQuestions[currentQuestionIndex];

  if (currentQuestion.type === "poll") {
    // Increment the vote for the selected answer
    currentQuestion.votes[selectedIndex]++;
    
    // Calculate total votes
    const totalVotes = currentQuestion.votes.reduce((a, b) => a + b, 0);

    // Display vote percentages
    answerButtons.forEach((button, index) => {
      const percentage = totalVotes > 0 ? Math.round((currentQuestion.votes[index] / totalVotes) * 100) : 0;
      button.textContent = `${currentQuestion.answers[index]} (${percentage}%)`;
      button.style.opacity = 0.5; // Fade out buttons
    });
  } else if (currentQuestion.type === "trivia") {
    // Highlight correct and incorrect answers
    answerButtons.forEach((button, index) => {
      if (index === currentQuestion.correct) {
        button.classList.add("correct");
      } else if (index === selectedIndex) {
        button.classList.add("incorrect");
      }
      button.disabled = true; // Disable buttons after selection
    });
  }

  // Move to the next question after a delay
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < allQuestions.length) {
      resetButtons();
      showQuestion();
    } else {
      endQuiz();
    }
    isAnswering = false; // Reset flag after processing
  }, 3000);
}

// Reset button styles
function resetButtons() {
  answerButtons.forEach((button) => {
    button.classList.remove("correct", "incorrect");
    button.style.opacity = 1; // Reset opacity
    button.disabled = false; // Enable buttons
  });
}

// End the quiz
function endQuiz() {
  pollContainer.classList.add("hidden");
  triviaIntro.classList.remove("hidden");
}

// Start the website
startWebsite();