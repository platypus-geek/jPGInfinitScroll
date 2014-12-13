<html>
<head>
<title>Infinite Scroll</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script type="text/javascript" src="jPGInfinitScroll.js"></script>

<style>
.container{
height: 200px;
border: 2px solid red;
overflow: scroll;
}
.content{
height: 20px;
width: 20px;
border: 1px solid black;
margin: 10px;
}
/* Juste pour l'affichage, aucun intérêt ici ;) */
</style>
</head>
 
<body>

<div class="container" data-max-item="30">
	Les commentaires sur l'article : 
 
	<?php
	for ($i=0; $i<=10; $i++) {
	?>
	<div class="content" id="<?= $i ?>">
		<?= $i ?>
	</div>
	<?php
	}
	?>
 
</div>
<script type="text/javascript">
$('.container').jPGInfinitScroll();   
</script>
</body>
 
</html>