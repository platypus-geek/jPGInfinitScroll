<?php
if ($_GET['lastId'] < 40) {
	$max = 10+$_GET['lastId'];
	for ($i=$_GET['lastId']+1; $i<=$max; $i++){
	?>
		<div class="content" id="<?= $i ?>">
			<?= $i ?>
		</div>
	<?php
	}
}