$(document).ready( function() {
	$(".header-burger").click(function(event) {
		$(".header-burger").toggleClass("active");
		$(".header-mob").slideToggle();
	});


	// стилизация треугольника по клику на активный раздел
	// БЫЛО:
	// 	$(".header-link").click(function() {
	// 		$(this).toggleClass("focus");
	// 	});
	// СТАЛО:
	$( ".header-link" ).each(function() { //слушаем каждый элемент с этим классом 
	      $(this).on("click", function() {  //по клику на этот
	          $(this).toggleClass("focus");//меняем его класс
	          $( ".header-link" ).not(this).removeClass('focus');//остальные убираем в любом случае
	      });
	  });

	$(".header-mob__menu-item--content").hide(); //убираем мобильное меню

	// по клику на раздел мобильного меню - открываем содержимое раздела
	$(".header-mob__menu-item--name").click(function() {
		$(this).toggleClass("focus");
		$(this).toggleClass("in").next().slideToggle();
	});

    
	$(document).on("click", function(event){
        if(!$(event.target).closest(".header").length){
            // $(".header-content_item").fadeOut();//было на js
            $(".header-content_item").addClass('collapsed');
        } 
        event.stopPropagation();
    });


	function tabs() {
	   // $(".header-content_item").hide();// - Было на js
	   $(".header-content_item").addClass('collapsed');
		$(".wrapper .tab").click(function() { //по нажатию на раздел
			
			// if ($(".header-content_item").eq($(this).index()).is(":hidden")) {  //-БЫЛО на js

			//если у контента под этим же порядковым номером есть класс .collapsed
			if ($(".header-content_item").eq($(this).index()).hasClass("collapsed")) {
	        	// $(".header-content_item").hide().eq($(this).index()).fadeIn(); //- БЫЛО на js
	        	$(".header-content_item").addClass('collapsed');//убираем все, показываем один
	        	 $(".header-content_item").eq($(this).index()).removeClass('collapsed');
	        } else {
	           // $(".header-content_item").eq($(this).index()).fadeOut(); //- БЫЛО на js
	           $(".header-content_item").eq($(this).index()).addClass('collapsed');
	        }
	        return false;
		});
	}

	tabs();
});
