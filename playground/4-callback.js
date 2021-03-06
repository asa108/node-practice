//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});

// setTimeout(() => {
//   console.log("Two seconds are up");
// }, 2000);

// const names = ["Asane", "Jex", "Lily"];
// const shortName = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       letitude: 0,
//       logitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Philadelphia", (data) => {
//   console.log(data);
// });
