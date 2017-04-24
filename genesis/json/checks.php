<?php
echo "<h1>select a specific JSON record with PHP</h1>";
$json = file_get_contents('first2.json');
echo '<pre>';
var_dump($json);
echo '</pre>';
echo "<br>";
$oJson = json_decode($json) ;

if (in_array("checks", $oJson))
  {
  echo "Match found";
  }
else
  {
  echo "Match not found";
  }

$json = json_encode($oJson) ;
echo '<pre>';
var_dump($oJson);
echo '</pre>';
?>