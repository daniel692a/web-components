class myElement extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open'})
    }
    getTemplate() {
        const template = document.createElement('template');
        //El slot insertarpa mi contenido que le pase desde el HTML, devolviendo un text-reveal
        template.innerHTML = `
            <section>
                <h2> <slot></slot> </h2>
            </section>
        `;
        return template;
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