let categoriesArray = [];
let productsArray = [];
const ubicacion = '<h3 onclick="">Catergory</h3>';
function unProducto(id){
    document.getElementById("multiUso").innerHTML = `
    <button type="button" class="btn btn-primary" onclick="cargarApis(1)">Back</button>
    <div class="text-center  bg-primary-subtle text-emphasis-primary"><h2>eCommerce</h2><br>
        <h3>`+productsArray[id-1].title+`</h3>
        <div class="text-center">
            <img src="` + productsArray[id-1].image + `" class="img-thumbnail">
        </div>
        <div class=" bg-primary-subtle text-emphasis-primary">
            <p>` + productsArray[id-1].description + `<br><br>  U$S ` + productsArray[id-1].price + `
            <br>Categoria: <button type="button" class="btn btn-primary" onclick='productosPorCategoria("`+ productsArray[id-1].category.replace(/'/g,"@" )+`")'>`+productsArray[id-1].category+`</button></a></p>
            
        </div>
    </div>`;
}
function productosPorCategoria(categoria){

    let htmlAppendToApend = `<button type="button" class="btn btn-primary" onclick="listarTodosProductos()">Sin Filtros</button>`; 
    
   for(let i = 0; i < productsArray.length; i++)
    {
        
        if(categoria == productsArray[i].category.replace(/'/g,"@" ))
        {
            
            htmlAppendToApend += `<div class="row" onclick="unProducto(`+productsArray[i].id+`)">
                <div class="col-3">
                    <img src="` + productsArray[i].image + `" alt="` + productsArray[i].description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ productsArray[i].title +`</h4>
                        <small class="text-muted"> U$S ` + productsArray[i].price + `</small>
                    </div>
                    <p class="mb-1">` + productsArray[i].description + `</p>
                    </div>
                </div>`
        }
        
    } 
    
    document.getElementById("multiUso").innerHTML = htmlAppendToApend;
}
function listarTodosProductos(){
    let htmlAppendToApend = "";
    for(let i = 0; i < productsArray.length; i++)
    {
        htmlAppendToApend += `<div class="row" onclick="unProducto(`+productsArray[i].id+`)">
        <div class="col-3">
            <img src="` + productsArray[i].image + `" alt="` + productsArray[i].description + `" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">`+ productsArray[i].title +`</h4>
                <small class="text-muted"> U$S ` + productsArray[i].price + `</small>
            </div>
            <p class="mb-1">` + productsArray[i].description + `</p>
        </div>
    </div>`
    } 
    document.getElementById("multiUso").innerHTML = htmlAppendToApend;
}
function cargarApis(){
    getJSONData(fakeCategories).then(function(resultObj){
        if (resultObj.status === "ok"){
           
            categoriesArray = resultObj.data;
        }
    });
    getJSONData(fakeProducts).then(function(resultObj){
        if (resultObj.status === "ok"){
           
            productsArray = resultObj.data;
            listarTodosProductos();
            
        }
    });
}
document.addEventListener("DOMContentLoaded", function(e){
    cargarApis(1);
});