class myComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode : 'open' });
    }
    static get observedAttributes() {
        return [ 'msg', 'description' ];
    }
    attributeChangedCallback(attr, oldValue, newValue) {
        const changeValue = oldValue !== newValue;
        if(attr === 'msg' && changeValue) {
            this[attr] = newValue;
        }
        if(attr === 'description' && editValue) {
            this[attr] = newValue;
        }
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2><slot name="text-title"></slot></h2>
                <p><slot name="text-desc"></slot></p>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        //El host sería el root de nuestro componente
        return `
            <style>
                :host {
                    --primary-color: rgba(200, 100, 50, 0.5);
                    --secondary-color: salmon;
                    --title-size: 2.5rem;
                    --paragraph-size: 1.5rem;
                    --radius: 2rem;
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;
                    font-family: monospace;
                }
                section {
                    background: var(--primary-color);
                    border-radius: var(--radius);
                }
                section h2 {
                    font-size: var(--title-size);
                }
                section p{
                    font-size: var(--paragraph-size);
                }
            </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
    disconnectedCallback() {
        console.log('Bye');
    }
}

customElements.define('my-component', myComponent);