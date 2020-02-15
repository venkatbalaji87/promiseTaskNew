const unirest = require("unirest");

const networkRequest = () => {
  return new Promise((resolve, reject) => {
    unirest.get("https://todaytask.free.beeceptor.com");
    .then(resolve)
    .catch(reject);
  });
};

networkRequest()
.then(data => {
  console.log(data.body);
})