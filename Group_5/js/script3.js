const quizData = [
    {
        question: "ພາສາ Dart ຖືກພັດທະນາໂດຍບໍລິສັດຫຍັງ?",
        a: "Tesla",
        b: "Meta",
        c: "Microsoft",
        d: "Google",
        correct: "d",
    },
    {
        question: "ຄຳສັ່ງສະແດງຜົນໃນພາສາ Dart ແມ່ນຂໍ້ໃດ?",
        a: "echo",
        b: "print",
        c: "printf",
        d: "output",
        correct: "b",
    },
    {
        question: "ຂອບເຂດໂຕແປມີຈັກປະເພດ?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "b",
    },
    {
        question: "ວົນ Loop ໃນພາສາ Dart ມີຈັກປະເພດ?",
        a: "1",
        b: "2",
        c: "3",
        d: "ບໍ່ຖືກຈັກຂໍ້",
        correct: "c",
    },
    {
        question: "ກົດການຕັ້ງຊື່ໂຕແປແມ່ນຂໍ້ໃດ?",
        a: "ໂຕອັກສອນທຳອິດຕ້ອງຂຶ້ນຕົ້ນດ້ວຍໂຕເລກ",
        b: "ໂຕອັກສອນທຳອິດສາມາດເປັນອັກສອນພິເສດໄດ້ທຸກໂຕ",
        c: "ສາມາດຕັ້ງຊື່ຕາມຄຳສະຫງວນໄດ້",
        d: "ຜິດໝົດທຸກຂໍ້",
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