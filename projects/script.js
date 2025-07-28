// Wait for DOM to load
$(document).ready(function () {
    // Menu toggle
    $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    // Scroll event
    $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      // Scroll to top button toggle
      if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
      } else {
        document.querySelector('#scroll-top').classList.remove('active');
      }
    });
  
    // Isotope filter
    var $grid = $('.box-container').isotope({
      itemSelector: '.project-card',
      layoutMode: 'fitRows'
    });
  
    // Button click filter
    $('.button-group').on('click', 'button', function () {
      $('.button-group .btn').removeClass('is-checked');
      $(this).addClass('is-checked');
  
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  });
  