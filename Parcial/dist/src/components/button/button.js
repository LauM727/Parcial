import * as components from "./src/main,js"
class ButtonReserve extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render;
    }

    attributeChangedCallback(value,oldValue,NewValue){
        this[value]=newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./src/components/button/button.css">
        <section>
        </section>`
    }
}

customElements.define("button-reserve",ButtonReserve);
export default ButtonReserve;