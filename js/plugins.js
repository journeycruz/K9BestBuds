/*========== CLOSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK a[href^="#"] ==========*/
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('.navbar-toggler').addClass('collapsed');
  $('#navbarResponsive').removeClass('show');

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
});

/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
function checkScroll() {
    if ($(window).scrollTop() >= 100) {
        $('.navbar').addClass('solid');
        $('#navbarResponsive').addClass('col-sm-9');
        $('#navLogo').addClass('col-sm-3');
        $('#navLogo').css('display', 'contents');
        $('#navLogo').css('position', 'fixed left 50px');
        $('clearNav').addClass('justify-content-center');
        $('#navLogo').addClass('os-animation');
        $('#navLogo').attr('data-animation', 'fadeInUp');
    } else {
        $('.navbar').removeClass('solid');
        $('#navbarResponsive').removeClass('col-sm-9')
        $('#navLogo').removeClass('col-sm-3');
        $('#navLogo').css('display', 'none');
    }
 }

 /*========== REVIEWS CAROUSEL ==========*/
$(document).ready(function () {
    $('#reviews-carousel .carousel-wrap .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 1000,
        nav: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        navSpeed: 500,
        responsive: {
            0: {
                items: 1
            }
        }
    });
 });

 /*========== REFERENCES CAROUSEL ==========*/
$(document).ready(function () {
    $('#references-carousel .carousel-wrap .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 2000,
        nav: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        navSpeed: 50,
        responsive: {
            0: {
                items: 1
            }
        }
    });
 });
 

/*========== OUR DEVELOPERS CAROUSEL ==========*/
$(document).ready(function(){ //when document(DOM) loads completely
    $('#team-slider').owlCarousel({ //owlCarousel settings
        nav: false,
        dots: true,
        autoplay: true, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: true, //set to false to stop carousel after all slides shown
        autoplayTimeout: 8000, //time between transitions
        smartSpeed: 1200, //transition speed
        dotsSpeed: 1000, //transition speed when using dots/buttons
        responsive : { //set number of items shown per screen width
            0 : {
                items: 1 //0px width and up display 1 item
            },
            768 : {
                items: 2 //768px width and up display 2 items
            },
            992 : {
                items: 3 //992px width and up display 3 items
            }
        }
    });
 });
 
 
 /*========== KEEP OUR DEVELOPERS CARDS THE SAME HEIGHT ==========*/
 $(document).ready(function () {
 
    // Select and loop the container element of the elements you want to equalise
    $('.owl-theme').each(function () {
 
        // Cache the highest
        var highestBox = 0;
 
        // Select and loop the elements you want to equalise
        $('.card', this).each(function () {
 
            // If this box is higher than the cached highest then store it
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
 
        });
 
        // Set the height of all those children to whichever was highest
        $('.card', this).height(highestBox);
 
    });
 });
 
 
 
/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
$(document).ready(function () { //when document(DOM) loads completely.
    checkScroll();
    $(window).scroll(checkScroll);
 
    // Add solid class to mobile nav if does not exist on toggle nav
    $('.navbar-toggler').click(function () {
        if ($(window).scrollTop() <= 100) {
            $("nav.navbar").toggleClass("solid");
        }
    });
 });
 
/*========== MULTI-LEVEL / DOUBLE CLICK DROP DOWN MENU ==========*/
$(document).ready(function () {
    var DELAY = 700, clicks = 0, timer = null;

    // On click or double click
    $("nav ul li.dropdown a.dropdown-toggle")
        .on("click", function (e) {
            clicks++;
            if (clicks === 1) {
                timer = setTimeout(function () {
                    clicks = 0;
                }, DELAY);
            } else {
                clearTimeout(timer);
                window.location.href = $(this).attr('href');
                clicks = 0;
            }
        })
        .on("dblclick", function (e) {
            e.preventDefault();
        });

    //mulit-level menu
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass("show");


        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

    });
});


/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/
$(document).ready(function () { //when document(DOM) loads completely
    if ($(window).width() < 768) { //if the window is less than 768px
        $("div").attr('data-animation', 'fadeInUp'); //any div with the "data-animation" attribute should have it's value (animation style) changed to "fadeInUp"
        $("div").attr('data-delay', '0s'); //remove data delay
    }
});


/*========== WAYPOINTS ANIMATION DELAY ==========*/
$(function () { // a self calling function
    function onScrollInit(items, trigger) { // a custom made function
       items.each(function () { //for every element in items run function
          var osElement = $(this), //set osElement to the current
             osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
             osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time
 
          osElement.css({ //change css of element
             '-webkit-animation-delay': osAnimationDelay, //for safari browsers
             '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
             'animation-delay': osAnimationDelay //normal
          });
 
          var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger
 
          osTrigger.waypoint(function () { //scroll upwards and downwards
             osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
          }, {
                triggerOnce: true, //only once this animation should happen
                offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
             });
       });
    }
 
    // onScrollInitCounterUp();
    onScrollInit($('.os-animation')); //function call with only items
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});


/*========== TOP SCROLL BUTTON ==========*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top-scroll').fadeIn();
        } else {
            $('.top-scroll').fadeOut();
        }
    });
});


/*========== CONTACT FORM INPUT VALIDATION ==========*/

$(function () {

  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $('#contact-form').validator();


  // when the form is submitted
  $('#contact-form').on('submit', function (e) {

      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
          var url = "contact/contact.php"; //Location of form (apply change if moved).

          // POST values in the background the the script URL
          $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function (data)
              {
                  // data = JSON object that contact.php returns

                  // we recieve the type of the message: success x danger and apply it to the 
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;

                  // let's compose Bootstrap alert box HTML
                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                  
                  // If we have messageAlert and messageText
                  if (messageAlert && messageText) {
                      // inject the alert to .messages div in our form
                      $('#contact-form').find('.messages').html(alertBox);
                      // empty the form
                      $('#contact-form')[0].reset();
                  }
              }
          });
          return false;
      }
  })
});