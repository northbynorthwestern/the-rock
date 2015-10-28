$(window).load(function() {
  
  $(function() {
    // init Isotope
    var $container = $('.isotope').isotope({
      itemSelector: '.element-item'
    });

    // store filter for each group
    var filters = {};

    $('#filters').on( 'click', '.btn', function() {
      var $this = $(this);
      // get group key
      var $buttonGroup = $this.parents('.button-group');
      var filterGroup = $buttonGroup.attr('data-filter-group');
      // set filter for group
      filters[ filterGroup ] = $this.attr('data-filter');
      // combine filters
      var filterValue = '';
      for ( var prop in filters ) {
        filterValue += filters[ prop ];
      }
      // set filter for Isotope
      $container.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });
  });


});