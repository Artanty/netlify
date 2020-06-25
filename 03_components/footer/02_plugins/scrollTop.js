// ONDELAY MINI PLUGIN
/*
  Устанавливает задержку на ввыполнение событий во избежания большого кол-ва повторов на одно действие, например для таких событий,
  как resize, scroll и т.п., т.е. функция отрабатывает после завершения события, а не на протяжении выполнения самого события.
  данный мини плагин служит оптимизатором ресурсов системы.
*/
(function() {
  if(window.$) {
    $.fn.onDelay = function(opt) {

      var def = {
        event: '',
        handler: function() {
        },
        delay: 100
      },

      settings = $.extend(def, opt),
      cashObject = this;

      this.each(function(i, elem) {
        var timer;

        $(elem).on(settings.event, function(){
          clearTimeout(timer);
          timer = setTimeout(settings.handler, settings.delay);
        })
      });

      return this;
    }
  }
})();



// BODY VARIABLE
if(window.$) {
  var $body = $('html, body');

  /*
    Функция вызова анимированного якоря.
    Первый параметр: элемент клика;
    Второй параметр: таймин. При отсутствии тайминга скорость прокрутки равна
    расстоянию до элемента скроллинга
  */
  //=== Anchor Scroll
  // var anchorScroll = function(elem, d) {
  //   $(elem).click(function () {
  //     var $delay = d,
  //     $elementClick = $(this).attr("href"),
  //     $destination = $($elementClick).offset().top;

  //     if($delay == undefined) {
  //       $delay = $destination;
  //     }

  //     $body.animate( { scrollTop: $destination }, $delay);

  //     return false;
  //   });
  // }

  


  
  //=== TOP SCROLL
  /*
    Функция вызова кнопки scrollTop.
    Первый параметр: элемент клика;
    Второй параметр: тайминг.
  */
  var topScroll = function(elem, h) {
    var $scrollBtn = $(elem),
        $scrollTopHeight;

    if(h == undefined || h == 0) {
      $scrollTopHeight = 300;
    }else if($scrollTopHeight = document.querySelector(h)) {
      $scrollTopHeight = $scrollTopHeight.offsetHeight;
    }

    $scrollBtn.on('click', function() {
        $body.animate({scrollTop: 0}, 700)
    });

    function topScrollShow() {
      if($(window).scrollTop() >= $scrollTopHeight) {
        $scrollBtn.css({
            "transform": "translate(-5px)",
            "opacity": ".8"
        });
      }
      else {
        $scrollBtn.css({
            "transform": "translate(30px)",
            "opacity": "0"
        });
      }
    }

    topScrollShow()

    $(window).onDelay({
      event: 'scroll',
      handler: function() {
        topScrollShow();
      }
    })
  }
}
  

  topScroll('.top_btn', '#reviews');//инит функции



  // дальше зачатки универсальной функции на jquery: 

// $(document).ready(function(){
// 	$("#menu").on("click","a", function (event) {
// 		//отменяем стандартную обработку нажатия по ссылке
// 		event.preventDefault();

// 		//забираем идентификатор бока с атрибута href
// 		var id  = $(this).attr('href'),

// 		//узнаем высоту от начала страницы до блока на который ссылается якорь
// 			top = $(id).offset().top;
		
// 		//анимируем переход на расстояние - top за 1500 мс
// 		$('body,html').animate({scrollTop: top}, 1500);
// 	});
// });