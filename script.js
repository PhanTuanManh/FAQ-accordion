document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.card__boxquestion');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const plusIcon = this.querySelector('.card__question-plus');
            const minusIcon = this.querySelector('.card__question-minus');

            answer.classList.toggle('visible');
            plusIcon.classList.toggle('visible');
            minusIcon.classList.toggle('visible');
        });
    });
});
