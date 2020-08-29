<?php if (!isset($_SESSION)) {
  session_start();
}
require_once('Connections/connectdatabase.php');
require_once('Classes/controller.php');
$softKey ='AIzaSyARmQ_Esedave-gtRRVini1EyBJwbMsBI';
$apicontrol = new controller($softKey); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Test Apis</title>
<link rel="stylesheet" type="text/css" href="asset/style.css" />
</head>

<body>
<form id="form1" name="form1" method="post" action="">
  <table class="maintable" border="0">
    <tr>
      <td><table width="100%" border="1">
        <tr>
          <td><a href="index">Home</a></td>
          <td><a href="external_books">Extenal Books</a></td>
          <td><a href="create_books">Creat Books</a></td>
          <td><a href="view_books">View Books</a></td>
      <td><a href="search_books">Search Books</a></td>   
        
        </tr>
      </table></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
    </tr>
  </table>
</form>
</body>
</html>