// const sqare = function (x) {
//   return x * x;
// };

// console.log(sqare(3));

// const square2 = (x) => {
//   return x * x;
// };

// console.log(square2(4));

// const squre3 = (x) => x * x;
// console.log(squre3(7));

const event = {
  name: "Birth day party",
  guestList: ["Asane", "Lily", "Mike"],
  printGuestList() {
    console.log("Guest list for" + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " " + this.name);
    });
  },
};

event.printGuestList();
