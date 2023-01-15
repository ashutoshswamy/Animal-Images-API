const axios = require("axios");

axios
  .get("https://animal-images-api.devashu397.repl.co/dog")
  .then((res) => {
    console.log(res.data.image);
  })
  .catch((err) => {
    console.log(err);
  });
