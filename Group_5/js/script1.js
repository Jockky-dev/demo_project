const quizData = [
    {
        question: "ພາສາໃດ Python ຖືກພັດທະນາຂຶ້ນໂດຍໃຜ?",
        a: "Guido van Rossum",
        b: "Guido von Rossum",
        c: "Guide van Rossum",
        d: "Guide von Rossum",
        correct: "a",
    },
    {
        question: "ພາສາ Python ມີຄຸນລັກສະນະເປັນແນວໃດ?",
        a: "Platform Independent",
        b: "Native",
        c: "Cross Platform",
        d: "ຜິດໝົດ",
        correct: "a",
    },
    {
        question: "ພາສາ Python ມີຊື່ນາມສະກຸນວ່າແນວໃດ?",
        a: ".html",
        b: ".c",
        c: ".py",
        d: ".dart",
        correct: "c",
    },
    {
        question: "ພາສາ Python ສາມາດ Run ໄດ້ໃນ Platform ຫຍັງແດ່?",
        a: "Windows",
        b: "MacOS",
        c: "Linux",
        d: "ຖືກທູກຂໍ້",
        correct: "d",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2 style="font-family:Noto Sans Lao">ເຈົ້າຕອບຖືກ ${score}/${quizData.length} ຂໍ້</h2>

           <button onclick="location.href='/index.html'">BACK TO HOMEPAGE</button>
           `
       }
    }
})