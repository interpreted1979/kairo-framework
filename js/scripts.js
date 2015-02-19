$( function() {
   // MAIN MENU
   var mainMenuTop = $('#top .sf-menu');
   var mainMenu = $('#navigation .sf-menu');
   var mainMenuVert = $('#vertical .sf-vertical');
   // clone the menu
   mainMenuTop.clone().removeClass().addClass('rwd-menu').prependTo('.navbar-container nav');
   mainMenuTop.clone().removeClass().addClass('rwd-menu').prependTo('.navbar-container-vertical nav');
   // initialize superfish menu
   mainMenu.superfish();
   mainMenuTop.superfish();
   mainMenuVert.superfish();
   // Toggle responsive menu
   $('#rwd-trigger').on('click', function( e ){
      e.preventDefault();
      $('#navigation .rwd-menu').slideToggle();
   });
   $('#rwd-trigger-top').on('click', function( e ){
      e.preventDefault();
      $('#top .rwd-menu').slideToggle();
   });

   $('#rwd-trigger-vert').on('click', function( e ){
      e.preventDefault();
      $('#vertical .rwd-menu').slideToggle();
   });

   // TABS

   $('.tabs-links a').on('click', function( e ) {
      e.preventDefault();
      // get target tab
      var newTab = $( this).attr("href")
      // show targeted tab content while hiding the rest
      $(newTab).show().siblings().hide();
      // Add the active class to the parent list item while removingit from therest
      $(this).parent('li').addClass('active').siblings().removeClass('active');

   });

   // ACCORDION

   $(".accordion-element-title").on("click", function(e){
      e.preventDefault();
      // get the target accordion element
      var targetAccordion = $(this).attr("href");
      // collapse all accordion elements
      $(".accordion-element-title").removeClass("active");
      $(".accordion-element-content").hide();
      // show the targeted element only
      $(this).addClass("active");
      $( targetAccordion ).show();
   });

   // RIBBON

            var contactForm = {
            ribbon : $('.ribbon a'),
            container: $('#contactus'),
            form: $('#contactus form'),

            init: function() {
               this.ribbon.on('click', this.show);
            },
            show: function() {
               contactForm.close.call(contactForm.form);
               contactForm.container.fadeToggle();
            },

            close: function() {
               var $this = $(this);
               $('<span class=close>X</span>')
               .prependTo(this)
               .on('click', function() {
                  contactForm.container.fadeToggle();
               })
            }
         };

         contactForm.init();

        // prettyPhoto

      $("a[rel^='prettyPhoto']").prettyPhoto();
   
});

   $(window).load(function(){
   // masonry 

       var container = document.querySelector('#container');
   var msnry = new Masonry( container, {
     // options
     
     itemSelector: '.item'
   });
});