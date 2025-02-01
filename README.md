
---

# **Quiz Game with Node.js**

## **Overview**
The **Quiz Game** is a server-side application built using Node.js. The game serves quiz questions from a JSON file and allows users to answer them via a frontend interface. The goal is to test your understanding of Node.js modules like `http`, `fs`, and `path`, as well as your ability to create a simple web server and serve static files.

---

## **Game Components**
The game consists of the following components:

1. **Frontend (HTML/CSS/JavaScript)**:
   - Displays the quiz questions and options.
   - Allows users to select answers and tracks their score.

2. **Backend (Node.js)**:
   - Serves the frontend files (HTML, CSS, JS).
   - Serves quiz questions from a JSON file using the `fs` module.
   - Uses the `http` module to create a server.

3. **Evaluation**:
   - GitHub Actions will run automated tests to check if the server is functioning correctly and serving the expected responses.

---

## **File Structure**
```
quiz-game/
├── public/
│   ├── index.html          # Frontend for the quiz game
│   ├── style.css           # Styles for the frontend
│   └── script.js           # Logic for fetching and displaying questions
├── questions.json          # Quiz questions and answers
├── server.js               # Node.js server logic
├── evaluate.js             # Test cases for evaluation
├── package.json            # Project dependencies and scripts
└── .github/workflows/      # GitHub Actions workflow
      └── evaluate.yml
```

---

## **How to Build the Game**

### **1. Frontend (`public/` folder)**
The frontend consists of three files:

#### **`index.html`**
This is the main HTML file that displays the quiz interface. 
---

### **2. Backend (`server.js`)**
This file contains the Node.js server logic.

---

### **3. Quiz Questions (`questions.json`)**
This file contains the quiz questions and answers.

---

### **4. Evaluation (`evaluate.js`)**
This file contains test cases to evaluate the server.

---

## **How to Run the Game**
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the server.
4. Open `http://localhost:3000` in your browser to play the game.

---

## **Evaluation Criteria**
The game will be evaluated based on:
1. Whether the server is running and serving the frontend.
2. Whether the `/questions` endpoint returns valid quiz questions.
3. Whether the frontend correctly displays the questions and tracks the score.

---

