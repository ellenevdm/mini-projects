import { QuestionType } from "@/components/quiz-app/MainQuiz";

export const questions = [
  // General Knowledge
  {
    id: 1,
    question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answer: "Tokyo",
  },
  {
    id: 2,
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "South America"],
    answer: "Africa",
  },
  {
    id: 3,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Jane Austen", "Mark Twain"],
    answer: "Harper Lee",
  },

  // Programming
  {
    id: 4,
    question:
      "Which programming language is primarily used for building web frontends?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript",
  },
  {
    id: 5,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Styling System",
      "Centralized Styling Syntax",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    id: 6,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<button>"],
    answer: "<a>",
  },

  // Science
  {
    id: 7,
    question: "What planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    id: 8,
    question: "Which element is needed for respiration in humans?",
    options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
    answer: "Oxygen",
  },
  {
    id: 9,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: "Diamond",
  },

  // Mathematics
  {
    id: 10,
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    id: 11,
    question:
      "If a triangle has angles of 90° and 45°, what is the third angle?",
    options: ["35°", "45°", "60°", "90°"],
    answer: "45°",
  },
  {
    id: 12,
    question: "What is 7 × 8?",
    options: ["48", "56", "64", "72"],
    answer: "56",
  },

  // Tech & Computers
  {
    id: 13,
    question: "Which company created the iPhone?",
    options: ["Samsung", "Google", "Apple", "Microsoft"],
    answer: "Apple",
  },
  {
    id: 14,
    question: "What does 'HTTP' stand for?",
    options: [
      "HyperText Transfer Protocol",
      "Hyperlink and Text Transmission Protocol",
      "Home Tool Transfer Process",
      "Hyper Transfer Text Protocol",
    ],
    answer: "HyperText Transfer Protocol",
  },
  {
    id: 15,
    question: "What is the primary function of a GPU?",
    options: [
      "Processing graphics",
      "Storing data",
      "Running the operating system",
      "Managing network connections",
    ],
    answer: "Processing graphics",
  },

  // Fun Trivia
  {
    id: 16,
    question: "What is the name of the fictional city Batman protects?",
    options: ["Metropolis", "Gotham", "Star City", "Central City"],
    answer: "Gotham",
  },
  {
    id: 17,
    question: "Which video game franchise features a character named 'Link'?",
    options: ["Super Mario", "The Legend of Zelda", "Halo", "Final Fantasy"],
    answer: "The Legend of Zelda",
  },
  {
    id: 18,
    question: "What is the name of the wizarding school in Harry Potter?",
    options: ["Durmstrang", "Hogwarts", "Beauxbatons", "Ilvermorny"],
    answer: "Hogwarts",
  },
  {
    id: 19,
    question: "Which country is famous for the Great Wall?",
    options: ["China", "India", "Japan", "Korea"],
    answer: "China",
  },
  {
    id: 20,
    question: "What is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    answer: "Nile River",
  },
  {
    id: 21,
    question: "Which famous scientist developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    answer: "Albert Einstein",
  },

  // Math & Logic
  {
    id: 22,
    question: "What is the value of π (pi) rounded to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    answer: "3.14",
  },
  {
    id: 23,
    question: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    answer: "30",
  },
  {
    id: 24,
    question: "Which number is a prime number?",
    options: ["20", "17", "42", "50"],
    answer: "17",
  },

  // Science & Nature
  {
    id: 25,
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    id: 26,
    question:
      "Which part of the brain is responsible for controlling balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Brainstem", "Hippocampus"],
    answer: "Cerebellum",
  },
  {
    id: 27,
    question: "What is the hardest metal known?",
    options: ["Iron", "Tungsten", "Gold", "Platinum"],
    answer: "Tungsten",
  },

  // Geography
  {
    id: 28,
    question: "Which city is known as the 'Big Apple'?",
    options: ["Los Angeles", "New York", "Chicago", "San Francisco"],
    answer: "New York",
  },
  {
    id: 29,
    question: "Mount Everest is located in which mountain range?",
    options: ["Andes", "Alps", "Rockies", "Himalayas"],
    answer: "Himalayas",
  },
  {
    id: 30,
    question: "Which country has the most natural lakes?",
    options: ["USA", "Canada", "Russia", "Brazil"],
    answer: "Canada",
  },

  // Technology & Computers
  {
    id: 31,
    question: "What does 'RAM' stand for?",
    options: [
      "Random Access Memory",
      "Read-Only Memory",
      "Rapid Action Module",
      "Remote Access Machine",
    ],
    answer: "Random Access Memory",
  },
  {
    id: 32,
    question: "Which company developed the Windows operating system?",
    options: ["Apple", "Microsoft", "Google", "IBM"],
    answer: "Microsoft",
  },
  {
    id: 33,
    question: "What is the name of Elon Musk’s space exploration company?",
    options: ["Blue Origin", "NASA", "SpaceX", "Virgin Galactic"],
    answer: "SpaceX",
  },

  // Entertainment & Fun
  {
    id: 34,
    question: "Which movie features the quote, 'I'm the king of the world!'?",
    options: ["Titanic", "The Lion King", "Avatar", "Gladiator"],
    answer: "Titanic",
  },
  {
    id: 35,
    question: "Who painted the Mona Lisa?",
    options: [
      "Michelangelo",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    id: 36,
    question: "Which famous pop star is known as the 'King of Pop'?",
    options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
    answer: "Michael Jackson",
  },

  // Sports
  {
    id: 37,
    question: "How many players are on a standard soccer team?",
    options: ["9", "10", "11", "12"],
    answer: "11",
  },
  {
    id: 38,
    question: "Which country won the 2018 FIFA World Cup?",
    options: ["Germany", "Brazil", "France", "Argentina"],
    answer: "France",
  },
];

export function getShuffledQuestions(
  questions: QuestionType[]
): QuestionType[] {
  return [...questions].sort(() => Math.random() - 0.5);
}
