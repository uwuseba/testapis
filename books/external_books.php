<?php if (!isset($_SESSION)) {
  session_start();
}
require_once('Connections/connectdatabase.php');
require_once('Classes/controller.php');
$softKey ='AIzaSyARmQ_Esedave-gtRRVini1EyBJwbMsBI';
$apicontrol = new controller($softKey);
$view = "";
$id = "";
if(isset($_GET["view"]))
	$view = $_GET["view"];
	if(isset($_GET["id"]))
	$id = $_GET["id"]; ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Test Apis</title>
<link rel="stylesheet" type="text/css" href="asset/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="asset/ccs/jquery-ui1.css" />
<link rel="stylesheet" type="text/css" href="asset/css/style.css" />
</head>

<body>
<div class='container'>
 
            <div class='page-header'>
                <h1 id='page-title'>External Books</h1>
            </div>
            <div class='page-header'><table width="100%" border="0" class="borderbottom">
  <tr>
    <td width="25%"><div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button' onclick="showexternal()">
        <span class='glyphicon glyphicon-plus'></span>Extenal Book
    </div></td>
    <td width="25%">&nbsp;</td>
    <td width="25%"><div id='list-product' class='btn btn-primary pull-right m-b-15px create-product-button' onclick="showProudct()">
        <span class='glyphicon glyphicon-plus'></span>Book List
    </div></td>
    <td width="25%">&nbsp;</td>
    <td width="25%"><div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button' onclick="createBook()">
        <span class='glyphicon glyphicon-plus'></span> Create Book
    </div></td>
  </tr>
</table>

                
            </div>
 <div class='page-header'><form action="index?view=searchall" method="get"><table width="100%" border="0" class="borderbottom  table-bordered">
  <tr>
    <td width="25%"></td>
  
    <td width="25%"><input name="id" type="text" id="id" placeholder="Enter Search Term" class="form-control" /></td>
    <td width="25%"><input  type="submit" class='btn btn-primary pull-right m-b-15px create-product-button' value="Search" /></td>
    <td width="25%"></td>
  </tr>
</table><input name="view" type="hidden" value="searchall" /></form>

                
            </div>
            <!-- this is where the contents will be shown. -->
            <div id='page-content'></div>
            <div id='page-jason'><?php $curl = curl_init();
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://www.anapioficeandfire.com/api/books",
  CURLOPT_RETURNTRANSFER => true,
 CURLOPT_HTTPHEADER => array(
"Content-Type: application/json",
),
));
$response = curl_exec($curl);
$err = curl_error($curl);

if($err){
	// there was an error contacting the Paystack API
 $bizerror['checkusersapi']= "Error #:" . $err.", Please Try Again";
}

$tranx = json_decode($response);
print($response); ?></div>
 
</div>
</body><script src="asset/js/jquery-2.1.4.min.js"></script>
	<!-- bootstrap -->
	<script src="asset/js/bootstrap.js"></script>
<script src="app/app.js"></script>
</html>