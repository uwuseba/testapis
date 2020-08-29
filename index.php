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
{
	$view = $_GET["view"];
}
	if(isset($_GET["id"]))
	{
	$id = $_GET["id"];
	}?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Book List</title>
<link rel="stylesheet" type="text/css" href="asset/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="asset/ccs/jquery-ui1.css" />
<link rel="stylesheet" type="text/css" href="asset/css/style.css" />
</head>

<body>
<div class='container'>
 
            <div class='page-header'>
                <h1 id='page-title'>Book List</h1>
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
            <div id='page-content'><?php include('Classes/getallbooks2.php'); ?></div>
            <div id='page-jason'><?php switch($view){

	case "all":
		$apicontrol->finadallbook($hostname_connectdatabase, $username_connectdatabase, $password_connectdatabase, $database_connectdatabase,$connectdatabase);
		print json_encode($apicontrol->jasonarray);
	
		break;
		
	case "findbyid":
		// to handle REST Url /mobile/show/<id>/
		$apicontrol->findbookbyid( $database_connectdatabase,$connectdatabase,$id);
		print json_encode($apicontrol->jasonarray);
		break;
		case "searchall":
		// to handle REST Url /mobile/show/<id>/
		$apicontrol->searchbooks( $database_connectdatabase,$connectdatabase,$id);
		print json_encode($apicontrol->jasonarray);
		break;
		case "insert":
		// to handle REST Url /mobile/show/<id>/
		$MM_flag="MM_insert";
if (isset($_POST[$MM_flag])) {
		$apicontrol->assignvalues($_POST['id'],$_POST['isbn'],$_POST['name'],$_POST['authors'],$_POST['country'],$_POST['numberofpages'],$_POST['publisher'],$_POST['release_date']);
		
		$apicontrol->createbook($hostname_connectdatabase, $username_connectdatabase, $password_connectdatabase, $database_connectdatabase,$connectdatabase);
		print json_encode($apicontrol->jasonarray);
}
		break;
		case "update":
		// to handle REST Url /mobile/show/<id>/
		$MM_flag="MM_update";
if (isset($_POST[$MM_flag])) {
		$apicontrol->assignvalues($_POST['id'],$_POST['isbn'],$_POST['name'],$_POST['authors'],$_POST['country'],$_POST['numberofpages'],$_POST['publisher'],$_POST['release_date']);
		$apicontrol->updatebook($hostname_connectdatabase, $username_connectdatabase, $password_connectdatabase, $database_connectdatabase,$connectdatabase);
		print json_encode($apicontrol->jasonarray);
}
		break;
		case "delete":
		// to handle REST Url /mobile/show/<id>/
		$apicontrol->assignvalues($_POST['id'],"","","","","","","");
		$apicontrol->deletebook($hostname_connectdatabase, $username_connectdatabase, $password_connectdatabase, $database_connectdatabase,$connectdatabase);
		print json_encode($apicontrol->jasonarray);
		break;

	case "" :
		$apicontrol->finadallbook($hostname_connectdatabase, $username_connectdatabase, $password_connectdatabase, $database_connectdatabase,$connectdatabase);
		print json_encode($apicontrol->jasonarray);
		break;
} ?></div>
</div>
</body>
<script src="asset/js/jquery-2.1.4.min.js"></script>
	<!-- bootstrap -->
	<script src="asset/js/bootstrap.js"></script>
<script src="app/app.js"></script> 
</html>