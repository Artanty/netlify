<link rel="stylesheet" href="<?=$dir;?>06_css/main.css">
<link rel="stylesheet" href="<?=$dir;?>06_css/fonts.css">
<link rel="stylesheet" href="<?=$dir;?>03_components/footer/06_css/new/style.css">
 
<!-- footer TAG with nav -->
  <?php if (!isset($noFooter)){
  include $dir."03_components/footer/04_sections/footerNav.php";
	}
  ?>
<!-- Footer TAG with nav END-->

<!-- Scroll top-->
  <?php if (!isset($noScrollTop)){
  include $dir."03_components/footer/04_sections/scrollTop.php";
	}
  ?>
<!-- Scroll top END-->


  <?php if (!isset($noJquery)){ ?>
    <script src='<?=$dir;?>02_plugins/jquery.min.js'></script>
  <? } ?>
<script src='<?=$dir;?>02_plugins/bootstrap/bs.min.js'></script>
<!-- HEADER -->
<script src="<?=$dir;?>03_components/header/js/script.js"></script>
 

<script src="<?=$dir;?>03_components/footer/02_plugins/setImagesAltFromH1.js"></script>
<script src="<?=$dir;?>03_components/footer/02_plugins/setLinksAttrs.js"></script>
  <?php if (!isset($noScrollTop)){ ?>
<script src="<?=$dir;?>03_components/footer/02_plugins/scrollTop.js"></script>
  <?php } ?>