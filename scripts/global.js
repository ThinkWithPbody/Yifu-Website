// Global Exports
const sitePrefix = `/Yifu-Website/`;
// const sitePrefix = `/~zishuo.li/`;

function printLog() {
    return false;
};

function debounce(func, timeout = 100) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args) }, timeout);
    };
};

function throttle(func, timeout = 100) {
    let timer = 0;
    return function () {
        let now = Date.now();
        if (timer + timeout < now) {
            timer = now;
            return func.apply(this, arguments);
        };
    };
};

function fileHandle(string) {
    let path = string;
    if (path.charAt(0) === '/') {
        path = sitePrefix + path.slice(1);
    };
    const filePathSlice = (Math.max(0, path.lastIndexOf(".")) || Infinity);
    const filePath = path.slice(0, filePathSlice);
    const fileExtension = path.slice(filePathSlice);

    // const fileNameSlice = (Math.max(0, filePath.lastIndexOf("/")) || Infinity) + 1;
    const fileNameSlice = (Math.max(0, filePath.lastIndexOf("/")) || 0) + 1;
    const fileName = filePath.slice(fileNameSlice);

    return {
        "path": path,
        "filePath": filePath, // filePath
        "filePathSlice": filePathSlice, // fileNameSlice
        "fileName": fileName, // fileName
        "fileNameSlice": fileNameSlice, // fileNameShortSlice
        "fileExtension": fileExtension,
    };
};

function toTitleCase(string) {
    // Replace dashes and underscores with spaces
    const stringWithSpaces = string.replace(/[-_]/g, " ");

    // Convert the string to title case
    return stringWithSpaces.replace(/\w\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
};

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
    };
};

function HSLToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
};



// Global Scripts
(function () {
    if (printLog() == true) {
        console.log("Loading Global");
    };

    // Meta
    let meta = document.createElement("meta");
    meta.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Meta");
        };
    };
    meta.name = "viewport";
    meta.content = "width=device-width,initial-scale=1,minimum-scale=1";

    // Favicon
    let favicon = document.createElement("link");
    favicon.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Icon");
        };
    };
    favicon.rel = "icon";
    favicon.href = sitePrefix + "assets/icons/favicon/favicon.ico";

    // Stylesheet
    let stylesheet = document.createElement("link");
    stylesheet.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Stylesheet");
        };
    };
    stylesheet.rel = "stylesheet";
    stylesheet.href = sitePrefix + "styles/global.css";

    // Blueprint CSS
    let blueprint = document.createElement("link");
    blueprint.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Blueprint CSS");
        };


        let ele = document.createElement("div");
        let supportsGrid = "string" == typeof ele.style.grid;

        if (!supportsGrid) {
            let blueprintFallback = document.createElement("link");
            blueprintFallback.rel = "stylesheet";
            blueprintFallback.type = "text/css";
            blueprintFallback.href = "https://unpkg.com/blueprint-css@3.0.0/dist/fallback/blueprint.min.css";
            blueprintFallback.media = "all", document.head.appendChild(blueprintFallback);

            blueprintFallback.onload = function () {
                if (printLog() == true) {
                    console.log("Loaded Blueprint Fallback CSS");
                };
            };
        };
    };
    blueprint.rel = "stylesheet";
    blueprint.href = sitePrefix + "styles/blueprint.min.css";

    // Header
    let header = document.createElement("script");
    header.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Header");
        };
    };
    header.src = sitePrefix + "scripts/header.js";
    header.type = "module";
    header.defer = true;

    // Footer
    let footer = document.createElement("script");
    footer.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Footer");
        };
    };
    footer.src = sitePrefix + "scripts/footer.js";
    footer.type = "module";
    footer.defer = true;

    // Fontawesome
    let fontawesome = document.createElement("link");
    fontawesome.onload = function () {
        if (printLog() == true) {
            console.log("Loaded Fontawesome");
        };
    };
    fontawesome.rel = "stylesheet";
    fontawesome.href = sitePrefix + "assets/fonts/fontawesome-free-6.3.0-web/css/all.min.css";

    // PixiJS
    let pixijs = document.createElement("script");
    pixijs.onload = function () {
        if (printLog() == true) {
            console.log("Loaded PixiJS");
        };
    };
    pixijs.src = sitePrefix + "scripts/pixi.js";
    pixijs.defer = true;

    // imageDisplay.js
    let imageDisplay = document.createElement("script");
    imageDisplay.onload = function () {
        if (printLog() == true) {
            console.log("Loaded imageDisplay.js");
        };
    };
    imageDisplay.src = sitePrefix + "scripts/imageDisplay.js";
    imageDisplay.type = "module";
    imageDisplay.defer = true;

    // prism.js
    let prismjs = document.createElement("script");
    prismjs.onload = function () {
        if (printLog() == true) {
            console.log("Loaded prism.js");
        };
    };
    prismjs.src = sitePrefix + "scripts/prism.js";

    // prism.css
    let prismcss = document.createElement("link");
    prismcss.onload = function () {
        if (printLog() == true) {
            console.log("Loaded prism.css");
        };
    };
    prismcss.rel = "stylesheet";
    prismcss.href = sitePrefix + "styles/prism.css";

    document.head.appendChild(meta);
    document.head.appendChild(favicon);
    document.head.appendChild(stylesheet);
    document.head.appendChild(blueprint);
    document.head.appendChild(header);
    document.head.appendChild(footer);
    document.head.appendChild(fontawesome);
    // document.head.appendChild(pixijs);
    document.head.appendChild(imageDisplay);
    document.head.appendChild(prismjs);
    document.head.appendChild(prismcss);
})();


// Global Init

(function () {
    // Replace <title> with file name if empty
    if (document.querySelector(`title`).innerHTML == ``) {
        document.querySelector(`title`).innerHTML = toTitleCase(fileHandle(window.location.pathname).fileName);
    };

    const loading = {};
    loading.slide = false;
    loading.animation = 500;
    loading.in = 250;
    loading.out = 0;

    function loadingHide() {
        if (loading.slide) {
            let eleLoading = document.querySelector(`#loading`);
            eleLoading.style.setProperty(`transition-duration`, `0s`);
            eleLoading.style.setProperty(`-webkit-transform`, `translateY(100%)`);
            eleLoading.style.setProperty(`-ms-transform`, `translateY(100%)`);
            eleLoading.style.setProperty(`transform`, `translateY(100%)`);

            window.transitionToPage = function (href, eleLoading) {
                eleLoading.style.setProperty(`transition-duration`, `0.5s`);
                eleLoading.style.setProperty(`-webkit-transform`, `translateY(0%)`);
                eleLoading.style.setProperty(`-ms-transform`, `translateY(0%)`);
                eleLoading.style.setProperty(`transform`, `translateY(0%)`);
                setTimeout(function () {
                    window.location.href = href;
                }, loading.animation + loading.out);
            };

            const a = Array.from(document.getElementsByTagName(`a`));
            for (let i in a) {
                if (a[i].href !== ``) {
                    let href = a[i].href;
                    a[i].onclick = function (event) { event.preventDefault(); };
                    a[i].addEventListener(`click`, function () { transitionToPage(href, eleLoading) });
                    // a[i].href = `javascript:void(0);`;
                };
            };
        } else {
            document.querySelector(`#loading`).remove();
        };
    };
    function loadingIn() {
        loading.slide ? document.querySelector(`#loading`).style.cssText += `-webkit-transform: translateY(-100%); -ms-transform: translateY(-100%); transform: translateY(-100%);` : null;
        let delay = loading.slide ? loading.animation : 0;
        setTimeout(loadingHide, delay);
    };
    window.addEventListener('pageshow', function (event) {
        let delay = loading.slide ? loading.in : 0;
        setTimeout(loadingIn, delay);
    });
})();

export {
    sitePrefix,
    printLog,
    debounce,
    throttle,
    fileHandle,
    HSLAStringToHSLA,
    HSLToHex,
};

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

// Prevent Unload
// window.onbeforeunload = function () {
//     return true;
// };