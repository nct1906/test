class InputWrapper extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot=this.attachShadow({mode:'open'})

    }
    connectedCallback(){
        this.type=this.getAttribute('type')
        this.placeholder=this.getAttribute('placeholder')
        this.error=this.getAttribute('error')
        this._shadowRoot.innerHTML=`
            <div>
                <input id="input-main" type="${this.type}" placeholder="${this.placeholder}">

                
                <div class="error">
                
                </div>
            </div>
        `
    }
  
    //getter
    get value(){
        const value=this._shadowRoot.getElementById('input-main').value
        return value
    }

}
window.customElements.define('input-wrapper',InputWrapper)