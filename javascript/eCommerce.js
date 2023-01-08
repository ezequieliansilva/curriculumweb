categoriesArray = [];
productsArray = [];
function carousel(){
    let htmlAppendToApend = "";
    for(let i = 0; i < productsArray.length; i++)
    {
        htmlAppendToApend += `<div class="row">
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
    document.getElementById("carrusel").innerHTML = htmlAppendToApend;
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
            carousel();
        }
    });
}
document.addEventListener("DOMContentLoaded", function(e){
    cargarApis();
});