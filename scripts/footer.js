{/* <load-footer></load-footer> */ }

class LoadFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>&copy 2023 Yifu Ding</footer>
        `;
    }
}

customElements.define("load-footer", LoadFooter);