class LoadHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
			<nav>

				<div class="dropdown-header" style="flex: 0 2 50px">
					<a href="/index.html"><img
                    src="/assets/icons/favicon/favicon.ico" alt="favicon"></a>
				</div>

				<div class="dropdown-header f0 fs2" id="dropdown1">
					<p>Works</p>
                    <div class="dropdown-content" id="content1">
                        <a href="">Design</a>
                        <a href="">Other</a>
                    </div>
				</div>

				<div class="dropdown-header f0 fs2" id="dropdown2">
					<p>Guides</p>
                    <div class="dropdown-content" id="content2">
                        <a href="">Depth Map Displacement</a>
                        <a href="">BibWord</a>
                    </div>
				</div>

				<div class="dropdown-header f0 fs2" id="dropdown3">
					<p>About</p>
                    <div class="dropdown-content" id="content3">
                        <a href="">Contact</a>
                    </div>
				</div>

			</nav>
		</header>
        `;
    }
}

customElements.define("load-header", LoadHeader);