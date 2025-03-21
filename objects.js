let obj = {
    name: "arshiya",
    surname: "pathan",
    age: 19,
    fullName: function() {
       return this.name + this.surname
    }
}

console.log(obj.fullName())

//object destructuring

let {firstName, lastName} = {
    firstName: "arshiya",
    lastName: "pathan"
}

console.log(firstName)