const roomClean = () => {
  return new Promise((resolve, reject) => {
    const ifRoomClean = true;
    if (ifRoomClean) {
      resolve("Success");
    } else {
      reject("Room isn't clean");
    }
  });
};

const goForWalk = () => {
  return new Promise((resolve, reject) => {
    const goForWalk = true;
    if (goForWalk) {
      resolve("Success");
    } else {
      reject("goForWalk isn't possible");
    }
  });
};

const getMilk = () => {
  return new Promise((resolve, reject) => {
    const getMilk = true;
    if (getMilk) {
      resolve("Success");
    } else {
      reject("hasn't bought");
    }
  });
};

// roomClean()
//   .then(sucess => {
//     console.log(sucess);
//     return goForWalk();
//   })
//   .then(sucess => {
//     console.log(sucess);
//     return getMilk();
//   })
//   .then(success => {
//     console.log("bought it");
//   })
//   .catch(error => {
//     console.error(error);
//   });

//async await
const myAsyncFunction = async () => {
  try {
    const isRoomCleaning = await roomClean();
    console.log(isRoomCleaning);
    if (isRoomCleaning) {
      const goingForWalk = await getMilk();
      console.log(goingForWalk);
    }
  } catch (e) {
    console.error(e);
  }
};

myAsyncFunction();
