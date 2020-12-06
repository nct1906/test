import {addDocument} from './utils.js'
const style=`
.register-container{
    width:100vw;
    height:100vh;
    background: url('https://miro.medium.com/max/11730/0*ihTZPO4iffJ8n69_');
    background-size:cover;
    display:flex;
    justify-content:flex-end;
}
#register-form{
    width:30vw;
    height:100vh;
    padding:3vw 5vh;
    background-color:#00626F;
    color:white;
    text-align:center;
}
h1{
    text-align:center;
    padding:30px 0px;
    font-size:50px;
}
input-wrapper{
  line-height:250%;
 
}

`
export class RegisterScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot=this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="register-container">
        <form id="register-form">
            <h1>Sign Up</h1>
           
            <input-wrapper type="text"id="first-name" placeholder="First Name">
            </input-wrapper>
            <input-wrapper type="text" id="last-name" placeholder="Last Name">
            </input-wrapper>
            
            <input-wrapper type="text" id="email" placeholder="Email">
            </input-wrapper>
            <input-wrapper type="password" id="password" placeholder="Password">
            </input-wrapper>
            <input-wrapper type="password" id="confirm-password" placeholder="Confirm Password">
            </input-wrapper>
            <button>Register</button>
            <input-wrapper error="hello></inputwrapper>
        </form>
        </div>
        `
        const registerForm=this._shadowRoot.getElementById('register-form')
        registerForm.addEventListener('submit',(e)=>{
            e.preventDefault()
            
            let pass
            if(this._shadowRoot.getElementById('password').value===this._shadowRoot.getElementById('confirm-password').value){
            pass=CryptoJS.MD5(this._shadowRoot.getElementById('password').value).toString()}
            let user={
            name:`${this._shadowRoot.getElementById('first-name').value} ${this._shadowRoot.getElementById('last-name').value}`,

            email:this._shadowRoot.getElementById('email').value,  
            password:pass
            }
            console.log(user)
            if(!user.name||!user.email){
                alert("Please fill in every field.")
            }
            else if(!user.password){
                alert("Password don't match.")
            }
            else{   
                addDocument(user)
                alert("Sign Up Successful!")
            }
        })
    }
}
window.customElements.define('register-screen',RegisterScreen)