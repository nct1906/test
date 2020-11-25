class Student{
    constructor(age,name,home){
        this.age=age
        this.name=name
        this.home=home
    }
    showInfo(){
        console.log(`Họ tên: ${this.name} 
    Tuổi: ${this.age} 
    Lớp: ${this.class}
    Quê quán: ${this.home}`)
    }
}

class StudentCollection {
    constructor(className){
        this.className=className
        this.listStudent=[]
    }
    addStudent(student){
        student.class=this.className
        this.listStudent.push(student)   
    }
    showByAge(age){
        let result=this.listStudent.filter(stu=>{return stu.age===age})
        this.showResult(result,age)
    }
    findByName(name){
        let result=this.listStudent.filter(stu=>{return stu.name===name})
        this.showResult(result,name)
    }
    countByAgeHome(age,home){
        let i=0
        for(let stu of this.listStudent){
            
            i=(stu.age===age&&stu.home===home? i+1:i)
        }
        console.log(`Số học sinh có tuổi ${age} và quê ${home} là: ${i}`)    
    }
    showResult(result,criteria){
        console.log('Danh sách các học sinh có',typeof criteria==='number'?`tuổi là ${criteria}: `:`tên là ${criteria}: `)
        for(let i of result){
            console.log(`Họ tên: ${i.name} 
        Tuổi: ${i.age} 
        Lớp: ${i.class}
        Quê quán: ${i.home}`)
        }
    }
    

}

const stu1=new Student(15,'Đỗ Mỹ Linh','Hà Nội')
const stu2= new Student(17,'Phạm Đình Hổ','Hà Nội')
const stu3= new Student(15,'Nguyễn Chí Thanh','Nam Định')

const class12=new StudentCollection('12A3')
class12.addStudent(stu1)
class12.addStudent(stu2)
class12.addStudent(stu3)

stu1.showInfo()
stu2.showInfo()
stu3.showInfo()

class12.countByAgeHome(19,'Nam Định')
class12.countByAgeHome(15,'Hà Nội')
class12.showByAge(15)
class12.findByName('Nguyễn Chí Thanh')
