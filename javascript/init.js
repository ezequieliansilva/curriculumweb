

const accesKey = "484beef48507970de27f18a0e8fec9ce";
const fuenteClimas = "http://api.weatherstack.com/current?access_key=484beef48507970de27f18a0e8fec9ce&query=Montevideo";
const fakeCommerce = "https://fakestoreapi.com/products";
const fakeProduct = "https://fakestoreapi.com/products/1";

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