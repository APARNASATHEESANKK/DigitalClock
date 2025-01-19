

const prompt=require('prompt-sync')({sigint:true})

var num=prompt("enter a number")
const number=num

let digit
let reverse=0


while(num>0){
    digit=num%10
 reverse=reverse*10+digit
num=Math.floor(num/10)
}
console.log(reverse==number?`${number} is palindrome`:`${number} is not palindrome`);


