class myComponent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode : 'open' });
        console.log('Estoy siendo creado en memoria');
    }
    static get observedAttributes(){
        return ['msg', 'description', 'img'];
    }
    attributeChangedCallback(attr, oldValue, newValue) {
        const editValue = oldValue !== newValue;
        if(attr === 'msg' && editValue){
            this.msg = newValue;
        }
        if(attr === 'description' && editValue){
            this.description = newValue;
        }
        if(attr === 'img' && editValue){
            this.imgSrc = newValue;
        }
    }
    getTemplate() {
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
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
        console.log('Estoy en el DOM jiji');
    }
    disconnectedCallback(){
        console.log('Ya no estoy en el DOM:(');
    }
}

customElements.define('my-component', myComponent);

const removeElement = (element) => {
    setTimeout(() =>{
        element.remove()
    }, 10000);
}
const el = document.querySelector('my-component');
removeElement(el);