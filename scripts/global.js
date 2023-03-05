// Load Global Scripts

(function () {
    if (printLog() == true) {
        console.log("Loading Global")
    };

    // Favicon
    let favicon = document.createElement("link");
    favicon.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Icon")
        }
    };
    favicon.rel = "icon";
    favicon.href = "/assets/icons/favicon/favicon.ico";

    // Stylesheet
    let stylesheet = document.createElement("link");
    stylesheet.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Stylesheet")
        }
    };
    stylesheet.rel = "stylesheet";
    stylesheet.href = "/styles/global.css";

    // Blueprint CSS
    let blueprint = document.createElement("link");
    blueprint.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Blueprint CSS")
        }


        let el = document.createElement("div")
        let supportsGrid = "string" == typeof el.style.grid;

        if (!supportsGrid) {
            let blueprintFallback = document.createElement("link");
            blueprintFallback.rel = "stylesheet";
            blueprintFallback.type = "text/css";
            blueprintFallback.href = "https://unpkg.com/blueprint-css@3.0.0/dist/fallback/blueprint.min.css";
            blueprintFallback.media = "all", document.head.appendChild(blueprintFallback);

            blueprintFallback.onload = function () {
                if (printLog() == true) {
                    console.log("Loaded Blueprint Fallback CSS")
                }
            }
        }
    };
    blueprint.rel = "stylesheet";
    blueprint.href = "/styles/blueprint.min.css";

    // Header
    let header = document.createElement("script");
    header.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Header")
        }
    };
    header.src = "/scripts/header.js";
    header.defer = true;

    // Footer
    let footer = document.createElement("script");
    footer.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Footer")
        }
    };
    footer.src = "/scripts/footer.js";
    footer.defer = true;

    // Fontawesome
    let fontawesome = document.createElement("link");
    fontawesome.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Fontawesome")
        }
    };
    fontawesome.rel = "stylesheet";
    fontawesome.href = "/assets/fonts/fontawesome-free-5.13.0-web/css/all.css";

    // PixiJS
    let pixijs = document.createElement("script");
    pixijs.onload = function () {
        if (printLog() == true) {
            console.log("Loaded PixiJS")
        }
    };
    pixijs.src = "/scripts/pixi.js";
    pixijs.defer = true;

    // imageDisplay.js
    let imageDisplay = document.createElement("script");
    imageDisplay.onload = function () {
        if (printLog() == true) {
            console.log("Loaded imageDisplay.js")
        }
    };
    imageDisplay.src = "/scripts/imageDisplay.js";
    imageDisplay.type = "module";
    imageDisplay.defer = true;


    document.head.appendChild(favicon);
    document.head.appendChild(stylesheet);
    document.head.appendChild(blueprint);
    document.head.appendChild(header);
    document.head.appendChild(footer);
    document.head.appendChild(fontawesome);
    // document.head.appendChild(pixijs);
    document.head.appendChild(imageDisplay);
})()

function printLog() {
    return false;
}

function debounce(func, timeout = 100) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    };
}

function throttle(func, timeout = 100) {
    let timer = 0;
    return function () {
        let now = Date.now();
        if (timer + timeout < now) {
            timer = now;
            return func.apply(this, arguments);
        }
    };
}

function fileHandle(innerHTML) {
    const filePath = innerHTML;

    const fileNameSlice = (Math.max(0, filePath.lastIndexOf(".")) || Infinity);
    const fileName = filePath.slice(0, fileNameSlice);

    const fileNameShortSlice = (Math.max(0, fileName.lastIndexOf("/")) || Infinity) + 1;
    const fileNameShort = fileName.slice(fileNameShortSlice);

    const fileExtension = filePath.slice(fileNameSlice);
    innerHTML = "";

    return {
        "filePath": filePath,
        "fileNameSlice": fileNameSlice,
        "fileName": fileName,
        "fileNameShortSlice": fileNameShortSlice,
        "fileNameShort": fileNameShort,
        "fileExtension": fileExtension,
    }
}

function HSLAStringToHSLA(string) {
    let start = (Math.max(0, string.indexOf("(")) + 1 || Infinity);
    string = string.slice(start);
    let end = (Math.max(0, string.indexOf(",")) || Infinity);
    const h = string.slice(0, end);
    start = (Math.max(0, string.indexOf(", ")) + 2 || Infinity);
    string = string.slice(start);
    end = (Math.max(0, string.indexOf("%")) || Infinity);
    const s = string.slice(0, end);
    start = (Math.max(0, string.indexOf(", ")) + 2 || Infinity);
    string = string.slice(start);
    end = (Math.max(0, string.indexOf("%")) || Infinity);
    const l = string.slice(0, end);
    start = (Math.max(0, string.indexOf(", ")) + 2 || Infinity);
    string = string.slice(start);
    end = (Math.max(0, string.indexOf("%")) || Infinity);
    const a = string.slice(0, end) / 100;
    return {
        "h": h,
        "s": s,
        "l": l,
        "a": a,
    }
}

function HSLToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

export {
    printLog,
    debounce,
    throttle,
    fileHandle,
    HSLAStringToHSLA,
    HSLToHex,
}

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