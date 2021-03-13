class myTemplate extends HTMLElement{
    constructor() {
        super();
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
        //Voy a clonar el contenido de mi método del getTemplate y poder renderizarlo
        this.appendChild(this.getTemplate().content.cloneNode(true));
        //Ese true del cloneNode le dice que clone todos los anidados o que están adentro de mi template
    }
    connectedCallback(){
        this.render();
    }
}
//Un problema que tiene esto es que se pueden sobre-escribir estilos, y me genera conflictos, ahí entra el Shadow DOM
customElements.define('my-template', myTemplate);