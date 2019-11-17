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
  const readableData = breeds.data.products[0].productCharacteristics
  var healthScore = readableData.healthScore;
  var hazard = readableData.isHazardous;
  console.log(healthScore);
  console.log(hazard);
  return healthScore;
}

countBreeds()
