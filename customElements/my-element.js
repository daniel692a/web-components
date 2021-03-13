const template = document.createElement('section');
template.innerHTML = `
    <style>
        .blue-text{
            font-size: 1.5rem;
            color: blue;
        }
        h1{
            font-size: 3rem;
        }
    </style>
    <p class="blue-text">Hello World</p>
    <p class="blue-text">My first Web Component</p>
    <h1>Daniel Armas</h1>
`;

//Las clases no deben tener separacion, casi siempre se utiliza camelCase
//HTMLElement es la API que nos ayuda con los custom elements
class myElement extends HTMLElement{
    constructor() {
        //Como estamos heredando de una clase necesitamos el método super
        //Aquí es donde se guarda en memoria para después agregarlos al DOM
        super();
        this.p = document.createElement('p');
    }
    connectedCallback(){
        this.p.textContent = 'Holita';
        this.append(this.p, template);
    }
}
//Ya tenemos la clase, ahora debebos definirla como una etiqueta de HTML
customElements.define('my-element', myElement);
//Con esto hecho ya podemos agregarla a nuestro HTML