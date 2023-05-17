// let count  = 1;
// while (count > 10) {
// 	console.log(count)
// 	count++
// }

// count = 1
// do {
// 	console.log(count)
// 	count++
// } while(count > 10)

// const add = function (num1, num2) {
// 	return num1 + num2
// }

// const sum = (n1, n2) => {
// 	return n1 + n2
// }

// const result = sum(1, 2)
// console.log(result)


// const greet = name => `Hello ${name}`

// console.log(greet('Jon'))

// objects
const person = {
	name: 'jon doe',
	age: 10,
	nextOfKin: {
		name: 'mark doe'
	},
	eat: function () {
		return `${this.name} is eating`
	}
}

const students = [
	{
		name: 'jon',
		age: 4
	},
	{
		name: 'mark',
		age: 9
	},
	{
		name: 'jane',
		age: 7
	},
	{
		name: 'precious',
		age: 3
	}
]

const ages = students.map(({age}) => {
	if (age < 5) {
		return  age
	}
})

const agess = students.filter(({name}) => {
	return name === 'mark'
})

// function x() {
// 	console.log('this is x')
// 	console.log(this)
// }

const y = () => {
	console.log(this)
}

console.log([1, 2, 3].map())