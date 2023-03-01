# Animal Images API

This is an API which returns images of different animals.

**Basic API Endpoint** - *https://animal-images-api.iamashuu397.repl.co/*

| Endpoint                                                           | Method | Use                             |
| ------------------------------------------------------------------ | ------ | ------------------------------- |
| [/dog](https://animal-images-api.iamashuu397.repl.co/dog)          | GET    | Returns an image of a dog       |
| [/cat](https://animal-images-api.iamashuu397.repl.co/cat)          | GET    | Returns an image of a cat       |
| [/lion](https://animal-images-api.iamashuu397.repl.co/lion)        | GET    | Returns an image of a lion      |
| [/tiger](https://animal-images-api.iamashuu397.repl.co/tiger)      | GET    | Returns an image of a tiger     |
| [/panda](https:/animal-images-api.iamashuu397.repl.co/panda)       | GET    | Returns an image of a panda     |
| [/koala](https:/animal-images-api.iamashuu397.repl.co/koala)       | GET    | Returns an image of a koala     |
| [/elephant](https:/animal-images-api.iamashuu397.repl.co/elephant) | GET    | Returns an image of an elephant |
| [/kangaroo](https:/animal-images-api.iamashuu397.repl.co/kangaroo) | GET    | Returns an images of a kangaroo |

# Example

```js
const axios = require("axios");

const url = "https://animal-images-api.iamashuu397.repl.co/dog";

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
