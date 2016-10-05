var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Gentry",
    bankAccount: bankAccount,
    hobbies: ["Golang", "Craft beer", "Comic Books", "Photography", "Computers"]
};
myself.bankAccount.deposit(3000);
// for (let i: number = 0; i < myself.hobbies.length;i++){
// console.log(myself.hobbies[i])
// }
console.log("ARROW FUNCTIONS");
// standard syntax
var addNumbers = function (x, y) {
    return x + y;
};
console.log(addNumbers(10, 3));
// arrow synatx
var multiplyNumbers = function (x, y) { return x * y; };
console.log(multiplyNumbers(10, 3));
var friend = ["Todd", "James", "David", "Daniel", "Brittney"];
// greeter new syntax arror
var greetFriend = function (friend) { return console.log(friend); };
for (var i = 0; i < friend.length; i++) {
    greetFriend(friend[i]);
}
