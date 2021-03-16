class myComponent extends HTMLElement{
    //Creación en memoria
    constructor() {
        super();
        this.attachShadow({ mode : 'open' });
    }
    //Creación de un observer para decirle que atributos son de mi componente
    static get observedAttributes () {
        //En el array van el nombre de mis atributos, si al llamarlo desde HTML pasó uno diferente, el observer no lo tendrá en cuenta
        return ['msg', 'description', 'img'];
    }
    //Manera correcta de conectar los atributos a mi componente, ya que es parte de su ciclo de vida
    attributeChangedCallback(attr, oldValue, newValue) {
        const editValue = oldValue !== newValue;
        if(attr === 'msg' && editValue) {
            this.msg = newValue;
        }
        if(attr === 'description' && editValue) {
            this.description = newValue;
        }
        if(attr === 'img' && editValue) {
            this.imgSrc = newValue;
        }
    }
    //Cosntrucción del template para mi componente
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
    //Clonar el contenido del template para poder utilizar el template
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    //Mostrar en el DOM
    connectedCallback(){
        this.render();
    }
}
//Crear un tag de HTML con mi clase
customElements.define('my-component', myComponent);