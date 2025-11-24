let students =["Ali", "Vali", "Guli"]

//Ro'yxat axirina element qo'wadi 
students.push('Gani')
console.log(students)

//Oxiridagi elementni olib tashidi
students.pop()

//Aldina element qo'shadi
students.unshift('Seva')
console.log(students)

//Aldindagi elementni albv tashidi
students.shift()
console.log(students)

students[1] = 'Avaz'
console.log(students)

let fIsm = prompt('Ism kiriting')
let dogriIsm = fIsm.slice(0,1).toUpperCase() + fIsm.slice(1).toLowerCase

//true / false
if (students.includes(dogriIsm)) {
    alert('Royhatda bor: ')
} else {
    alert('Royhatda yoq')
}

let p = prompt("Raqam kiriting: ")
if (p % 15 == 0) {
    alert('FizzBuzz')
} else if(p % 3 == 0) {
    alert('Fizz')
} else if(p % 5 == 0) {
    alert('Buzz')
} else {
    alert('Javob: ' + p)
}