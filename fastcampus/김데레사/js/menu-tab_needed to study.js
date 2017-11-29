// $(document).ready(function() {
//     $('.main-menu > li').hover(function() {
//       $(this).find('.sub-menu').toggleClass('menu-act');
//     });
//     $('main-menu > li').on('focusin', function() {
//       $(this).find('.sub-menu').addClass('menu-act');
//     });
//     $('sub-menu li:last-child a').on('focusout', function() {
//       $(this).parents('.sub-menu').removeClass('menu-act');
//     });

//   })
// 3행의 this는 여러개의 li중 hover가 된 li를 선택해서 this
//그런데 뒤에 find submenu가 나와서 sub.menu를 찾아서?


$(document).ready(function() {
  var menu = $('.main-menu > li');

  menu.hover(function() {
    $(this).find('.sub-menu').toggleClass('menu-act');
  });

  menu.focusin(function() {
    $(this).siblings().find('.sub-menu').removeClass('menu-act');
    $(this).find('.sub-menu').addClass('menu-act');
  });
});

$(document).ready(function()) {
    var menu = $('.main-menu > li);

      menu.hover
    }