$(document).ready(function () {
  // THREATS DATA
  const threats = [
    {
      title: 'Phishing',
      desc: 'Técnica en la que los atacantes se hacen pasar por entidades legítimas (como bancos o servicios de correo) para engañar al usuario y obtener información personal.',
      img: '../img/phishing.webp'
    },
    {
      title: 'Ransomware',
      desc: 'Malware que bloquea el acceso al sistema o archivos del usuario, exigiendo un pago para desbloquearlos.',
      img: '../img/ransomware.jpg'
    },
    {
      title: 'Malware',
      desc: 'Software malicioso diseñado para dañar, infiltrarse o robar información de un sistema.',
      img: '../img/malware.png'
    },
    {
      title: 'Ataques DDoS',
      desc: 'Un ataque DDoS busca saturar un servidor con tráfico falso desde múltiples fuentes, haciéndolo inaccesible.',
      img: '../img/ddos.png'
    }
  ];

  // INIT THREATS CARDS
  threats.forEach((threat, index) => {
    $('#threats-container').append(`
      <div class="col-lg-3 col-md-6 col-12 mb-4">
        <div class="card h-100 shadow-sm border-0 threat-card" 
             data-title="${threat.title}" 
             data-desc="${threat.desc}" 
             data-bs-toggle="modal" 
             data-bs-target="#threatModal">
          <img src="${threat.img}" class="card-img-top" alt="${threat.title}">
          <div class="card-body text-center">
            <h5 class="card-title">${threat.title}</h5>
          </div>
        </div>
      </div>
    `);
  });

  // MODAL EVENT
  $('#threats-container').on('click', '.threat-card', function () {
    const title = $(this).data('title');
    const desc = $(this).data('desc');

    $('#threatModalLabel').text(title);
    $('#threatModalBody').text(desc);
  });

  // REAL CASES DATA
  const cases = [
    {
      title: 'Caso WannaCry (2017)',
      content: 'WannaCry afectó a más de 200,000 equipos en 150 países, bloqueando el acceso a archivos hasta recibir un pago en Bitcoin.'
    },
    {
      title: 'Ataque DDoS a Dyn (2016)',
      content: 'Este ataque colapsó servicios como Twitter, Netflix, Spotify y Reddit durante horas.'
    },
    {
      title: 'Phishing a usuarios de Google Docs (2017)',
      content: 'Un correo falso redirigía a los usuarios a una app maliciosa que accedía a su cuenta de Google.'
    }
  ];

  // INIT REAL CASES ACCORDION
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
