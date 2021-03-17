class myComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode : 'open' });
    }
    /* static get observedAttributes() {
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
    } */
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2><slot name="name"></slot></h2>
                <p><slot name="desc"></slot></p>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
        <style>
            ::slotted(span) {
                font-family: monospace;
            }
            ::slotted(.text-title) {
                font-size: 3rem;
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
    disconnectedCallback(){
        console.log('Me fuí');
    }
}
customElements.define('my-component', myComponent);