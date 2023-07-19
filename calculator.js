const calculator = {
    result: 0,

    add(...numbers) {
        this.result = numbers.reduce((acc, curr) => acc + curr, 0)
    },
    substract(...numbers) {
        this.result = Math.abs(numbers.reduce((acc, curr) => curr - acc, 0))
    },
    multiply(...numbers) {
        this.result = numbers.reduce((acc, curr) => acc * curr, 1)
    },
    divide(devisor) {
        if (devisor !== 0) {
            this.result /= devisor
        } else {
            console.log('На ноль делить нельзя')
        }
    },
    getResult() {
        return console.log('calculator', this.result)
    }
}


const anotherClac = {
    result: 0,
    print() {
        return console.log('anotherCalc', this.result)
    }
}

calculator.add(20, 30) //50

calculator.add.call(anotherClac, 10, 10); //20
calculator.getResult() //50
anotherClac.print() //20

calculator.substract.apply(anotherClac, [50, 33]); //17
calculator.getResult() //50
anotherClac.print() //17

const multiply = calculator.multiply.bind(anotherClac, 5, 7) //35
multiply() //35
calculator.getResult()//50
anotherClac.print() //35
