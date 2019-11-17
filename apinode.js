const axios = require('axios');

const args = process.argv.slice(2);
const barcode = args[0];

const getDataFromAPI = () => {
  const request = `https://dev.tescolabs.com/product/?gtin=${barcode}`;
  try {
    return axios.get(request, {
      headers: {
        "Ocp-Apim-Subscription-Key": "82a19d5b25574c0491ea06ca5d8eadb2"
      },
    });
  } catch (error) {
    console.log("This item is not found");
  }
};

const countBreeds = async () => {
  const breeds = await getDataFromAPI()
  const tpnc = breeds.data.products[0].tpnc
  const readableData = breeds.data.products[0].productCharacteristics
  var healthScore = readableData.healthScore;
  var hazard = readableData.isHazardous;
  var quantity = breeds.data.products[0].qtyContents.quantity;
  console.log("quantity: " + quantity);
  console.log("healthScore: " + healthScore);
  console.log("is it Hazardous:" + hazard);
  console.log("tpnc: " + tpnc);
  return healthScore;
}

countBreeds()
