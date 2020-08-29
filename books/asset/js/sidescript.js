// JavaScript Document
$(window).scroll(function() {
	
});
function withdrawfund(str)
		{
			var percentamt=str*0.05;
			var netvalue=str-percentamt;
			document.getElementById('validamount').value=""+netvalue;
			document.getElementById('validpercent').value=""+percentamt;
		}
function caculatenaira()
{
	var amtusd=document.getElementById('topamount').value;
	var amtnaira=amtusd;
	document.getElementById('anountinngn').value=""+amtnaira;
	var calculaatecharge=amtnaira*1.55;
	calculaatecharge=calculaatecharge/100;
	if(amtnaira<=2000)
	{
		calculaatecharge=calculaatecharge;
		
	}
	else
	{
		calculaatecharge=calculaatecharge+100;
		if(calculaatecharge>2000)
		{
			calculaatecharge=2000;
		}
	}
	totalamount=parseFloat(amtnaira)+parseFloat(calculaatecharge);
	document.getElementById('trasanctioncharge').value=""+calculaatecharge;
	document.getElementById('totalamount').value=""+totalamount;
}
function caculatedolar()
{var amtusd=document.getElementById('topamount').value;
	var amtnaira=amtusd;
	document.getElementById('anountinngn').value=""+amtnaira;
	var calculaatecharge=amtnaira*1.55;
	calculaatecharge=calculaatecharge/100;
	if(amtnaira<=2000)
	{
		calculaatecharge=calculaatecharge;
		
	}
	else
	{
		calculaatecharge=calculaatecharge+100;
		if(calculaatecharge>2000)
		{
			calculaatecharge=2000;
		}
	}
	 totalamount=parseFloat(amtnaira)+parseFloat(calculaatecharge);
	document.getElementById('trasanctioncharge').value=""+calculaatecharge;
	document.getElementById('totalamount').value=""+totalamount;
}

function confirmrecieved(str)
{

$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/confirmproductrecived", 
                    data: {startcategory:document.getElementById('productid'+str).value,MM_insert:'form',purchaseid:document.getElementById('purchaseid'+str).value,trasactionid:document.getElementById('transactionid'+str).value},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
						
					document.getElementById('confirmbtn'+str).innerHTML='Working...';		
						
},
complete: function(){
},
success: function(data2){
if(data2=='1')
{
	location='#';	
}
else
{

}
document.getElementById('confirmbtn'+str).innerHTML='Confirm';
	},
error: function(){document.getElementById('confirmbtn'+str).innerHTML='Confirm';}
                });
}

function removefromcart(str)
{

$.ajax({
                    type: "POST",
                    url: "pmcontrolpages/removecart", 
                    data: {startcategory:str,MM_insert:'form',quantity:document.getElementById('countval'+str).value,price:document.getElementById('price'+str).value},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
						
							
						
},
complete: function(){
},
success: function(data2){
	alert('Item Removed');
	var varreturned=data2.split('~');
if(varreturned[0]=='1')
{
	location='cartcontent';	
}
else
{

}

	},
error: function(){}
                });
}

function calculatechangecart(str)
{
	
	var vals=document.getElementById('countval'+str).value;
	
var valsamount=document.getElementById('price'+str).value;
var prevtotal=document.getElementById('prevtotal'+str).value;
var prevgrand=document.getElementById('prevgrand').value;
var newgrand=prevgrand-prevtotal;
if(parseInt(vals)>=1)
{
}
else
{
	vals=1;
	document.getElementById('countval'+str).value=""+vals;
	return;
}
var result=vals*valsamount;
document.getElementById('prevtotal'+str).value=""+result;
newgrand=newgrand+result;
document.getElementById('prevgrand').value=""+newgrand;
var varresult=result.toFixed(2);
document.getElementById('totalval'+str).innerHTML=""+thousands_separators(varresult);
var newgrandresult=thousands_separators(newgrand.toFixed(2));
document.getElementById('grandtotal').innerHTML=""+newgrandresult;
document.getElementById('grandsummary').innerHTML=""+newgrandresult;
$.ajax({
                    type: "POST",
                    url: "pmcontrolpages/updatecart", 
                    data: {startcategory:str,MM_insert:'form',quantity:document.getElementById('countval'+str).value,price:document.getElementById('price'+str).value},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
						
							
						
},
complete: function(){
},
success: function(data2){
	alert(data2);
	var varreturned=data2.split('~');
if(varreturned[0]=='1')
{	
}
else
{

}

	},
error: function(){}
                });
}

function showsidemenu()
{

	document.getElementById('sidebarmenu').classList.toggle('showtag');

}
function addtocart(str)
{
var vals=document.getElementById('countval'+str).value;	
var valsamount=document.getElementById('theprice'+str).value;
if(parseInt(vals)>=1)
{
}
else
{
	vals=1;
	document.getElementById('countval'+str).value=""+vals;
	return;
}
$.ajax({
                    type: "POST",
                    url: "pmcontrolpages/addtocart", 
                    data: {startcategory:str,MM_insert:'form',quantity:document.getElementById('countval'+str).value,price:document.getElementById('theprice'+str).value},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('cartbutton'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	var varreturned=data2.split('~');
if(varreturned[0]=='1')
{
	
document.getElementById('banitems').innerHTML=varreturned[1];	
}
else
{

}
document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';
	},
error: function(){document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';}
                });
}
function addbooktocart(str)
{
var vals=document.getElementById('countval'+str).value;	
var valsamount=document.getElementById('theprice'+str).value;
if(parseInt(vals)>=1)
{
}
else
{
	vals=1;
	document.getElementById('countval'+str).value=""+vals;
	return;
}
$.ajax({
                    type: "POST",
                    url: "../../pmcontrolpages/addtocart", 
                    data: {startcategory:str,MM_insert:'form',quantity:document.getElementById('countval'+str).value,price:document.getElementById('theprice'+str).value},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('cartbutton'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	var varreturned=data2.split('~');
if(varreturned[0]=='1')
{
document.getElementById('banitems').innerHTML=varreturned[1];	
}
else
{

}
document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';
	},
error: function(){document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';}
                });
}

function addtocartbook(str)
{
var vals=document.getElementById('countval'+str).value;	
var valsamount=document.getElementById('theprice'+str).value;
if(parseInt(vals)>=1)
{
}
else
{
	vals=1;
	document.getElementById('countval'+str).value=""+vals;
	return;
}
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/addtocart", 
                    data: {startcategory:str,MM_insert:'form',quantity:document.getElementById('countval'+str).value,price:document.getElementById('theprice'+str).value},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('cartbutton'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	var varreturned=data2.split('~');
if(varreturned[0]=='1')
{
document.getElementById('banitems').innerHTML=varreturned[1];	
}
else
{

}
document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';
	},
error: function(){document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';}
                });
}

function saveremark(str)
{
$.ajax({
                    type: "POST",
                    url: "../../pmcontrolpages/savetheremark", 
                    data: {startcategory:str,MM_insert:'form',postcomment:document.getElementById('postcomment').value},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('cartbutton').innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	var varreturned=data2.split('~');
if(varreturned[0]=='1')
{
document.getElementById('postcomment').value='';
}
else
{

}
document.getElementById('cartbutton').innerHTML='Save Remark';
	},
error: function(){document.getElementById('cartbutton').innerHTML='Save Remark';}
                });
}
function addtocartproduct(str)
{
var vals=document.getElementById('countval'+str).value;	
var valsamount=document.getElementById('theprice'+str).value;
if(parseInt(vals)>=1)
{
}
else
{
	vals=1;
	document.getElementById('countval'+str).value=""+vals;
	return;
}
$.ajax({
                    type: "POST",
                    url: "../../pmcontrolpages/addtocart", 
                    data: {startcategory:str,MM_insert:'form',quantity:document.getElementById('countval'+str).value,price:document.getElementById('theprice'+str).value},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('cartbutton'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	var varreturned=data2.split('~');
if(varreturned[0]=='1')
{
document.getElementById('banitems').innerHTML=varreturned[1];	
}
else
{

}
document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';
	},
error: function(){document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';}
                });
}

function addtocartdirect(str)
{
var vals=document.getElementById('countval'+str).value;	
var valsamount=document.getElementById('theprice'+str).value;
if(parseInt(vals)>=1)
{
}
else
{
	vals=1;
	document.getElementById('countval'+str).value=""+vals;
	return;
}
$.ajax({
                    type: "POST",
                    url: "../../../../pmcontrolpages/addtocart", 
                    data: {startcategory:str,MM_insert:'form',quantity:document.getElementById('countval'+str).value,price:document.getElementById('theprice'+str).value},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('cartbutton'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	var varreturned=data2.split('~');
if(varreturned[0]=='1')
{
document.getElementById('banitems').innerHTML=varreturned[1];	
}
else
{

}
document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';
	},
error: function(){document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';}
                });
}
function addtocartsub(str)
{
var vals=document.getElementById('countval'+str).value;	
var valsamount=document.getElementById('theprice'+str).value;
if(parseInt(vals)>=1)
{
}
else
{
	vals=1;
	document.getElementById('countval'+str).value=""+vals;
	return;
}
$.ajax({
                    type: "POST",
                    url: "../../../pmcontrolpages/addtocart", 
                    data: {startcategory:str,MM_insert:'form',quantity:document.getElementById('countval'+str).value,price:document.getElementById('theprice'+str).value},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('cartbutton'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	var varreturned=data2.split('~');
if(varreturned[0]=='1')
{
document.getElementById('banitems').innerHTML=varreturned[1];	
}
else
{

}
document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';
	},
error: function(){document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';}
                });
}

function addtocartmenu(str)
{
var vals=document.getElementById('countval'+str).value;	
var valsamount=document.getElementById('theprice'+str).value;
if(parseInt(vals)>=1)
{
}
else
{
	vals=1;
	document.getElementById('countval'+str).value=""+vals;
	return;
}
$.ajax({
                    type: "POST",
                    url: "../pmcontrolpages/addtocart", 
                    data: {startcategory:str,MM_insert:'form',quantity:document.getElementById('countval'+str).value,price:document.getElementById('theprice'+str).value},
                        dataType: 'html',contentType:"application/x-www-form-urlencoded",
                        cache: false,
                        beforeSend: function(){
						
							document.getElementById('cartbutton'+str).innerHTML='Working...';
							
						
},
complete: function(){
},
success: function(data2){
	var varreturned=data2.split('~');
if(varreturned[0]=='1')
{
document.getElementById('banitems').innerHTML=varreturned[1];	
}
else
{

}
document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';
	},
error: function(){document.getElementById('cartbutton'+str).innerHTML='ADD TO CART';}
                });
}
function calculatechangeval(str)
{
	
	var vals=document.getElementById('countval'+str).value;
	
var valsamount=document.getElementById('theprice'+str).value;
if(parseInt(vals)>=1)
{
}
else
{
	vals=1;
	document.getElementById('countval'+str).value=""+vals;
	return;
}
var result=vals*valsamount;
var varresult=result.toFixed(2);
document.getElementById('totalval'+str).innerHTML=""+thousands_separators(varresult);
}
function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }