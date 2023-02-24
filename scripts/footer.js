class LoadFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>&copy 2023 Yifu Ding</p>
        </footer>
        `;
    }
}

customElements.define("load-footer", LoadFooter);