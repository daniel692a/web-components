class myElement extends HTMLElement{
    constructor() {
        super();
        //El mode casi siempre es open, porque nos permite mostrar lo que existe dentro de mi componente, el closed no muestra nada y no nos permite reutilizarlos
        //Al tener esta línea, nos devolverá dentro de la etiqueta template un Shadow root
        this.attachShadow({ mode: 'open'})
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>Hello World!</h2>
                <section>
                    <p>Document Fragment parce</p>
                </section>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `;
    }
    render() {
        //Necesito poner el Shadow Root porque es como generar un nuevo document
        //Engtonces ya no debo usar document, sino shadowRoot
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}
//Shadow DOM se puede entender como un DOM independiente dentro del DOM, así que lo que existe aquí, no va a existir en el DOM global
customElements.define('my-element', myElement);