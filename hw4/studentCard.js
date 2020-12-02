let style=`
<style>
    .student{
        font-size:20px;
        padding: 2vw 10vw;
       
    }
</style>`
export class StudentCard extends HTMLElement{
    constructor(){
        super()
        
        this._shadowDom=this.attachShadow({mode:'open'})
        this.name=this.getAttribute('name')
        this.age=this.getAttribute('age')
        this.class=this.getAttribute('lop')
        this._shadowDom.innerHTML=`
        ${style}
        <div class="student">
        <p>Họ Tên: ${this.name}</p>
        <p>Tuổi: ${this.age} </p>
        <p>Lớp: ${this.class}</p>
        </div>
        `
    }

}
window.customElements.define('student-card',StudentCard)