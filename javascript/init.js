

const accesKey = "484beef48507970de27f18a0e8fec9ce";
const fuenteClimas = "http://api.weatherstack.com/current?access_key=484beef48507970de27f18a0e8fec9ce&query=Montevideo";
const fakeProduct = "https://fakestoreapi.com/products/";
const fakeCategories = "https://fakestoreapi.com/products/categories";
const fakeProducts = "https://fakestoreapi.com/products";
const fakeCategory = "https://fakestoreapi.com/products/category/";

var getJSONData = function(url){
    var result = {};
    //showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          //hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        //hideSpinner();
        return result;
    });
}