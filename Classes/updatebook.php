<?php require_once('../Connections/connectdatabase.php');
require_once('../Classes/controller.php');
$softKey ='AIzaSyARmQ_Esedave-gtRRVini1EyBJwbMsBI';
$apicontrol = new controller($softKey);
if(isset($_GET["id"]))
{
	$id = $_GET["id"];
}
	$apicontrol->findbookbyid( $database_connectdatabase,$connectdatabase,$id);
		$result=$apicontrol->jasonarray; ?>
<form id="form1" name="form1" method="post" action="index?view=update">
  <table   class='table table-hover table-responsive table-bordered'>
    <tr>
      <td>ID</td>
      <td><label for="id"></label>
      </td>
    </tr>
    <tr>
      <td>Name :</td>
      <td><label for="name"></label>
      <input type="text" name="name" id="name" value="<?php  echo $result['data'][0]['name']; ?>" /></td>
    </tr>
    <tr>
      <td>ISBN :</td>
      <td><label for="isbn"></label>
      <input type="text" name="isbn" id="isbn" value="<?php  echo $result['data'][0]['isbn']; ?>" /></td>
    </tr>
    <tr>
      <td>Authors :</td>
      <td><label for="authors" ></label>
      <input type="text" name="authors" id="authors" value="<?php  echo implode(',',$result['data'][0]['authors']); ?>" /></td>
    </tr>
    <tr>
      <td>Country :</td>
      <td><label for="country"></label>
      <input type="text" name="country" id="country" value="<?php  echo $result['data'][0]['country']; ?>" /></td>
    </tr>
    <tr>
      <td>No Of Pages :</td>
      <td><label for="numberofpages"></label>
      <input type="text" name="numberofpages" id="numberofpages" value="<?php  echo $result['data'][0]['number_of_pages']; ?>" /></td>
    </tr>
    <tr>
      <td>Publisher :</td>
      <td><label for="publisher"></label>
      <input type="text" name="publisher" id="publisher" value="<?php  echo $result['data'][0]['publishers']; ?>" /></td>
    </tr>
    <tr>
      <td>Release Date :</td>
      <td><label for="release_date"></label>
      <input type="date" name="release_date" id="release_date" value="<?php  echo $result['data'][0]['release_date']; ?>" /></td>
    </tr>
    <tr>
      <td colspan="2"><input type="submit" name="ids" id="ids" value="Save Changes" class='btn btn-primary pull-right m-b-15px create-product-button' />
      <input type="hidden" name="MM_update" id="MM_update" value="MM_update" /><input type="hidden" name="id" id="id" value="<?php  echo $result['data'][0]['id']; ?>" /></td>
    </tr>
  </table><?php print(json_encode($result)); ?>
</form>