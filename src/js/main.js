// Username, ID of Image element

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

require('bootstrap');

import { githubProfilePicture } from './ghpfp.js';
githubProfilePicture('harryuk', '.pfp');


$("#homeClick").click((event) => {
    event.preventDefault();
    $(".nav li").removeClass("active");
    $(this).addClass("active");
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
});

$("#aboutClick").click((event) => {
    event.preventDefault();
    $(".nav li").removeClass("active");
    $(this).addClass("active");
    let removeid = "#aboutClick";
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#projectsClick").click((event) => {
    event.preventDefault();
    $(".nav li").removeClass("active");
    $(this).addClass("active");
    let removeid = "#projectsClick";
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});

$("#contactClick").click((event) => {
    event.preventDefault();
    $(".nav li").removeClass("active");
    $(this).addClass("active");
    let removeid = "#contactClick";
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});