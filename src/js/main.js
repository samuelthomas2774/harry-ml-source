// Username, ID of Image element
let $ = require("jquery");
import 'bootstrap';
import { githubProfilePicture } from './ghpfp.js';
githubProfilePicture('harryuk', '.pfp');

let removeid = 0;

$("#homeClick").click((event) => {
    event.preventDefault();
    $(removeid).removeClass('active');
    $('#homeClick').addClass('active');
    let removeid = "#homeClick";
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
});

$("#aboutClick").click((event) => {
    event.preventDefault();
    $(removeid).removeClass('active');
    $('#aboutClick').addClass('active');
    let removeid = "#aboutClick";
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#projectsClick").click((event) => {
    event.preventDefault();
    $(removeid).removeClass('active');
    $('#projectsClick').addClass('active');
    let removeid = "#projectsClick";
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});

$("#contactClick").click((event) => {
    event.preventDefault();
    $(removeid).removeClass('active');
    $('#contactClick').addClass('active');
    let removeid = "#contactClick";
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});