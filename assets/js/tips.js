$(document).ready(function () {
  const tips = [
    'Usa contraseñas seguras y únicas.',
    'No abras enlaces sospechosos.',
    'Mantén tu software actualizado.',
    'Utiliza antivirus confiables.',
    'Activa la autenticación de dos factores.'
  ];

  tips.forEach(tip => {
    $('#tips-list').append(`<li class="list-group-item">${tip}</li>`);
  });

  $('#contact-form').submit(function (e) {
    e.preventDefault();
    alert('Formulario enviado. Gracias por tu interés.');
    this.reset();
  });

  $('.correct').on('click', function () {
    $('#feedback').removeClass('d-none');
  });
});
