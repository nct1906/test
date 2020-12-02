class Person{
    name;
    age;
    address;
    constructor(name,age,address,gender){
        this.name=name
        this.age=age
        this.address=address
        this.gender=gender
    }
    speak(line){
        console.log(`Toi ten la ${this.name} nam nay toi ${this.age} toi o ${this.address} ${line}`)
    }
}
const duyet=new Person('Duyet',20,'Hanoi','Male')
console.log(duyet)
const abc=new Person('abc',22,'Nam Dinh','Female')
console.log(abc)
const tu=new Person('Tu',19,'Hanoi','Nu')
tu.speak('Rat vui duoc lam quen voi moi nguoi')

//animal(name,species, color,legNum, gender, 
//eat(){console.log("con gi dang an")}, keu(){console.log(con gi dang keu)}, is dangerous(so chan ===4||0=> console.log co nguy hiem hay khong))
class Animal{
    constructor(name,species,color,legNum,gender){
        this.name=name
        this.species=species
        this.color=color
        this.legNum=legNum
        this.gender=gender
    }
    eat(food){
        console.log(`${this.name} an ${food}`)
    }
    keu(sound){
        console.log(`${this.name} keu ${sound} ${sound}`)
    }
    isDangerous(num){
        if(num>4||num===0){
            console.log('Co Nguy Hiem')    
        }
        else{
            console.log('Khong Nguy Hiem')
        }
        const message=(num>4||num===0? 'Co Nguy Hiem' :'Khong Nguy Hiem' )
        console.log(message)
    }
}

class Dog extends Animal{
    constructor(name,species,color,legNum,gender,sound){
        super(name,species,color,legNum,gender)
        this.sound=sound
    }
    keu(){
        console.log(`${this.sound}`)
    }

}
const conCho=new Dog('cho','cho','vang',4,'male','gau gau')
conCho.keu()

const ran=new Animal('ran','bo sat','xanh',0,'male')
ran.eat('chuot')
ran.isDangerous(ran.legNum)

class mindMap{
    //khong can khai bao new
    static sum(a,b){
        return a+b
    }
    static division(a,b){
        return a/b
    }
}

console.log (mindMap.sum(10,2))

class Employee extends Person{
    constructor(name, age, title){
        super(name,age)
        this.title=title
    }

}
const duc=new Employee('Duc',19,'Student')
console.log(duc)
duc.speak('hello')

