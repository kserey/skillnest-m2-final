$(document).ready(function () {
  // Amenazas comunes
  const threats = [
    {
      title: 'Phishing',
      desc: 'Técnica en la que los atacantes se hacen pasar por entidades legítimas (como bancos o servicios de correo) para engañar al usuario y obtener información personal, como contraseñas o datos bancarios.'
    },
    {
      title: 'Ransomware',
      desc: 'Tipo de malware que bloquea el acceso al sistema o a archivos del usuario, exigiendo un pago para desbloquearlos. A menudo se propaga por archivos adjuntos infectados o enlaces maliciosos.'
    },
    {
      title: 'Malware',
      desc: 'Término general para todo software malicioso diseñado para dañar, infiltrarse o robar información de un sistema. Incluye virus, troyanos, spyware y más.'
    },
    {
      title: 'Ataques DDoS',
      desc: 'Un ataque de denegación de servicio distribuido (DDoS) busca saturar un servidor con tráfico falso desde múltiples fuentes, haciéndolo inaccesible para usuarios legítimos.'
    }
  ];

  // Insertar tarjetas de amenazas
  threats.forEach((threat) => {
    $('#threats-container').append(`
      <div class="col-md-6 mb-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body">
            <h5 class="card-title">${threat.title}</h5>
            <p class="card-text">${threat.desc}</p>
          </div>
        </div>
      </div>
    `);
  });

  // Casos reales
  const cases = [
    {
      title: 'Caso WannaCry (2017)',
      content: 'WannaCry fue un ransomware que afectó a más de 200,000 equipos en 150 países, incluyendo hospitales, empresas y gobiernos. Bloqueaba el acceso a archivos hasta recibir un pago en Bitcoin.'
    },
    {
      title: 'Ataque DDoS a Dyn (2016)',
      content: 'Un masivo ataque DDoS contra el proveedor DNS Dyn colapsó servicios como Twitter, Netflix, Spotify y Reddit durante horas. Fue realizado mediante una red de dispositivos IoT infectados.'
    },
    {
      title: 'Phishing a usuarios de Google Docs (2017)',
      content: 'Un correo falso simulando ser una invitación de Google Docs redirigía a los usuarios a una app maliciosa que obtenía acceso a su cuenta de Google.'
    }
  ];

  // Insertar acordeón de casos
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
