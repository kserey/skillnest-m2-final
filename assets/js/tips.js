$(document).ready(function () {

  // FORM SUBMIT
  $('#contact-form').submit(function (e) {
    e.preventDefault();
    alert('Formulario enviado. Gracias por tu interés.');
    this.reset();
  });

  // INIT QUIZ
  $('#quiz-form').submit(function (e) {
    e.preventDefault();
    let score = 0;

    const correctAnswers = {
      q1: 'true',
      q2: 'true',
      q3: 'true'
    };

    for (let q in correctAnswers) {
      const selected = $(`input[name=${q}]:checked`).val();
      if (selected === correctAnswers[q]) {
        score++;
      }
    }

    const total = Object.keys(correctAnswers).length;
    $('#result-message')
      .removeClass('d-none text-danger text-success')
      .addClass(score === total ? 'text-success' : 'text-danger')
      .text(`Respondiste correctamente ${score} de ${total} preguntas.`);

    // SCROLL TO RESULT
    $('#result-message')[0].scrollIntoView({ behavior: 'smooth' });
  });

});
