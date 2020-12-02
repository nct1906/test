class User{
    name;
    age;
    gender;
    desc;
    img;
    constructor(name,age,gender,desc,img){
        this.name=name
        this.age=age
        this.gender=gender
        this.desc=desc
        this.img=img
    }
    like(){

    }
    unike(){

    }
    update(name,age,gender,desc,img){
        this.name=name
        this.age=age
        this.gender=gender
        this.desc=desc
        this.img=img
    }
    toHTML(){
        return` 

            <div class="user-container"> 
                <div class="previous">
                    <
                </div>
                <img src="${this.img}"/>
                <div class="info">
                    ${this.name}
                    ${this.age}
                    ${this.gender}
                    ${this.desc}
                </div>
                <div class="next">
                    >
                </div>
            </div>
        `
    }
}
class UserCollection{
    listUser;
    current=0;
    constructor(){
        this.listUser=[]
    }
    addUser(user){
        this.listUser.push(user)
        console.log(this.listUser)
    }
    removeUser(index){
        this.listUser.splice(index,1)
    }
    show(){
        document.querySelector('#app').innerHTML=this.listUser[this.current].toHTML()
        
        this.listenUserClick()

    }
    
    previous(){
        if(this.current>0){
            this.current--
            
            this.show()

        }
    }
    next(){
        if(this.current<this.listUser.length-1){
            this.current++
            
            this.show()
            console.log(this.current)

        }
    }
    listenUserClick(){
        document.querySelector('.previous').addEventListener('click',() => {
           userCollection.previous()
        }
        )
        document.querySelector('.next').addEventListener('click',() => {
            console.log('hello')
            userCollection.next()
        }
        )
    }
}
const userCollection=new UserCollection()
const user1=new User('abc',18,'male','thich cho meo','https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png')
const user2=new User('asdhgad',20,'female','thich doc sach','https://image.freepik.com/free-vector/user-avatars-pack_23-2147502629.jpg')
userCollection.addUser(user1)
userCollection.addUser(user2)
userCollection.show()
