// string
var myName = 'Gentry';
//number
var myAge = 25;
// boolean
var hasHobbies = false;
//array
var Hobbies = ["Programming", "Golang", "Sex"];
// tuples
var address = [99, "String"];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// function 
function returnName() {
    return myName;
}
console.log(returnName());
//void
function sayHello() {
    console.log("hello!");
}
// argument types
function multiply(x, y) {
    return x * y;
}
console.log(multiply(2, 3));
// function types
var myMultiply;
// myMultiply = sayHello
// myMultiply()
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: myName,
    age: myAge
};
// my Complex objects
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union 
var myTrueAge = "25";
// Check type
var finalValue = "True";
if (typeof finalValue != "string") {
    err();
    console.log("Error incorrect Type!");
}
else {
    console.log(finalValue);
}
//never
function err() {
    throw new Error('An error!');
}
// strict null Check
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
