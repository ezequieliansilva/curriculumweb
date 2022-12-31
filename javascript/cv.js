
var temporal = 0;
var productArray = [];
var climaArray = [];
function expandir(idBoton)
{

   if (temporal == 0)
   {
    document.getElementById(idBoton).innerHTML = "-";
    temporal = 1;
   }
   else
   {
    document.getElementById(idBoton).innerHTML = "+";
    temporal = 0;
   }
   /*document.getElementById("btnSuper").innerHTML = "no anda";
    if(btnSuper.aria-expanded)
    {
        document.getElementById("btnSuper").innerHTML = "-";
    }
    else
    {
        document.getElementById("btnSuper").innerHTML = "+";
    }*/
}



document.addEventListener("DOMContentLoaded", function(e){
    productArray = getJSONData(fakeProduct).then(function(resultObj){
        if (resultObj.status === "ok"){
           
            productArray = resultObj.data; 
            let htmlContentToApend = "";
            htmlContentToApend = "<p>Nombre del producto: "+productArray.title+"<br>Precio:"+productArray.price+"<br>Categoria: "+productArray.category+"<br>Descripción: "+productArray.description+"<p/><img src="+productArray.image+" class='img-thumbnail rounded float-start' alt='Foto del producto'>";
            document.getElementById("divClima").innerHTML = htmlContentToApend;
        }
    });;
    
});
