{/* <load-header></load-header> */ }
import {
    sitePrefix,
} from "./global.js";

class LoadHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav bp="flex">
                    <div style="flex: 2 4;" bp="hide show@lg">
                        <div style="display: flex; justify-content: center;">
                            <a href="${sitePrefix}index.html" style="display: block; width: fit-content; height: 100%; "><img src="${sitePrefix}assets/icons/favicon/favicon.ico" alt="favicon" style="filter: sepia(50%) brightness(50%);"></a>
                        </div>
                    </div>
                    <div style="flex: 8 1; display: flex;">
                        

                        <div class="dropdown-header" id="dropdown1">
                            <a href="${sitePrefix}pages/architecture/architecture.html">Architecture</a>
                            <!-- <div class="dropdown-content" id="content1">
                                <a href="">Architecture1</a>
                                <a href="">Architecture2</a>
                                <a href="">Architecture3</a>
                            </div> -->
                        </div>
                        
                        <div class="dropdown-header" id="dropdown2">
                            <a href="${sitePrefix}pages/design/pano/index.html">Design</a>
                            <!-- <div class="dropdown-content" id="content2">
                                <a href="">Design1</a>
                                <a href="">Design2</a>
                                <a href="">Design3</a>
                            </div> -->
                        </div>

                        <div class="dropdown-header" id="dropdown3">
                            <a>Other</a>
                            <div class="dropdown-content" id="content3">
                            <a href="">Depth Map Displacement On The Web</a>
                            <a href="${sitePrefix}pages/other/laser-cut/laser-cut.html">Laser Cut Projects</a>
                            <a href="${sitePrefix}pages/other/blender-addons/blender-addons.html">Automate the boring stuff... with JavaScript</a>
                            <a href="${sitePrefix}pages/other/BibWord/BibWord.html">Intro To BibWord</a>
                            <a href="${sitePrefix}pages/other/apoapsis-calc/apoapsis-calc.html">Apoapsis Calculator</a>
                            </div>
                        </div>

                        <div class="dropdown-header">
                            <a href="${sitePrefix}index.html">About</a>
                        </div>

                        <div class="dropdown-header">
                            <a href="${sitePrefix}index.html">Contact</a>
                        </div>
                    </div>
                    <div style="flex: 2 4;" bp="hide show@lg"></div>

                </nav>
            </header>
        `;
    }
}

customElements.define("load-header", LoadHeader);

{/* <header>
                <nav bp="grid">
                    <div bp="1 hide show@lg">
                        <div style="display: flex; justify-content: center;">
                            <a href="/index.html" style="display: block; width: fit-content; height: 100%; "><img src="/assets/icons/favicon/favicon.ico" alt="favicon" style="filter: sepia(50%) brightness(50%);"></a>
                        </div>
                    </div>
                    <div bp="12 8@lg offset-3@lg flex">
                        

                        <div class="dropdown-header" id="dropdown1">
                            <a href="/pages/architecture/architecture.html">Architecture</a>
                            <!-- <div class="dropdown-content" id="content1">
                                <a href="">Architecture1</a>
                                <a href="">Architecture2</a>
                                <a href="">Architecture3</a>
                            </div> -->
                        </div>
                        
                        <div class="dropdown-header" id="dropdown2">
                            <a>Design</a>
                            <!-- <div class="dropdown-content" id="content2">
                                <a href="">Design1</a>
                                <a href="">Design2</a>
                                <a href="">Design3</a>
                            </div> -->
                        </div>

                        <div class="dropdown-header" id="dropdown3">
                            <a>Other</a>
                            <div class="dropdown-content" id="content3">
                            <a href="">Depth Map Displacement On The Web</a>
                            <a href="/pages/other/laser-cut/laser-cut.html">Laser Cut Projects</a>
                            <a href="/pages/other/blender-addons/blender-addons.html">Automating the boring stuff... with JavaScript</a>
                            <a href="/pages/other/BibWord/BibWord.html">Intro To BibWord</a>
                            <a href="/pages/other/apoapsis-calc/apoapsis-calc.html">Apoapsis Calculator</a>
                            </div>
                        </div>

                        <div class="dropdown-header">
                            <a href="/index.html">About</a>
                        </div>

                        <div class="dropdown-header">
                            <a href="/index.html">Contact</a>
                        </div>
                    </div>
                </nav>
            </header> */}