const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    "https://api.thecatapi.com/v1/breeds/search?q=" + breedName,
    (error, response, body) => {
      if (error) {
        callback(error);
        return;
      }
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, "Breed not found!");
        return;
      }
      const desc = data[0]["description"];
      callback(null, desc);
    }
  );
};

module.exports = { fetchBreedDescription };
