/*
    blur.js
    sets backdrop blur on most elements when executed
*/
function startblur() {
    let jumbotrons = document.querySelectorAll('.jumbotron');
    let navbar = document.querySelector('.navbar');

    navbar.classList.add('blurr');

    for (var i = 0; i < jumbotrons.length; i++){
        jumbotrons[i].classList.add("blurr");
    }
}

module.exports = {
    startblur: startblur
}
