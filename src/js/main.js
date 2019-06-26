/*
    main.js
    think of this as the main man...not the bullying type though
*/
import { githubProfilePicture } from './ghpfp.js';
import './init.js';
import './browser.js';
githubProfilePicture('harryuk', '.pfp');

$(document).ready(() => {
    console.log('jQuery declared document as ready');
    $('.navbar-nav .nav-link').click(function() {
       console.log('Navigator was run');
       $('.navbar-nav .nav-link.active').removeClass('active');
       $(this).addClass('active');
       let split = $(this).attr('href').split('-')[0]
       $('html, body').animate({
           scrollTop: $(split).offset().top
       }, 1000);
   });
});
