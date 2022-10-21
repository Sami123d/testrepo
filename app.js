// ASSIGNMENT NO.1:

class PersonAccount{
    constructor(fname,lname,incomes,expenses)
        {this.fname=fname;
        this.lname=lname;
        this.incomes=incomes;
        this.expenses=expenses;
        }
      
        
        totoalexpense(){
            let totalexp=0;
            for(let j in this.expenses){
             totalexp=totalexp+this.expenses[j]
            
        }
           return console.log(`totalexpense ${totalexp}`)
        }
    totalincome(){
            let total=0;
                for(let j in this.incomes){
                 total=total+this.incomes[j]
                
            }
        return console.log(`totalIncome ${total}`)
        }
        accountinfo(){
            let totalexp=0;
            for(let j in this.expenses){
             totalexp=totalexp+this.expenses[j]
        }
        let total=0;
        for(let j in this.incomes){
         total=total+this.incomes[j]
        
    }
         return   console.log(`Accoount No:5436  Account title: ${this.fname + this.lname} Balance=${total-totalexp}`)
        }
        addincome(addincome,value){
            this.incomes[addincome]=value;
          return  console.log(this.incomes)
        }
        addexpense(addexpenses,value){
            this.expenses[addexpenses]=value
           return console.log(this.expenses)
        }
}
let person=new PersonAccount('Sami','Ahmed',{salary: 30000,Propertyrent: 40000,BusinessIncome:70000},{Homerent:20000,
morebill:30000,
Fuel: 20000})
person.totalincome();
person.totoalexpense();
person.accountinfo();
person.addincome('extraSalary',10000)
person.addexpense('utilitybills',5000)





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


