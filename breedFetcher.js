const request = require("request");
const args = process.argv[2];

request(
  "https://api.thecatapi.com/v1/breeds/search?q=" + args,
  (error, response, body) => {
    if (error) {
      console.log("error:", error);
      return;
    }
    console.log("statusCode:", response && response.statusCode);
    // console.log("body", body);
    // console.log(typeof body);
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed not found!");
      return;
    }
    console.log(data[0]["description"]);
  }
);
