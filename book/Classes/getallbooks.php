<?php require_once('../Connections/connectdatabase.php');
require_once('../Classes/controller.php');
$softKey ='AIzaSyARmQ_Esedave-gtRRVini1EyBJwbMsBI';
$apicontrol = new controller($softKey);
$id='4';
if(isset($_GET["id"]))
{
	$id = $_GET["id"];
}
	$apicontrol->finadallbook($hostname_connectdatabase, $username_connectdatabase, $password_connectdatabase, $database_connectdatabase,$connectdatabase);
		$result=$apicontrol->jasonarray; ?>
<table width="100%" border="0" class="table table-hover table-responsive table-bordered"><tr>
    <td>ID</td>
    <td>Name</td>
    <td>ISBN</td>
    <td>Authors</td>
    <td>Country</td>
    <td>No Of Pages</td>
    <td>Publisher</td>
    <td>Release Date</td>
    <td>Edit</td>
    <td>Delete</td>
  </tr><?php foreach($result['data'] as $alert){ ?>

  <tr>
    
    <td><?php  echo $alert['id']; ?></td>
    <td><?php  echo $alert['name']; ?></td>
    <td><?php  echo $alert['isbn']; ?></td>
    <td><?php  echo implode(",",$alert['authors']); ?></td>
    <td><?php  echo $alert['country']; ?></td>
    <td><?php  echo $alert['number_of_pages']; ?></td>
    <td><?php  echo $alert['publishers']; ?></td>
    <td><?php  echo $alert['release_date']; ?></td>
    <td><div id='edit-book' class='btn btn-primary pull-right m-b-15px create-product-button' onclick="updateBook(<?php  echo $alert['id']; ?>)">
        <span class='glyphicon glyphicon-plus'></span> Edit
    </div></td>
    <td><div id='edit-book' class='btn btn-primary pull-right m-b-15px create-product-button' onclick="deleteBook(<?php  echo $alert['id']; ?>)">
        <span class='glyphicon glyphicon-plus'></span> Delete
    </div></td>
  </tr>
  <?php } ?>
</table>
