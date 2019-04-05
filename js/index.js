//TO-DO:
//figure out how to display full images. Lightbox is too cheesey. Animate to remove overflow hidden, increase image size and add a box shadow? Just open in a new tab?
//actually get content ready and then apply to jobs!

$(document).ready(function() {
  
  //navbar active states
  $('.navbar li a').on('click', function() {
    $(this).parent().siblings().find('a').removeClass('active');
    $(this).addClass('active');
  });
  $('.dropdown.menu li').on('click', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
  
  //slide sections down
  $('.navbar li.logo').on('click', function() {
    $('section.design, section.illustration, section.about').animate({top: "-4000px"}, {duration:500}, "easein", {display: "none"});
    $('section.intro').removeClass('hide').animate({top: "60px"}, {duration:500}, "easein");
    
    if($('.dropdown.menu').hasClass('hide')) {
      console.log('nothin!');
    } else {
      $('.dropdown.menu').toggleClass('hide');
    }
  });
  
  //hide/slide sections up/down
  $('.navbar li.design, .dropdown.menu li.design').on('click', function() {

      $('section.intro, section.illustration, section.about').animate({top: "-4000px"}, {duration:500}, "easein");
      $('section.design').removeClass('hide').animate({top: "95px"}, {duration:500}, "easein");
    
    if($('.dropdown.menu').hasClass('hide')) {
      console.log('nothin!');
    } else {
      $('.dropdown.menu').toggleClass('hide');
    }
  });
  
  $('.navbar li.illustration, .dropdown.menu li.illustration').on('click', function() {
    
    $('section.intro, section.design, section.about').animate({top: "-4000px"}, {duration:500}, "easein", {display: "none"});
    $('section.illustration').removeClass('hide').animate({top: "95px"}, {duration:500}, "easein");
    
    if($('.dropdown.menu').hasClass('hide')) {
      console.log('nothin!');
    } else {
      $('.dropdown.menu').toggleClass('hide');
    }
  });
  
  $('.navbar li.hireme, .dropdown.menu li.hireme').on('click', function() {
    $('section.intro, section.illustration, section.design').animate({top: "-4000px"}, {duration:500}, "easein", {display: "none"});
    $('section.about').removeClass('hide').animate({top: "95px"}, {duration:500}, "easein");
    
    if($('.dropdown.menu').hasClass('hide')) {
      console.log('nothin!');
    } else {
      $('.dropdown.menu').toggleClass('hide');
    }
  });
     
  //menu dropdown
  $('.navbar .dropdown').on('click', function() {
    $('.dropdown.menu').toggleClass('hide').css('top', '63px').css('z-index', '2');
  });
  
  //spin menu + to show x when open
  $('.dropdown').on('click', function() {
     $('.dropdown.entypo-plus-circled').toggleClass('active');
  });
});