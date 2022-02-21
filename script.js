const quizData = [
    {
        question: "Siapa Presiden pertama Negara Republik Indonesia?",
        a: "Soekarno",
        b: "Bung Tomo",
        c: "Abdurrahman Wahid",
        d: "Joko Widodo",
        correct: "a",
    },
    {
        question: "Indonesia memproklamirkan kemerdekaan pada tanggal?",
        a: "14 Februari 1942",
        b: "15 Juni 1941",
        c: "18 Agustus 1945",
        d: "17 Agustus 1945",
        correct: "d",
    },
    {
        question: "Siapa jenderal Belanda yang tewas saat pertempuran 10 November di kota Surabaya?",
        a: "Jenderal Daendels",
        b: "Jenderal A.W.S Mallaby",
        c: "Jenderal Van Der Sar",
        d: "Jawaban a,b,c salah",
        correct: "b",
    },
    {
        question: "Siapa Bapak Koperasi Republik Indonesia?",
        a: "Mohammad Hatta",
        b: "Ir. Soekarno",
        c: "Radjiman Wedyodiningrat",
        d: "Ki Hadjar Dewantoro",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
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
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})