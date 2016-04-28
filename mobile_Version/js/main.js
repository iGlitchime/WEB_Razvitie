/**
 * Created by IATS on 10.04.16.
 */
function ready() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.rightArrow',
        prevButton: '.leftArrow',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });


}

document.addEventListener('DOMContentLoaded', ready, false);