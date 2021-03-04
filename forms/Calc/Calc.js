let num1 = Number(prompt("Enter the first number."))
let num2 = Number(prompt("Enter the second number."))

function summedNumbers (num1, num2) {
    number = Number(num1 + num2)
    let answer = number
    return answer
    }
let answer = summedNumbers (num1, num2)
console.log(`The sum of ${num1} and ${num2} is ${answer}.`)