async function getOneDocument(){
    //promise
    //const res=firebase.firestore().collection('users').doc('93gmjocDGbdrB6ir06cr').get().then(res=>{
        //console.log(res)})
    //console.log(res)
    //async await
    const res=await firebase.firestore().collection('users').doc('93gmjocDGbdrB6ir06cr').get()
    const user=res.data()
    user.id=res.id
    console.log(user)
    
}

//getOneDocument()
async function getManyDocument(){
    const res=await firebase.firestore().collection('users').get()
    //console.log(res)
   const user=getDataFromDocs(res)
   
    
}
getManyDocument()

//add document
export function addDocument(data){
    
    firebase.firestore().collection('users').add(data)
}
//addDocument()

//update document
function updateDocument(){
    const docId='93gmjocDGbdrB6ir06cr'
    const data={
        
        phone:firebase.firestore.FieldValue.arrayUnion('0904')
    }
    firebase.firestore().collection('users').doc(docId).update(data)
}
//updateDocument()

//delete document
function deleteDocument(){
    const docId="93gmjocDGbdrB6ir06cr"
    firebase.firestore().collection('users').doc(docId).delete()
}
//deleteDocument()
export function getDataFromDoc(doc){
    const data=doc.data()
    data.id=doc.id
    return data
}
//lay du lieu tu get many document
export function getDataFromDocs(data){
    // const docs=data.docs
    // const listRes=[]
    // for(const item of docs){
       
    //     listRes.push(getDataFromDoc(item))
        

    // }
    
    // return listRes
    return data.docs.map(getDataFromDoc)
}