class cardProduct extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode:'open' });
    }
    static get observedAttributes() {
        return [ 'img', 'price' ];
    }
    attributeChangedCallback(attr, oldValue, newValue) {
        const changeValue = oldValue !== newValue;
        if(attr === 'img' && changeValue) {
            this.img = newValue;
        }
        if(attr === 'price' && changeValue) {
            this.price = newValue;
        }
    }
    getTemplate() {
        const template = document.createElement('template');
        const formatPrice = Intl.NumberFormat('en',{
            style: 'currency',
            currency: 'USD',
        }).format(this.price);
        template.innerHTML = `
            <section class="container">
                <section class="show-product">
                    <h1><slot name="brand"></slot></h1>
                    <figure>
                        <img src="${this.img}">
                    </figure>
                </section>
                <section class="description-product">
                    <h2><slot name="product"></slot></h2>
                    <h3><slot name="collection"></slot></h3>
                    <p><slot name="description"></slot></p>
                    <section class="buy-product">
                        <span>${formatPrice}</span>
                        <button>Buy Now</button>
                    </section>
                </section>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
            <style>
                :host {
                    --primary-color: #5a6cb2;
                    --secondary-color: #46538a;
                    --third-color: #efefef;
                    --fourth-color: gray;
                    --font-family: Arial, sans-serif;
                    --font-color: #000;
                    font-family: var(--font-family);
                    color: var(--font-color);
                }
                h1, h2, h3{
                    margin: 0;
                }
                .show-product{
                    width: 100%;
                    background: var(--primary-color);
                }
                .show-product h1{
                    font-size: 6rem;
                    text-transform: uppercase;
                    padding: 2rem 0 0 1rem;
                    color: var(--secondary-color);
                }
                .show-product figure {
                    width: 90%;
                    margin: auto;
                }
                .show-product figure img {
                    width: 100%;
                    height: 100%;
                }
                .description-product {
                    background: var(--third-color);
                    padding: 20px;
                }
                .description-product h2{
                    font-size: 3rem;
                }
                .description-product h3{
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    color: var(--fourth-color);
                }
                .description-product p{
                    font-size: 1.4rem;
                }
                .buy-product{
                    margin-top: 4rem;
                    display: flex;
                    justify-content: space-around;
                }
                .buy-product span {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: var(--fourth-color);
                }
                .buy-product button {
                    border: none;
                    outline: none;
                    border-radius: 4rem;
                    padding: 0.8rem 1rem;
                    color: var(--third-color);
                    font-weight: bold;
                    text-transform: uppercase;
                    background: var(--primary-color);
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
    disconnectedCallback() {}
}

customElements.define('card-product', cardProduct);