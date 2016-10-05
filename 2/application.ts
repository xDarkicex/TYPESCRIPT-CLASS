// string
let myName: string = 'Gentry'

//number
let myAge: number = 25

// boolean
let hasHobbies: boolean = false

//array

let Hobbies: string[] = ["Programming", "Golang", "Sex"]

// tuples
let address: [number, string] = [99, "String"]

// enum
enum Color { 
    Gray, // 0
    Green, // 1
    Blue // 2
}
let myColor: Color = Color.Green
console.log(myColor)

// any
let car: any = "BMW"
console.log(car)
car = {brand: "BMW", series: 3}
console.log(car)

// function 
function returnName(): string{
    return myName
}
console.log(returnName())

//void
function sayHello(): void {
    console.log("hello!")
}

// argument types
function multiply(x: number, y: number): number {
    return x * y

}
console.log(multiply(2, 3))

// function types
let myMultiply: (x: number, y: number) => number;
// myMultiply = sayHello
// myMultiply()
myMultiply = multiply
console.log(myMultiply(5,2))

// objects
let userData: { name: string, age: number} = {
    name: myName,
    age: myAge
}
// my Complex objects
let complex: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[]{
        return this.data
    }
}
//type alias
type Complex = {data: number[], output: (all: boolean) => number[]}

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[]{
        return this.data
    }
}
// union 
let myTrueAge: number | string = "25"

// Check type
let finalValue = "True"
if (typeof finalValue != "string" ){
    err()
    console.log("Error incorrect Type!")
} else {
    console.log(finalValue)
}
type never = {}
//never
function err():never {
    throw new Error('An error!')
}
// strict null Check
let canBeNull = 12
canBeNull = null
let canAlsoBeNull
canAlsoBeNull = null
