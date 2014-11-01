/*
  Author: Lumberjacks
  Template: Split (Coming Soon)
  Version: 1.1
  URL: http://themeforest.net/user/Lumberjacks/
*/

(function($) {
  "use strict";

  $(document).ready(function (){
    'use strict';

    // Simple Text Rotator
    $(".rotate").textrotator({
      animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
      speed: 3000 // How many milliseconds until the next word show.
    });
    
    // Ajax mailchimp
    // Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    $('#subscribe').ajaxChimp({
      language: 'pt',
      url: 'http://facebook.us7.list-manage.com/subscribe/post?u=19d014000ad30621f7d5ca103&id=46771d8448'
    });

    // Mailchimp translation
    //
    // Defaults:
    //'submit': 'Submitting...',
    //  0: 'We have sent you a confirmation email',
    //  1: 'Please enter a value',
    //  2: 'An email address must contain a single @',
    //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
    //  4: 'The username portion of the email address is invalid (the portion before the @: )',
    //  5: 'This email address looks fake or invalid. Please enter a real email address'

    $.ajaxChimp.translations.pt = {
      'submit': 'Enviando...',
      0: '<i class="fa fa-check"></i> Obrigado, envio um email assim que lançar!',
      1: '<i class="fa fa-warning"></i> Você precisa colocar um email válido.',
      2: '<i class="fa fa-warning"></i> Esse email não é válido.',
      3: '<i class="fa fa-warning"></i> Esse email não é válido.',
      4: '<i class="fa fa-warning"></i> Esse email não é válido.',
      5: '<i class="fa fa-warning"></i> Esse email não é válido.'
    }

    // backstretch
    $("header").backstretch("img/bg.png");

    // yt controls
    /*
    $('#yt-play').click(function(event){
      event.preventDefault();
      if ($(this).hasClass("fa-play") ) {
          $('.yt-player').playYTP();
      } else {
          $('.yt-player').pauseYTP(); 
      }
      $(this).toggleClass("fa-play fa-pause");
      return false;
    });
    $('#yt-volume').click(function(event){
      event.preventDefault();
      $('.yt-player').toggleVolume();
      $(this).toggleClass("fa-volume-off fa-volume-up");
      return false;
    });
    */
  });

  // Preloader
  // Change delay and fadeOut speed (in miliseconds)
  $(window).load(function() {
    $(".lj-preloader").delay(100).fadeOut(500);
  });

})(jQuery);