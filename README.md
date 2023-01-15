# Animal Images API

This is an API which returns images of different animals.

**Basic API Endpoint** - *https://animal-images-api.devashu397.repl.co/*

| Endpoint                                                     | Method | Use                         |
| ------------------------------------------------------------ | ------ | --------------------------- |
| [/dog](https://animal-images-api.devashu397.repl.co/dog)     | GET    | Returns an image of a dog   |
| [/cat](https://animal-images-api.devashu397.repl.co/cat)     | GET    | Returns an image of a cat   |
| [/lion](https://animal-images-api.devashu397.repl.co/lion)   | GET    | Returns an image of a lion  |
| [/tiger](https://animal-images-api.devashu397.repl.co/tiger) | GET    | Returns an image of a tiger |

# Example

```js
const axios = require("axios");

const url = "https://animal-images-api.devashu397.repl.co/dog";

axios
  .get(url)
  .then((res) => {
    console.log(res.data.image);
  })
  .catch((err) => {
    console.log(err);
  });

//returns with a dog image
```
