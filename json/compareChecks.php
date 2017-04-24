<?php

$places = file_get_contents('placeList.json');
$place_arr = json_decode($places, true);
echo "<div style='float:left;width: 40%;'>";
echo "<h2>places</h2>";
echo '<pre>' . print_r($place_arr, true) . '</pre>';
echo "</div>";

$checks = file_get_contents('first2.json');
$check_arr = json_decode($checks, true);
$current_user = array_chunk($check_arr, 1);
echo "<div style='float:left;width: 40%; clear:both;'>";
echo "<h2>checks</h2>";
echo '<pre>' . print_r($current_user, true) . '</pre>';
echo "</div>";

echo '<pre>' . print_r(array_keys($check_arr[0][0])) . '</pre>';
?>
 
