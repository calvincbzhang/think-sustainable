var totalQuantity = 0;
var totalFootPrint = 0;
var averageHealth = 0;
var readableData;
var description;
var healthScore;
var hazard;
var quantity;
var footprint;
var myVar = setInterval(myTimer, 500);


function outputTotalQuantity(){
  console.log(totalQuantity);
}

function outputTotalFootprint(){
  console.log(totalFootPrint);
}

function outputAverageHealth(){
  console.log(averageHealth);
}

function printName() {
  return description;
}

function printQty() {
  return totalQuantity;
}

function printHealth() {
  return healthScore;
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
        readableData = data.products[0].productCharacteristics;
        description = data.products[0].description;
        healthScore = readableData.healthScore;
        hazard = readableData.isHazardous;
        quantity = data.products[0].qtyContents.quantity;
        footprint = quantity * 2.71;
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

function myTimer() {
  document.getElementById("name").innerHTML = "Name of Product: " + printName();
  document.getElementById("qty").innerHTML = "Total number of items: " + printQty();
  document.getElementById("health").innerHTML = "Health Score: " + printHealth();
}