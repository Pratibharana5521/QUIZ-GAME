// Write your code from here!!*/
let questions = [];
        let currentQuestionIndex = 0;

        async function fetchQuestions() {
            try {
                const response = await fetch('http://localhost:3000/questions');
                questions = await response.json();
                displayQuestion();
            } catch (error) {
                document.getElementById('question').innerText = 'Error loading quiz!';
            }
        }

        function displayQuestion() {
            if (currentQuestionIndex >= questions.length) {
                document.getElementById('question').innerText = "Quiz Finished!";
                document.getElementById('options').innerHTML = "";
                return;
            }

            const questionObj = questions[currentQuestionIndex];
            document.getElementById('question').innerText = questionObj.question;
            const optionsContainer = document.getElementById('options');
            optionsContainer.innerHTML = "";

            questionObj.options.forEach(option => {
                const btn = document.createElement('button');
                btn.innerText = option;
                btn.classList.add('option');
                btn.onclick = () => checkAnswer(btn, option);
                optionsContainer.appendChild(btn);
            });
        }

        function checkAnswer(button, selectedOption) {
            const correctAnswer = questions[currentQuestionIndex].answer;
            if (selectedOption === correctAnswer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }

            document.querySelectorAll('.option').forEach(btn => btn.onclick = null);
        }

        function nextQuestion() {
            currentQuestionIndex++;
            displayQuestion();
        }

        fetchQuestions();