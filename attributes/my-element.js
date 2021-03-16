class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode : 'open' });
        //Obtener atributos
        this.msg = this.getAttribute('msg');
        this.description = this.getAttribute('description');
        this.imgSrc = this.getAttribute('img');
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>${this.msg}</h2>
                <p>${this.description}</p>
                <img src="${this.imgSrc}"/>
            </section>
        `;
        return template;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('my-element', myElement);