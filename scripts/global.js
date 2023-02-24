var printLog = true;


// Load Global Scripts

function loadGlobal() {
    // Stylesheet
    let stylesheet = document.createElement("link");
    stylesheet.onload = function () {
        if (printLog == true) {
            console.log("Loaded Stylesheet")
        }
    };
    stylesheet.rel = "stylesheet";
    stylesheet.href = "/styles/global.css";

    // Header
    let header = document.createElement("script");
    header.onload = function () {
        if (printLog == true) {
            console.log("Loaded Header")
        }
    };
    header.src = "/scripts/header.js";
    header.defer = true;

    // Footer
    let footer = document.createElement("script");
    footer.onload = function () {
        if (printLog == true) {
            console.log("Loaded Footer")
        }
    };
    footer.src = "/scripts/footer.js";
    footer.defer = true;

    // Favicon
    let favicon = document.createElement("link");
    favicon.onload = function () {
        if (printLog == true) {
            console.log("Loaded Icon")
        }
    };
    favicon.rel = "icon";
    favicon.href = "/assets/icons/favicon/favicon.ico";

    // Fontawesome
    let fontawesome = document.createElement("link");
    fontawesome.onload = function () {
        if (printLog == true) {
            console.log("Loaded Fontawesome")
        }
    };
    fontawesome.rel = "stylesheet";
    fontawesome.href = "/assets/fonts/fontawesome-free-5.13.0-web/css/all.css";

    // PixiJS
    let pixijs = document.createElement("script");
    pixijs.onload = function () {
        if (printLog == true) {
            console.log("Loaded PixiJS")
        }
    };
    pixijs.src = "/scripts/pixi.js";
    pixijs.defer = true;

    document.head.appendChild(stylesheet);
    document.head.appendChild(header);
    document.head.appendChild(footer);
    document.head.appendChild(favicon);
    document.head.appendChild(fontawesome);
    // document.head.appendChild(pixijs);
}

loadGlobal();

// Append scripts

// Nesting javascript
// https://stackoverflow.com/a/14521482

// https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
// connectedCallback() {
//     this.innerHTML = `
//           <style>
//             nav {
//               height: 40px;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               background-color:  #0a0a23;
//             }

//             ul {
//               padding: 0;
//             }

//             a {
//               font-weight: 700;
//               margin: 0 25px;
//               color: #fff;
//               text-decoration: none;
//             }

//             a:hover {
//               padding-bottom: 5px;
//               box-shadow: inset 0 -2px 0 0 #fff;
//             }
//           </style>
//           <header>
//             <nav>
//               <ul>
//                 <li><a href="about.html">About</a></li>
//                 <li><a href="work.html">Work</a></li>
//                 <li><a href="contact.html">Contact</a></li>
//               </ul>
//             </nav>
//           </header>
//         `;
// }
// customElements.define("component-footer", Component);
// Optional third argument to inherit from: {extends: "p" }