'use strict';

(function(){
    function includeHtml() {
        const includeTarget = document.querySelectorAll('.includeJs');
        includeTarget.forEach(function(el, idx) {
            const targetFile = el.dataset.includeFile;
            if(targetFile){
                let xhttp = new XMLHttpRequest();
            
                xhttp.onreadystatechange = function() {
                    if (this.readyState === XMLHttpRequest.DONE) {
                        this.status === 200 ? (el.innerHTML = this.responseText) : null
                        this.status === 404 ? (el.innerHTML = 'include not found.') : null
                    }
                }
                xhttp.open('GET', targetFile, true);
                xhttp.send();
                return;
            }
        });
    };

    includeHtml();
})();

/*
document.addEventListener("DOMContentLoaded", function () {

    const HEADER = document.querySelector('.header');
    //const GNB = document.querySelector('.gnb');
    const CONTAINER = document.querySelector('.container');
    CONTAINER.style.paddingTop = `${HEADER.offsetHeight}px`;

    HEADER.addEventListener('mouseover', gnbOpen);
    HEADER.addEventListener('mouseleave', gnbClose);
    
});
*/
/*
function gnbOpen (e) {
    if (e.target.classList.contains('gnb__link')) {
        let depth02 = document.querySelectorAll('.gnb__depth02');
        depth02.forEach(function (ele) {
            ele.style.display = 'block';
        });
    }
}

function gnbClose (e) {
    let depth02 = document.querySelectorAll('.gnb__depth02');
    depth02.forEach(function (ele) {
        ele.style.display = 'none';
    });
}
*/


$(document).ready(function () {

    $('.gnb__item').on('mouseenter', function () {
        $('.header').addClass('active');
    });

    $('.header').on('mouseleave', function () {
        $('.header').removeClass('active');
    });

    $('.hamburger').on('click', function () {
        $('.header').addClass('active');
    });

    $('.gnb__item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});