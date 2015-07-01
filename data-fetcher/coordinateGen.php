<?php
$postData1 = <<<DATA
{
  "sigid": 4608,
  "restrict": [
    {
      "type": "between",
      "field": "tcutimestamp",
      "value": [
        1435136962711,
        1435749550000
      ]
    },
    {
      "field": "carid",
      "value": 301
    },
    {
      "field": "status",
      "value": 1
    }
  ],
  "limit": 60
}
DATA;


$ch = curl_init('https://embedded.totalsoft.ro/mako-ws/public/query');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($postData1))
);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);


$result = curl_exec($ch);
//$response = json_decode($result, true);

$outputResource = fopen(__DIR__."/../data/coordinates_fetched.json", "w+");
fwrite($outputResource, $result);
fclose($outputResource);
