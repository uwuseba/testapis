// JavaScript Document
$(document).ready(function(){
	
});
function changePageTitle(page_title){
 
    // change page title
    $('#page-title').text(page_title);
 
    // change title tag
    document.title=page_title;
}
function showProudct(){
 
    // change page title
   changePageTitle("Book List");
  location='index';
}
function showexternal(){
 
    // change page title
   changePageTitle("External Book List");
  location='external_books';
}
function createBook(){
 
    // change page title
   changePageTitle("Create Book");
  $("#page-content").load('Classes/createbook');
}
function updateBook(str){
 
    // change page title
	$("#page-content").load('Classes/updatebook?id='+str);
   changePageTitle("Update Book");
}
function deleteBook(str){
 
    // change page title
	$("#page-content").load('Classes/deletebook?id='+str);
   changePageTitle("Delete Book");
}
function deleteProudct(){
 
    // change page title
   changePageTitle("Delete Book");
}
//$(document).on('click', 'list-product', function(){
   // showProducts();
//});