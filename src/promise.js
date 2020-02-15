//ES5 type how it works

// const fileSystemWrite = (text, completeCallBack = () => null) => {
//   setTimeout(() => {
//     console.log("File is being written");
//     console.log(text);
//     completeCallBack("Success!");
//   });
// };

// const textToWrite = "Hello World!";

// // fileSystemWrite(textToWrite, status => {
// //   console.log(`File Write operation: ${status}`);
// // });
// fileSystemWrite(textToWrite);

//How to use promise

const fileSystemWrite = text => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("File is being written!");
      console.log(text);
      resolve("Success!");
    });
  });
};

fileSystemWrite("My Text").then(status => {
  console.log(`file write operaton : ${status}!`);
});
