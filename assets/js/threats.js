$(document).ready(function () {
  const threats = [
    { title: 'Phishing', desc: 'Técnica para engañar al usuario y robar información confidencial.' },
    { title: 'Ransomware', desc: 'Malware que bloquea el sistema hasta pagar un rescate.' },
    { title: 'Malware', desc: 'Software malicioso que daña o accede sin permiso a un sistema.' },
    { title: 'Ataques DDoS', desc: 'Saturación de un servicio para volverlo inaccesible.' }
  ];

  threats.forEach((threat) => {
    $('#threats-container').append(`
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${threat.title}</h5>
            <p class="card-text">${threat.desc}</p>
          </div>
        </div>
      </div>
    `);
  });

  const cases = [
    { title: 'Caso 1: WannaCry', content: 'En 2017, este ransomware afectó a hospitales y empresas en todo el mundo.' },
    { title: 'Caso 2: DDoS Dyn', content: 'Un ataque DDoS afectó a grandes sitios como Twitter y Netflix en 2016.' }
  ];

  cases.forEach((c, index) => {
    $('#casesAccordion').append(`
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}">
            ${c.title}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" data-bs-parent="#casesAccordion">
          <div class="accordion-body">${c.content}</div>
        </div>
      </div>
    `);
  });
});
