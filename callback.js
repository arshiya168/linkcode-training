function hello(param) {
   return param()
}

function world() {
    console.log("hello world")
}

console.log(hello(world))

