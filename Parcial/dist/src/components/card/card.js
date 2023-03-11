class Card extends HTMLHtmlElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
       static get  observedAttributes(){
        return['destino','duracionEnDias','costo','descripción', 'Actividades'];

    }

    connectedCallback(){
        this.render;
    }

    attributeChangedCallback(value,oldValue,NewValue){
        this[value]=newValue;
    }

    render(){
       
    }

    render(){
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./src/components/card/card.css">
        <section>
        </section>`
    }


}
    customElements.define("My-card",card);
    export default Card;