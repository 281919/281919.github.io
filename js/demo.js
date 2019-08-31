$(document).ready(function() {
  var sub = $('#sub');
  
  var activeRow;
  var activeMenu;
  var activeRowClick;
  var activeMenuClick;
  var timer;
  var flage = false;

  var mouseInSub = false;

  sub.on('mouseenter' , function(e) {
    mouseInSub = true;
  }).on('mouseleave' , function(e) {
    mouseInSub = false;
  })


 

  $('#test')
    .on('mouseenter', function(e) {
      sub.removeClass("none");
      
      
    })
    .on('click' , function(e) {
      sub.removeClass("none");
    })
    .on('mouseleave', function(e) {
      sub.addClass('none')

      if (activeRow) {
        activeRow.removeClass('active');
        activeRow = null;
      }

      if (activeMenu) {
        activeMenu.addClass("none");
        activeMenu = null;
      }
  


    })
    .on('mousemove' , 'li' , function(e){
      if (!activeRowClick) {
        activeRowClick = $(e.target).addClass('active');
        activeMenuClick = $("#" + activeRowClick.data('id'));
        activeMenuClick.removeClass('none');
        return;
      }
      activeRowClick.removeClass('active')
      activeMenuClick.addClass('none');

      activeRowClick = $(e.target).addClass('active');
      activeMenuClick = $("#" + activeRowClick.data('id'));
      activeMenuClick.removeClass('none');
    })
    .on('mouseenter' , 'li' , function(e) {
      if (!activeRow) {
        activeRow = $(e.target).addClass('active');
        activeMenu = $("#" + activeRow.data('id'));
        activeMenu.removeClass('none');
        return;
      }
      
      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(function() {
        if(mouseInSub){
          return;
        }
        activeRow.removeClass('active')
        activeMenu.addClass('none');
  
        activeRow = $(e.target).addClass('active');
        activeMenu = $("#" + activeRow.data('id'));
        activeMenu.removeClass('none');
        timer = null;
      }, 150);


    })

})