const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus' , function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur' , function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기
        //badgeEl.style.display = 'none';
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        });
        //버튼 보이기
        gsap.to('#to-top',.2,{
            x:0
        });
    }
    else {
        //배지 보여주기
        //badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
        });
        //버튼 숨기기;
        gsap.to('#to-top',.2,{
            x:100
        });
    }
},300));

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
    gsap.to(window, .7 , {
        scrollTo: 0
    });
});



// ._throttle(함수, 시간) -> 사용할 함수, 얼마동안의 시간

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl,1,{
        delay:(index +1) *0.7,
        opacity :1
    });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    slidesPerView:1,
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView:3,
    spaceBetween : 10,
    centeredSlides: true,
    loop : true,
    autoplay: {
        delay: 5000
    },
    pagination : {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable : true
    },
    navigation:{
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
      nextEl: '.awards .swiper-next' // 다음 버튼 선택자
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion 
    if(isHidePromotion){
        //hide 처리
        promotionEl.classList.add('hide');
    }else {
        //보임 처리
        promotionEl.classList.remove('hide');
    }
});

// gsap.to(요소, 시간 , 옵션);

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay , size) {
    gsap.to(selector , random(1.5, 2.5) , {
        y : size,
        repeat: -1,
        yoyo : true,
        ease : Power1.easeInOut,
        delay : random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement : spyEl, //보여짐의 여부를 감시할 요소
            triggerHook: .8
        })
        .setClassToggle(spyEl , 'show')
        .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('this-year');
thisYear.textContent = new Date().getFullYear();