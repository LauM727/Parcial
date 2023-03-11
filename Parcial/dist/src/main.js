import * as components from "./src/components"
class Main extends HTMLElement{

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
        this.shadowRoot.innerHTML=``
    }

}

customElements.define("app-container",Main);