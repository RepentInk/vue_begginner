class Car{
    add(x,y){
        return x + y
    }

    static subtract(x,y){
        return x>y ? x-y : y-x
    }

    static addSub(x,y){
        return{
            add: x + y,
            sub: this.subtract(x,y)
        }
    }
}

const newCar = new Car
console.log(newCar.add(1,2))
console.log(Car.subtract(3,5))
console.log(Car.addSub(3,5))