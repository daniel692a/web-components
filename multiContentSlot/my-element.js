class myElement extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open'});
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2> <slot name="title"></slot> </h2>
                <section>
                    <p> <slot name="description"></slot> </p>
                </section>
                <span></span>
            </section>
        `;
        return template;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define('my-element', myElement);