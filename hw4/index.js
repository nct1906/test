
import {StudentCollection} from'./studentCollection.js'
import './studentCard.js'

let lop12=new StudentCollection(12)

async function getRes(lop12){
    const res=await firebase.firestore().collection('student').get()    
    const list=getDataFromDocs(res)
    for(let student of list){
        lop12.addStudent(student)
    }
    let html=lop12.showInfo()
    document.getElementById("demo").innerHTML = `${html}`
   
    return html
}
function getData(item){ 
    let student=item.data()
    student.id=item.id   
    return student
}
function getDataFromDocs(res){
    let list=[]
    for (let item of res.docs){
       list.push( getData(item))
    }
    return list
}
getRes(lop12)






