<!DOCTYPE html>
<html>
<head>
	<title></title>

	
</head>
<body>
<?php 
/** /** Mazzuma Mobile money PHP API integration 2018 by Ket-c
myriad digital ITBS
https://www.myriaddigitalsolutions.com
email: kwakuamoh@myriaddigitalsolutions.com
*/
$url = 'https://client.teamcyst.com/api_call.php'; 
$additional_headers = array( 
	'Content-Type: application/json' 

	); 
$data0 = array(
		 	'price'=> 50,  //amount to be received
			'network' => "mtn", // Eg. mtn or tigo 
			'recipient_number'=> "0549847278", //Eg. 0271234567
			'sender'=> "0553146861", //Eg. 0541234567
			'option'=> "rmtm", //(Request Mtn To Tigo) Use the initials network to fit your work
			'apikey'=> "516d5602554909037626a58a99fc761285c0c2b4"
		);

	$data =json_encode($data0);
	$ch = curl_init($url); 
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST"); 
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data); // $data is the request payload
 	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
 	curl_setopt($ch, CURLOPT_HTTPHEADER, $additional_headers); 
 	$server_output = curl_exec ($ch);

 ?>



</body>
<!-- Mazzuma Mobile money PHP API integration 2018 by Ket-c.
From Myriad Digital ITBS
https://www.myriaddigitalsolutions.com
email: kwakuamoh@myriaddigitalsolutions.com
-->
</html>
