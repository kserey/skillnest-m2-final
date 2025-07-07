$(document).ready(function () {
  // GET FOOTER PATH
  const isInsidePages = window.location.pathname.includes('/pages/');
  const footerPath = isInsidePages ? '../components/footer.html' : 'assets/components/footer.html';

  $('#footer-placeholder').load(footerPath);
});