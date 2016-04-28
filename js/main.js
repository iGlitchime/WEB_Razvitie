/* Created by IATS on 09.04.16. */
"use strict";

function ready() {
    var swiper = new Swiper('.adresses-swiper', {
        nextButton: '.rightArrow',
        prevButton: '.leftArrow',
        slidesPerView: 'auto',
        width: 250,
        spaceBetween: 20,
        mousewheelControl: true,
        loop: true
    });
    var swiperBrands = new Swiper('.brand-swiper', {
        nextButton: '.rightArrow',
        prevButton: '.leftArrow',
        spaceBetween: 40,
        slidesPerView: 'auto',
        centeredSlides: true,
        mousewheelControl: true,
        loop: true
    });
}

document.addEventListener('DOMContentLoaded', ready, false);