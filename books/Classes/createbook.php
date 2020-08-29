<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<form id="form1" name="form1" method="post" action="index?view=insert">
  <table   class='table table-hover table-responsive table-bordered'>
    <tr>
      <td>ID</td>
      <td><label for="id"></label>
      <input type="text" name="id" id="id" /></td>
    </tr>
    <tr>
      <td>Name :</td>
      <td><label for="name"></label>
      <input type="text" name="name" id="name" /></td>
    </tr>
    <tr>
      <td>ISBN :</td>
      <td><label for="isbn"></label>
      <input type="text" name="isbn" id="isbn" /></td>
    </tr>
    <tr>
      <td>Authors :</td>
      <td><label for="authors"></label>
      <input type="text" name="authors" id="authors" /></td>
    </tr>
    <tr>
      <td>Country :</td>
      <td><label for="country"></label>
      <input type="text" name="country" id="country" /></td>
    </tr>
    <tr>
      <td>No Of Pages :</td>
      <td><label for="numberofpages"></label>
      <input type="text" name="numberofpages" id="numberofpages" /></td>
    </tr>
    <tr>
      <td>Publisher :</td>
      <td><label for="publisher"></label>
      <input type="text" name="publisher" id="publisher" /></td>
    </tr>
    <tr>
      <td>Release Date :</td>
      <td><label for="release_date"></label>
      <input type="date" name="release_date" id="release_date" /></td>
    </tr>
    <tr>
      <td colspan="2"><input type="submit" name="ids" id="ids" value="Save Data" class='btn btn-primary pull-right m-b-15px create-product-button' />
      <input type="hidden" name="MM_insert" id="MM_insert" value="MM_insert" /></td>
    </tr>
  </table>
</form>
</body>
</html>