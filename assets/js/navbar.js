$(function () {
  // GET NAVBAR PATH
  const inPages = window.location.pathname.includes('/assets/pages/');
  const navbarPath = inPages ? '../components/navbar.html' : 'assets/components/navbar.html';

  // LOAD NAVBAR
  $('#navbar-placeholder').load(navbarPath, function () {
    const currentPath = window.location.pathname.replace(/\/$/, '').split('?')[0].split('#')[0];

    // ADD ACTIVE CLASS
    $('.navbar-nav .nav-link').each(function () {
      const linkHref = $(this).attr('href');
      const resolvedHref = new URL(linkHref, window.location.origin).pathname;

      if (currentPath === resolvedHref || currentPath.endsWith(resolvedHref)) {
        $(this).addClass('active');
      }
    });

    // COLLAPSE NAVBAR
    $('.navbar-nav .nav-link').on('click', function () {
      const navbarCollapse = $('.navbar-collapse');
      if (navbarCollapse.hasClass('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse[0]);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
});
