function buscar() 
{
  var searchvalue = document.getElementById('search-navbar').value;
  //alert(searchvalue)
  //window.location.href=api+"/search?name="+searchvalue;  
  // window.open("/search?name="+searchvalue,"_self");
  window.location.replace("/search?name="+searchvalue);

}