<?php 
//если на ленде объявлена переменная $noGtmDelay - подключаем gtm без задержки (для аб-тестов через сервисы гугла)
if (!isset($noGtmDelay)){ 
  include $dir.'02_plugins/headGtm.php';
} else {
  include $dir.'02_plugins/headGtmNoDelay.php';
}
  
?>

<meta charset="UTF-8"/>

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<!-- === Iphone no phone number-->
<meta name="format-detection" content="telephone=no"/>

<!-- если нет переменной $customCanonical - какноникал по умолчанию -->
<? if (!isset($customCanonical)){ ?>

	<link rel="canonical" href="https://advance-club.ru<?php echo dirname($_SERVER['PHP_SELF']); ?>/" />

<? } else { ?>

	<link rel="canonical" href="<?=$customCanonical;?>" />

<? } ?>

<link rel="icon" type="image/png" href="<?=$dir;?>05_imgs/favicon.png"/>

<link rel="stylesheet" href="<?=$dir;?>02_plugins/bootstrap/bs.min.css">


<!--
        | [if lt IE 9]
        <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
        script(src='js/scriptIE.js')
        script(src='https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js')
        |     [endif]

        -->


<title><?=$title;?></title>
<meta name="description" content="<?=$description;?>"/>

<meta property="og:title" content="<?=$title;?>"/>
<meta property="og:description" content="<?=$description;?>"/>
<meta property="og:type" content="website" />    
<meta property="og:locale" content="ru_RU" />    
<meta property="og:url" content="https://advance-club.ru<?php echo dirname($_SERVER['PHP_SELF']); ?>/" />
<meta property="og:site_name" content="Центр образовательных технологий Advance" />

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?=$title;?>">
<meta name="twitter:description" content="<?=$description;?>">

<meta name="twitter:image:src" content="https://advance-club.ru/05_imgs/og-logo_vk_1920x900.png">
<meta property="og:image" content="https://advance-club.ru/05_imgs/og-logo_vk_1920x900.png">
    
    
    