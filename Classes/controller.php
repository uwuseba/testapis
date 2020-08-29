<?php class controller {
	private $softclasskeys;
	private $id="";
	private $isbn="";
	private $name="";
	private $authors="";
	private $country="";
	private $numberofpages="";
	private $publisher="";
	private $release_date="";
	public $jasonarray=array();
	
		public function __construct($softclasskeys = '') {
		 	if ($softclasskeys){
				$this->softclasskeys;
			} else {
			 	throw new Exception(__CLASS__ . ' error : You must set your key before using this class!');
			}
		}
		public function assignvalues($id,$isbn,$name,$authors,$country,$numberofpages,$publisher,$release_date)
{
	$this->id=$id;
	$this->isbn=$isbn;
	$this->name=$name;
	$this->authors=$authors;
	$this->country=$country;
	$this->numberofpages=$numberofpages;
	$this->publisher=$publisher;
	$this->release_date=$release_date;
}
		public function createbook($hostname_feodbanz, $username_feodbanz, $password_feodbanz, $database_feodbanz,$feodbanz)
{$check=0;
	   $insertSQL = sprintf("INSERT INTO table_books ( `id`,`name`,`isbn`,
`authors`,`country`,`number_of_pages`,`publishers`,`release_date`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
                       GetSQLValueString($this->id, "text",$feodbanz),
                       GetSQLValueString($this->name, "text",$feodbanz),
                       GetSQLValueString($this->isbn, "text",$feodbanz),
                       GetSQLValueString($this->authors, "text",$feodbanz),
                       GetSQLValueString($this->country, "text",$feodbanz),
                       GetSQLValueString($this->numberofpages, "text",$feodbanz),
                       GetSQLValueString($this->publisher, "text",$feodbanz),
                       GetSQLValueString($this->release_date, "text",$feodbanz));
$mysqli = new mysqli($hostname_feodbanz, $username_feodbanz, $password_feodbanz, $database_feodbanz);					   
						$sql=$insertSQL.';';
 if ($mysqli->connect_errno) {

	$check=0;
}
if ($mysqli->multi_query($sql)) {
	$this->jasonarray=array();
	$this->jasonarray['status_code']="200";
	$this->jasonarray['status']="success";
	
	$bookvalue['id']=$this->id;
	$bookvalue['name']=$this->name;
	$bookvalue['isbn']=$this->isbn;
	$authosino=explode(',',$this->authors);
	$authoval=array();
	$count=0;
	foreach($authosino as $alert)
	{
		$authoval[$count]=$alert;
		$count++;
	}
	$bookvalue['authors']=$authoval;
	$bookvalue['number_of_pages']=$this->numberofpages;
	$bookvalue['publishers']=$this->publisher;
	$bookvalue['country']=$this->country;
	$bookvalue['release_date']=$this->release_date;
	$book[]=$bookvalue;
	$this->jasonarray['data']=$book;
	
  
}
else
{
	$this->jasonarray=array();
	$this->jasonarray['status_code']="200";
	$this->jasonarray['status']="failed";
	$this->jasonarray['error-message']=$mysqli->error;
	$this->jasonarray['data']=array();

}
}
public function updatebook($hostname_feodbanz, $username_feodbanz, $password_feodbanz, $database_feodbanz,$feodbanz)
{$check=0;
	   $insertSQL = sprintf("update table_books set name=%s,isbn=%s,
authors=%s,country=%s,number_of_pages=%s,publishers=%s,release_date=%s where id=%s",
                       GetSQLValueString($this->name, "text",$feodbanz),
                       GetSQLValueString($this->isbn, "text",$feodbanz),
                       GetSQLValueString($this->authors, "text",$feodbanz),
                       GetSQLValueString($this->country, "text",$feodbanz),
                       GetSQLValueString($this->numberofpages, "text",$feodbanz),
                       GetSQLValueString($this->publisher, "text",$feodbanz),
                       GetSQLValueString($this->release_date, "text",$feodbanz),
                       GetSQLValueString($this->id, "text",$feodbanz));
$mysqli = new mysqli($hostname_feodbanz, $username_feodbanz, $password_feodbanz, $database_feodbanz);					   
						$sql=$insertSQL.';';
 if ($mysqli->connect_errno) {

	$check=0;
}
if ($mysqli->multi_query($sql)) {
$this->jasonarray=array();
	$this->jasonarray['status_code']="200";
	$this->jasonarray['status']="success";
	$this->jasonarray['message']="The  Book ".$this->name." was updated successfully";
	
	$bookvalue['id']=$this->id;
	$bookvalue['name']=$this->name;
	$bookvalue['isbn']=$this->isbn;
	$authosino=explode(',',$this->authors);
	$authoval=array();
	$count=0;
	foreach($authosino as $alert)
	{
		$authoval[$count]=$alert;
		$count++;
	}
	$bookvalue['authors']=$authoval;
	$bookvalue['number_of_pages']=$this->numberofpages;
	$bookvalue['publishers']=$this->publisher;
	$bookvalue['country']=$this->country;
	$bookvalue['release_date']=$this->release_date;
	$book[]=$bookvalue;
	$this->jasonarray['data']=$book;
	
  
}
else
{
	$this->jasonarray=array();
	$this->jasonarray['status_code']="200";
	$this->jasonarray['status']="failed";
	$this->jasonarray['message']="The  Book ".$this->name." was not updated";
	$this->jasonarray['data']=array();

} 
}
public function deletebook($hostname_feodbanz, $username_feodbanz, $password_feodbanz, $database_feodbanz,$feodbanz)
{$check=0;
	   $insertSQL = sprintf("delete from table_books where id=%s",GetSQLValueString($this->id, "text",$feodbanz));
$mysqli = new mysqli($hostname_feodbanz, $username_feodbanz, $password_feodbanz, $database_feodbanz);					   
						$sql=$insertSQL.';';
 if ($mysqli->connect_errno) {

	$check=0;
}
if ($mysqli->multi_query($sql)) {$this->jasonarray=array();
	$this->jasonarray['status_code']="200";
	$this->jasonarray['status']="success";
	$this->jasonarray['message']="The  Book ".$this->name." was deleted successfully";
	$this->jasonarray['data']=array();
  
}
else
{
	$this->jasonarray=array();
	$this->jasonarray['status_code']="200";
	$this->jasonarray['status']="failed";
	$this->jasonarray['message']="The  Book ".$this->name." was not deleted";
	$this->jasonarray['data']=array();

}  
}
public function finadallbook($hostname_feodbanz, $username_feodbanz, $password_feodbanz, $database_feodbanz,$feodbanz)
{
	$book=array();	
		 mysqli_select_db($feodbanz,$database_feodbanz);
$query_fetchuserdata ="SELECT * from  table_books";
$fetchuserdata = mysqli_query($feodbanz,$query_fetchuserdata) or die(mysqli_error($feodbanz));
$row_fetchuserdata = mysqli_fetch_assoc($fetchuserdata);
$totalRows_fetchuserdata = mysqli_num_rows($fetchuserdata);
if($totalRows_fetchuserdata>0)
{
	$this->jasonarray=array();
	$this->jasonarray['status_code']="200";
	$this->jasonarray['status']="success";
do
{
	$bookvalue=array();
	$bookvalue['id']=$row_fetchuserdata['id'];
	$bookvalue['name']=$row_fetchuserdata['name'];
	$bookvalue['isbn']=$row_fetchuserdata['isbn'];
	$authosino=explode(',',$row_fetchuserdata['authors']);
	$authoval=array();
	$count=0;
	foreach($authosino as $alert)
	{
		$authoval[$count]=$alert;
		$count++;
	}
	$bookvalue['authors']=$authoval;
	$bookvalue['number_of_pages']=$row_fetchuserdata['number_of_pages'];
	$bookvalue['publishers']=$row_fetchuserdata['publishers'];
	$bookvalue['country']=$row_fetchuserdata['country'];
	$bookvalue['release_date']=$row_fetchuserdata['release_date'];
	$book[]=$bookvalue;
	
}while($row_fetchuserdata = mysqli_fetch_assoc($fetchuserdata));
$this->jasonarray['data']=$book;
}
else
{
	$this->jasonarray=array();
	$this->jasonarray['status_code']="200";
	$this->jasonarray['status']="success";
	$this->jasonarray['data']=array();
}
		}
		public function findbookbyid($database_feodbanz,$feodbanz,$id)
{
$id="id=".GetSQLValueString($id, "int",$feodbanz)."";	
$name="name=".GetSQLValueString($id, "text",$feodbanz)."";

		 mysqli_select_db($feodbanz,$database_feodbanz);
$query_fetchuserdata = "SELECT * from table_books where $id";
$fetchuserdata = mysqli_query($feodbanz,$query_fetchuserdata) or die(mysqli_error($feodbanz));
$row_fetchuserdata = mysqli_fetch_assoc($fetchuserdata);
$totalRows_fetchuserdata = mysqli_num_rows($fetchuserdata);
if($totalRows_fetchuserdata>0)
{
	$this->jasonarray=array();
	$this->jasonarray['status_code']="200";
	$this->jasonarray['status']="success";
do
{
	$bookvalue=array();
	$bookvalue['id']=$row_fetchuserdata['id'];
	$bookvalue['name']=$row_fetchuserdata['name'];
	$bookvalue['isbn']=$row_fetchuserdata['isbn'];
	$authosino=explode(',',$row_fetchuserdata['authors']);
	$authoval=array();
	$count=0;
	foreach($authosino as $alert)
	{
		$authoval[$count]=$alert;
		$count++;
	}
	$bookvalue['authors']=$authoval;
	$bookvalue['number_of_pages']=$row_fetchuserdata['number_of_pages'];
	$bookvalue['publishers']=$row_fetchuserdata['publishers'];
	$bookvalue['country']=$row_fetchuserdata['country'];
	$bookvalue['release_date']=$row_fetchuserdata['release_date'];
	$book[]=$bookvalue;
	
}while($row_fetchuserdata = mysqli_fetch_assoc($fetchuserdata));
$this->jasonarray['data']=$book;
}
else
{
	$this->jasonarray=array();
	$this->jasonarray['status_code']="200";
	$this->jasonarray['status']="success";
	$this->jasonarray['data']=array();
}
		}

public function searchbooks($database_feodbanz,$feodbanz,$id)
{
$id="id=".GetSQLValueString($id, "int",$feodbanz)."";	
$name="name=".GetSQLValueString($id, "text",$feodbanz)."";
$isbn="isbn=".GetSQLValueString($id, "text",$feodbanz)."";
$authors="authors=".GetSQLValueString($id, "text",$feodbanz)."";
$country="country=".GetSQLValueString($id, "text",$feodbanz)."";
$number_of_pages="number_of_pages=".GetSQLValueString($id, "text",$feodbanz)."";
$publishers="publishers=
".GetSQLValueString($id, "text",$feodbanz)."";
$release_date="release_date like '".GetSQLValueString($id, "int",$feodbanz)."%'";
		 mysqli_select_db($feodbanz,$database_feodbanz);
$query_fetchuserdata = "SELECT * from table_books where $id or $name or $isbn or $authors or $country or $number_of_pages or $publishers or $release_date";
$fetchuserdata = mysqli_query($feodbanz,$query_fetchuserdata) or die(mysqli_error($feodbanz));
$row_fetchuserdata = mysqli_fetch_assoc($fetchuserdata);
$totalRows_fetchuserdata = mysqli_num_rows($fetchuserdata);
if($totalRows_fetchuserdata>0)
{
	$this->jasonarray=array();
	$this->jasonarray['status_code']="200";
	$this->jasonarray['status']="success";
do
{
	$bookvalue=array();
	$bookvalue['id']=$row_fetchuserdata['id'];
	$bookvalue['name']=$row_fetchuserdata['name'];
	$bookvalue['isbn']=$row_fetchuserdata['isbn'];
	$authosino=explode(',',$row_fetchuserdata['authors']);
	$authoval=array();
	$count=0;
	foreach($authosino as $alert)
	{
		$authoval[$count]=$alert;
		$count++;
	}
	$bookvalue['authors']=$authoval;
	$bookvalue['number_of_pages']=$row_fetchuserdata['number_of_pages'];
	$bookvalue['publishers']=$row_fetchuserdata['publishers'];
	$bookvalue['country']=$row_fetchuserdata['country'];
	$bookvalue['release_date']=$row_fetchuserdata['release_date'];
	$book[]=$bookvalue;
	
}while($row_fetchuserdata = mysqli_fetch_assoc($fetchuserdata));
$this->jasonarray['data']=$book;
}
else
{
	$this->jasonarray=array();
	$this->jasonarray['status_code']="200";
	$this->jasonarray['status']="success";
	$this->jasonarray['data']=array();
}
		}

}?>