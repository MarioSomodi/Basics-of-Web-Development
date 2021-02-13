<?php
header('Content-Type: application/json');
//dodvaćanje json datoteke sa vijestima i pretvorba string -> polje
$sJsonFile = file_get_contents('./vijesti.json', FILE_USE_INCLUDE_PATH);
$oJson = json_decode($sJsonFile);
$oJsonReversed = array_reverse($oJson);
echo json_encode($oJsonReversed);
?>
