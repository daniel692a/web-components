class myComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode : 'open' });
    }
    static get observedAttributes() {
        return [ 'msg', 'description' ];
    }
    attributeChangedCallback(attr, oldValue, newValue) {
        const editValue = oldValue !== newValue;
        if(attr === 'msg' && editValue) {
            this.msg = newValue;
        }
        if(attr === 'description' && editValue) {
            this.description = newValue;
        }
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>${this.msg}</h2>
                <p>${this.description}</p>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width:450px;
                    font-size: 1.2rem;
                    background: rgba(165, 161, 175, 0.5);
                    border-radius: 10px;
                }
                :host(.blue) {
                    background: rgba(100, 190, 234, 0.5);
                }
                :host(.blue) h2, :host(.blue) p {
                    font-family: Arial, sans-serif;
                }
                :host([yellow]) {
                    background: rgba(234, 232, 100, 0.5);
                }
                :host-context(article.card){
                    display: block;
                    max-width: 100%;
                }
            </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
    disconnectedCallback() {
        console.log('Bye');
    }
}

customElements.define('my-component', myComponent);