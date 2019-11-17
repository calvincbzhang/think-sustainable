var totalQuantity = 0;
var totalFootPrint = 0;
var averageHealth = 0;

function outputTotalQuantity(){
  console.log(totalQuantity);
}

function outputTotalFootprint(){
  console.log(totalFootPrint);
}

function outputAverageHealth(){
  console.log(averageHealth);
}

function printMe(barcode) {
    var params = {
        // Request parameters
        "gtin": barcode,
    };

    $.ajax({
        url: "https://dev.tescolabs.com/product/?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","82a19d5b25574c0491ea06ca5d8eadb2");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
      if(!(data.products == undefined || data.products.length == 0)){
        const readableData = data.products[0].productCharacteristics;
        const description = data.products[0].description;
        var healthScore = readableData.healthScore;
        var hazard = readableData.isHazardous;
        var quantity = data.products[0].qtyContents.quantity;
        var footprint = quantity * 2.71;
        averageHealth = (healthScore + averageHealth * totalQuantity) / (totalQuantity + 1);
        totalQuantity++;
        totalFootPrint = totalFootPrint + footprint;
        console.log("quantity: " + totalQuantity);
        console.log(description);
        console.log("total Foot Print: " + totalFootPrint);
        console.log("healthScore: " + averageHealth);
        console.log("is it Hazardous: " + hazard);
      }
      else {
        alert("item not found");
      }
    })
    .fail(function() {
        alert("The barcode is invalid, please try again");
    });
};
