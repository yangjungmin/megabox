const swiper = new Swiper(".slider", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* movie */
const swiper2 = new Swiper(".swiper-container2", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    // 뷰포터의 넓이 >= 0px
    0: {
      slidesPerView: 1.4,
      spaceBetween: 24,
    },
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    // when window width is >= 960px
    960: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

//movie tab menu
let movBtn = $(".movie_title ul li");
let movCont = $(".movie_chart>div");

movCont.hide().eq(0).show(); //전부다 안보이게 하고 첫번째(0번)만 보이게 해라
movBtn.click(function (e) {
  e.preventDefault();
  let target = $(this); //클릭한 li
  let index = target.index(); //클릭한 li의 index번호 추출
  console.log(index);
  movCont.hide().eq(index).show(); //모두지우고 해당 index번호의 슬라이드 보이기
  movBtn.removeClass("active"); //모든 li에 active지우기
  target.addClass("active"); //클릭한 li에 active추가
});

//공지사항 notice
let tabmenu = $('.notice');

tabmenu.find('ul>li>ul').hide();
tabmenu.find('ul>li.active>ul').show();

tabmenu.find('ul>li>a').click(function (e) {
  e.preventDefault();
  let target = $(this);
  //.next()--> 나의 바로아래동생
  //.nextAll()--> 나의 아래 동생들
  tabmenu.find('ul>li>a').next().hide();
  target.next().show();

  tabmenu.find('ul>li').removeClass('active');
  //.parent() 상위요소(부모)
  //.parents() 상위요소들(나 위에 있는 모든 상위요소를 부른다)
  target.parent().addClass('active');
})