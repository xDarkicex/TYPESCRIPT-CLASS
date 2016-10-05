type Account = { money: number, deposit: (x: number) => void}
let bankAccount: Account = {
    money: 2000,
    deposit(value: number): void {
        this.money += value
    }
}
let myself: {name: string, bankAccount: Account, hobbies: string[]} = {
    name: "Gentry",
    bankAccount: bankAccount,
    hobbies: ["Golang", "Craft beer", "Comic Books", "Photography", "Computers"]
}

myself.bankAccount.deposit(3000)

// for (let i: number = 0; i < myself.hobbies.length;i++){
// console.log(myself.hobbies[i])
// }

console.log("ARROW FUNCTIONS")
// standard syntax
const addNumbers = function(x: number, y: number): number{
    return x + y
}
console.log(addNumbers(10,3))

// arrow synatx
const multiplyNumbers = (x: number, y: number) => x * y
console.log(multiplyNumbers(10,3))

let friend: string[] = ["Todd", "James", "David", "Daniel", "Brittney"]
// greeter new syntax arror
const greetFriend = friend => console.log(friend)
for(let i=0;i<friend.length;i++){greetFriend(friend[i])}

