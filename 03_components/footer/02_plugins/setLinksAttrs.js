$(function() {
  //внешние ссылки
  var externalLinks = $('a[href^="http://"], a[href^="https://"]').not('a[href*="'+location.hostname+'"]');

  $(externalLinks).each(function() {
      $(this).attr('target','_blank');//открываем в другом окне
      $(this).attr('rel','nofollow');//не индексируем роботами
  });
  // внутрениие ссылки
  var internalLinks = $('a[href*="'+location.hostname+'"]');

  $(internalLinks).each(function() {

      $(this).attr('target','_self');//открываем в другом окне
    
  });
  
});