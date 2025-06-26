let myNum = 32
console.log(typeof myNum);

let myNumString = String(myNum)
console.table([myNumString,typeof(myNumString)])

let myNumBoolean = Boolean(32)
console.table([myNumBoolean,typeof(myNumBoolean)])


let myName = 'Anuj'
let myNameNumber = Number(myName)
let myNameBoolean = Boolean(myName)

console.table([myNameNumber,typeof(myNameNumber),myNameBoolean,typeof(myNameBoolean)])

let isAdult = true
let isAdultNumber = Number(isAdult)
let isAdultString = String(isAdult)
console.table([isAdultNumber,typeof(isAdultNumber),isAdultString,typeof(isAdultString)])