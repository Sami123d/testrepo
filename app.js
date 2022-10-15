





// ASSIGNMENT # 2:
class automobile{
    constructor(name, model, color, type, start, opendoors ) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.type = type;
        this.start = start;
        this.opendoors = opendoors;

    }
}
class Car extends automobile {
    constructor(name, model, color, type, start, opendoors, horsepower, doors, maxspeed) {
        super(name, model, color, type, start, opendoors)
        this.horsepower = horsepower;
        this.doors = doors;
        this.maxspeed = maxspeed;
    }
}
const work = new Car("mehran", "2005", "white", "manual", "car is ready for drive", "door is open", "993CC","4 doors", "240");
console.log(work);

class truck extends automobile{
    constructor(name, model, color, type, start, opendoors, horsepower, fueltype, maxspeed,manufactured) {
        super(name, model, color, type, start, opendoors)
        this.horsepower = horsepower;
        this.fueltype = fueltype;
        this.maxspeed = maxspeed;
        this.manufactured = manufactured;
    }
}
class bus extends automobile{
    constructor(name, model, color, type, start, opendoors, seats, fueltype, manufacture){
        super(name, model, color, type, start, opendoors)
        this.seats = seats;
        this.fueltype = fueltype;
        this.manufacture = manufacture;
        
    }
}
