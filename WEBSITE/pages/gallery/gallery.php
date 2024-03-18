<?php
$imagesFolder = 'images/';
$images = array_diff(scandir($imagesFolder), array('..', '.')); // Get all files in the folder
echo json_encode($images); // Send image file names as JSON
?>