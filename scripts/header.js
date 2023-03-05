{/* <load-header></load-header> */ }

class LoadHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header bp="grid gap-none">
			<nav bp="8 offset-3 grid gap-none">
                <div bp="8 flex">
                    <div bp="1" class="dropdown-header">
					    <a href="/index.html"><img src="/assets/icons/favicon/favicon.ico" alt="favicon"></a>
				    </div>

				<div bp="3 fit" class="dropdown-header" id="dropdown1">
                    <a href="">Architecture</a>
                    <div class="dropdown-content" id="content1">
                        <a href="">Architecture1</a>
                        <a href="">Architecture2</a>
                        <a href="">Architecture3</a>
                    </div>
				</div>
                
                <div bp="2 fit" class="dropdown-header" id="dropdown2">
                    <a href="">Design</a>
                    <div class="dropdown-content" id="content2">
                        <a href="">Design1</a>
                        <a href="">Design2</a>
                        <a href="">Design3</a>
                    </div>
				</div>

				<div bp="2 fit" class="dropdown-header" id="dropdown3">
					<a href="">Other</a>
                    <div class="dropdown-content" id="content3">
                        <a href="">BibWord</a>
                        <a href="">Depth Map Displacement</a>
                        <a href="/pages/other/apoapsis-calc/apoapsis-calc.html">Apoapsis Calculator</a>
                        <a href="/pages/other/trusted/trusted.html">Trusted Names</a>
                    </div>
				</div>

                </div>
                <div bp="4">
                    <div bp="grid">
                        <div bp="4 offset-5">
                            <a href="">About</a>
                        </div>
                        <div bp="4">
                            <a href="">Contact</a>
                        </div>
                    </div>
                </div>
			</nav>
		</header>
        `;
    }
}

customElements.define("load-header", LoadHeader);