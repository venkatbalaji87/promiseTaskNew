const fileSystemWrite = text => {
  return new Promise((resolve, reject) => {
    console.log("File is being written!");
    console.log(text);
    reject("Failed!");
    resolve("Success!");
  });
};

fileSystemWrite("My Text")
  .then(status => {
    console.log(`file write operaton : ${status}!`);
  })
  .catch(error => {
    console.log("Error happened: ", error);
  });
