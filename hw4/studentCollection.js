
export class StudentCollection {  
    constructor(className){
        this.className=className
        this.listStudent=[]
    }
    addStudent(student){    
        student.class=this.className
        this.listStudent.push(student)        
    }
    showInfo(){
        let html=''
        for(let student of this.listStudent){
            html+=`<student-card name="${student.name}" lop="${student.class}" age="${student.age}"></student-card>`
        }
        return html
    }
}