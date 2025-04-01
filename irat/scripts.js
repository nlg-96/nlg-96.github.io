// Dữ liệu câu hỏi và đáp án
const questions = [
  {
    question: "Trong một điều kiện xác định, một phương pháp tránh thai được xếp vào loại 2 có đồng nghĩa với việc nó bị chống chỉ định tương đối trong điều kiện đó hay không?",
    answers: [
      { text: "Đúng. Hai thuật ngữ này là có ý nghĩa tương tự nhau về mặt thực hành lựa chọn một phương pháp tránh thai", correct: true },
      { text: "Sai. Xếp loại 2 đồng nghĩa với việc vẫn dùng được, nhưng không phải là lựa chọn ưu tiên trong điều kiện đó", correct: false },
      { text: "Sai. Xếp loại 2 đồng nghĩa với việc vẫn dùng được, do các nguy cơ có liên quan không phải là hằng định", correct: false },
      { text: "Sai. Xếp loại 2 đồng nghĩa với việc nó không thích hợp, và chỉ được phép dùng trong tình huống hãn hữu", correct: false }
    ]
  },
  // Câu hỏi tiếp theo
  {
    question: "Nếu đã chọn được phương pháp, thì chọn phương tiện tránh thai cụ thể (thương hiệu, loại hoạt chất, đặc điểm cấu tạo…) sẽ phải ưu tiên căn cứ vào điều gì?",
    answers: [
      { text: "Đặc điểm thể chất của cá thể", correct: false },
      { text: "Tính sẵn có của phương tiện", correct: true },
      { text: "Thành giá của phương tiện đó", correct: false },
      { text: "Uy tín của thương hiệu cụ thể đó", correct: false }
    ]
  }
  // Thêm các câu hỏi khác ở đây
];

// Hàm trộn đáp án
function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]]; // Hoán đổi
  }
}

// Hàm tạo câu hỏi
function renderQuestions() {
  const questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = ''; // Xóa nội dung cũ

  questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<h2>${index + 1}. ${question.question}</h2>`;

    shuffleAnswers(question.answers); // Trộn đáp án mỗi lần render

    question.answers.forEach((answer, answerIndex) => {
      const answerElement = document.createElement('div');
      answerElement.classList.add('answer');
      answerElement.innerHTML = `
        <label>
          <input type="radio" name="question-${index}" value="${answerIndex}">
          ${answer.text}
        </label>
      `;
      questionElement.appendChild(answerElement);
    });

    questionContainer.appendChild(questionElement);
  });
}

// Hàm kiểm tra kết quả bài test
function checkAnswers() {
  let score = 0;
  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="question-${index}"]:checked`);
    if (selectedAnswer) {
      const answerIndex = selectedAnswer.value;
      const isCorrect = question.answers[answerIndex].correct;
      if (isCorrect) {
        score++;
      }
    }
  });
  
  // Hiển thị kết quả
  alert(`Bạn đã trả lời đúng ${score} câu trên tổng số ${questions.length} câu.`);
}

// Xử lý sự kiện làm lại bài
document.getElementById('reset-button').addEventListener('click', function() {
  renderQuestions(); // Gọi lại hàm render để trộn đáp án và đặt lại bài test
});

// Xử lý sự kiện nộp bài
document.getElementById('submit-button').addEventListener('click', function() {
  checkAnswers(); // Kiểm tra kết quả khi bấm nộp bài
});

// Khởi tạo bài test khi trang load
window.onload = function() {
  renderQuestions();
};
