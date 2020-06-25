$(function() {
  var title = $('h1').text();

  $("img").attr('alt', function() {

    if($(this).attr('alt') == '' || !$(this)[0].hasAttribute("alt")){ 
    //если атрибут alt пуст или его вообще нету

      if ($(this).hasClass('head-logo-img')){ //если есть класс логотипа
        
        return title + ' - лого'; //меняем alt логотипа

      } else if ($( this ).hasClass('photo')){ //если есть класс фотографии
        
        return title + ' - фото'; //меняем alt фотографии

      } else {
        
        return title + ' - изображение';  //меняем alt всех картинок

      }  //if/else
    }//if not null
  });
  // alert('ff');
});