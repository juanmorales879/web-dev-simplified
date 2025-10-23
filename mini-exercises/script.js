function printVariable(variable){
    console.log(variable)
}

function test(a, callback){
     callback("Hello " + a)
}

test("Juan", printVariable)

let name = (firstname) => {
    return firstname
}

console.log(name("Jon"))