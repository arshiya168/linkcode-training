let numArr = [20, 50, 29, 73, 70, 90, 60]

numArr.push(40)
console.log(`after adding 40: ${numArr}`)

let removeArr = numArr.pop()
console.log(`removed num: ${removeArr}`)
console.log(`after removing the last num: ${numArr}`)

let filteredArr = numArr.filter((num) => num % 2 != 0) 
console.log(`array of odd numbers: ${filteredArr}`)

let newArr = numArr.map((num) => num * 5)
console.log(`array of multiples of 5: ${newArr}`)

numArr.splice(3,6)
console.log(`after removing nums from index 1 to 5 : ${numArr}`)

numArr.slice(0, 1)
console.log(`nums from index 0 to 1 : ${numArr}`)

numArr.forEach((num) => {
    console.log(num)
})

let str = "roronoa"
console.log(`removed r and splitted the rest of the string : ${str.split("r")}`)
console.log(`splitted string: ${str.split("")}`)

let joinedArr = newArr.join()
console.log(`joined arr : ${joinedArr}`)

let reversedArr = newArr.reverse()
console.log(`reversed array : ${reversedArr}`)

//array destructuring 
let [a,b] = [30, 40]
console.log(b)

