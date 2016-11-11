//http://stackoverflow.com/questions/19397140/collapsing-sidebar-with-bootstrap-3
$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});