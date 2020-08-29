// JavaScript Document
function ucheckoption(theclass)
{
	var y = document.getElementsByClassName(theclass);
var ii;
for (ii = 0; ii < y.length; ii++) {
  y[ii].checked = false;  
}
}
function activatCategory(str)
{
	var prevselected=document.getElementById('prevstartcat').value;
	if(prevselected==-1||prevselected==0)
	{
		if(str=='-1')
		{
			document.getElementById('prevstartcat').value='-1';
		}
		else
		{
			  document.getElementById('directcategory'+str).classList.toggle("hidevals");
			  document.getElementById('prevstartcat').value=str;
		}
	}
	else
	{
		if(str=='-1')
		{
			document.getElementById('directcategory'+prevselected).classList.toggle("hidevals");
			document.getElementById('directcategory'+prevselected).value='-1';
			
			document.getElementById('prevstartcat').value='-1';
		}
		else
		{
			 document.getElementById('directcategory'+prevselected).classList.toggle("hidevals");
			 document.getElementById('directcategory'+prevselected).value='-1';
			 document.getElementById('directcategory'+str).classList.toggle("hidevals");
			document.getElementById('prevstartcat').value=str;
		}
	}
}

function checktheplacename(str)
{
$.ajax({
                    type: "POST",
                    url: "pmcontrolpages/checkplacename", 
                    data: {enterplacename:str,MM_insert:'form'},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						$('#valplacename').toggleClass('showchecking');
							document.getElementById('valplacename').innerHTML='Checking...';
							
						
},
complete: function(){
},
success: function(data2){
	if(data2=="")
	{
			$('#valplacename').toggleClass('showchecking');
	}
document.getElementById('valplacename').innerHTML=data2;
	},
error: function(){}
                });
	
}
function getzip2(str)
{
	var values=str.split(':');
	document.getElementById('zipcode').value=values[1];
}
function deletedirectcategory(str)
{
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/deletedirectcategory", 
                    data: {startcategory:str,MM_insert:'form'},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
if(data2=='1')
{
Location='viewallcategory';	
}
else
{

}

	},
error: function(){}
                });
	
}
function deleteminorcategory(str)
{
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/deleteminorcategory", 
                    data: {startcategory:str,MM_insert:'form'},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
if(data2=='1')
{
Location='viewallcategory';	
}
else
{

}

	},
error: function(){}
                });
	
}
function deletesubcategory(str)
{
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/deletesubcategory", 
                    data: {startcategory:str,MM_insert:'form'},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
if(data2=='1')
{
Location='viewallcategory';	
}
else
{

}

	},
error: function(){}
                });
	
}

function deletecategory(str)
{
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/deletecategory", 
                    data: {startcategory:str,MM_insert:'form'},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
if(data2=='1')
{
Location='viewallcategory';	
}
else
{

}

	},
error: function(){}
                });
	
}
function deletestartcat(str)
{
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/deletestartcat", 
                    data: {startcategory:str,MM_insert:'form'},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
if(data2=='1')
{
Location='viewstartcategory';	
}
else
{

}

	},
error: function(){}
                });
	
}
function loadproperties()
{
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/loadproperty", 
                    data: {startcategory:document.getElementById('typeval').value,MM_insert:'form'},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
},
complete: function(){
},
success: function(data2){
	document.getElementById('details').innerHTML=data2;
	},
error: function(){}
                });
	
}

function blockdbrands(str)
{
	var thestatus=document.getElementById('statused'+str).value;
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/blockbrand", 
                    data: {startcategory:str,MM_insert:'form',statused:thestatus},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	
	alert(data2);
	var data=data2.split('~');
//loadproperties();
if(data[0]=='1')
{if(data[1]=='0'){
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';
}
else
{
	document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
}
else
{
if(thestatus=='1'){

document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
else
{
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';	
}
}

	},
error: function(){}
                });
	
}


function blockdircategory(str)
{
	var thestatus=document.getElementById('statused'+str).value;
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/blockdircategory", 
                    data: {startcategory:str,MM_insert:'form',statused:thestatus},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	
	alert(data2);
	var data=data2.split('~');
//loadproperties();
if(data[0]=='1')
{if(data[1]=='0'){
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';
}
else
{
	document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
}
else
{
if(thestatus=='1'){

document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
else
{
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';	
}
}

	},
error: function(){}
                });
	
}


function blockmincategory(str)
{
	var thestatus=document.getElementById('statused'+str).value;
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/blockmincategory", 
                    data: {startcategory:str,MM_insert:'form',statused:thestatus},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	
	alert(data2);
	var data=data2.split('~');
//loadproperties();
if(data[0]=='1')
{if(data[1]=='0'){
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';
}
else
{
	document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
}
else
{
if(thestatus=='1'){

document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
else
{
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';	
}
}

	},
error: function(){}
                });
	
}


function blocksubcategory(str)
{
	var thestatus=document.getElementById('statused'+str).value;
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/blockcategory", 
                    data: {startcategory:str,MM_insert:'form',statused:thestatus},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	
	alert(data2);
	var data=data2.split('~');
//loadproperties();
if(data[0]=='1')
{if(data[1]=='0'){
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';
}
else
{
	document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
}
else
{
if(thestatus=='1'){

document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
else
{
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';	
}
}

	},
error: function(){}
                });
	
}

function blockproduct(str)
{
	var thestatus=document.getElementById('statused'+str).value;
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/blockproduct", 
                    data: {startcategory:str,MM_insert:'form',statused:thestatus},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	
	alert(data2);
	var data=data2.split('~');
//loadproperties();
if(data[0]=='1')
{if(data[1]=='0'){
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';
}
else
{
	document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
}
else
{
if(thestatus=='1'){

document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
else
{
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';	
}
}

	},
error: function(){}
                });
	
}


function blockcategory(str)
{
	var thestatus=document.getElementById('statused'+str).value;
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/blockcategory", 
                    data: {startcategory:str,MM_insert:'form',statused:thestatus},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	
	alert(data2);
	var data=data2.split('~');
//loadproperties();
if(data[0]=='1')
{if(data[1]=='0'){
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';
}
else
{
	document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
}
else
{
if(thestatus=='1'){

document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
else
{
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';	
}
}

	},
error: function(){}
                });
	
}
function blockmenus(str)
{
	var thestatus=document.getElementById('statused'+str).value;
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/blockmenus", 
                    data: {startcategory:str,MM_insert:'form',statused:thestatus},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	
	alert(data2);
	var data=data2.split('~');
//loadproperties();
if(data[0]=='1')
{if(data[1]=='0'){
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';
}
else
{
	document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
}
else
{
if(thestatus=='1'){

document.getElementById('deete'+str).innerHTML='Block';
document.getElementById('statused'+str).value='1';
}
else
{
document.getElementById('deete'+str).innerHTML='Open';
document.getElementById('statused'+str).value='0';	
}
}

	},
error: function(){}
                });
	
}

function deleteproperties(str)
{
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/deleteproperty", 
                    data: {startcategory:str,MM_insert:'form'},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
							document.getElementById('deete'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
loadproperties();
if(data2=='1')
{
	
}
else
{

}

	},
error: function(){}
                });
	
}
function addproperties()
{
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/addproperty", 
                    data: {startcategory:document.getElementById('typeval').value,catgoryname:document.getElementById('catgoryname').value,w3lMessage:document.getElementById('w3lMessage').value,MM_insert:'form'},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
							document.getElementById('processit').innerHTML='Sending...';
						
},
complete: function(){
},
success: function(data2){
loadproperties();
if(data2=='1')
{
	document.getElementById('processit').innerHTML='Save';
	document.getElementById('catgoryname').value="";
	document.getElementById('w3lMessage').value="";
}
else
{
	document.getElementById('processit').innerHTML='Save';
}

	},
error: function(){}
                });
	
}

function mymessageaction(str) {
	if($("#myPopup"+str).hasClass('showpopmenu'))
	{
		var popup = document.getElementById("myPopup"+str);
  popup.classList.toggle("showpopmenu");
	}
	else
	{
	var els = document.getElementsByClassName('showpopmenu');
	while (els[0]) {
		if (els[0].classList.contains('showpopmenu')) {
       els[0].classList.remove('showpopmenu');
      }
    
  }
  var popup = document.getElementById("myPopup"+str);
  popup.classList.toggle("showpopmenu");
	}
	if($("#myPopup"+str).hasClass('showpopmenu'))
	{
	document.getElementById('disableload').value='0';	
	}
	else
	{
		document.getElementById('disableload').value='1';
	}
}
window.onclick = function(event) {
  if (!event.target.matches('.topsmess')) {
	  var els = document.getElementsByClassName('showpopmenu');
	while (els[0]) {
		if (els[0].classList.contains('showpopmenu')) {
       els[0].classList.remove('showpopmenu');
      }
 document.getElementById('disableload').value='1';   
  }
    
  }
} 

$('#startcategory').on('change', function (){
	 $('#thecategories').html('<option value="">Loading...</option>');
  $.getJSON('../pagefiles/fetchcategories', {startcat: $(this).val()}, function(data){
    var options = '';
    for (var x = 0; x < data.length; x++) {
      options += '<option value="' + data[x]['id'] + '">' + data[x]['name'] + '</option>';
    }
    $('#thecategories').html(options);
  }).fail(function(xhr) {
                    alert(xhr)
                });
});

$('#thecategories').on('change', function (){
	$('#subcategories').html('<option value="">Loading...</option>');
  $.getJSON('../pagefiles/fetchsubcategories', {startcat: $(this).val()}, function(data){
    var options = '';
    for (var x = 0; x < data.length; x++) {
      options += '<option value="' + data[x]['id'] + '">' + data[x]['name'] + '</option>';
    }
    $('#subcategories').html(options);
  }).fail(function(xhr) {
                    alert(xhr)
                });
});

$('#subcategories').on('change', function (){
	 $('#direccategories').html('<option value="">Loading...</option>');
  $.getJSON('../pagefiles/fetchminorcategories', {startcat: $(this).val()}, function(data){
    var options = '';
    for (var x = 0; x < data.length; x++) {
      options += '<option value="' + data[x]['id'] + '">' + data[x]['name'] + '</option>';
    }
    $('#direccategories').html(options);
  }).fail(function(xhr) {
                    alert(xhr)
                });
});
// JavaScript Document