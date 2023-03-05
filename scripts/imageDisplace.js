{/* <script type="module" src="/scripts/displacement-depth.js"></script> */ }

import {
    printLog,
    debounce,
    throttle,
    fileHandle,
    HSLAStringToHSLA,
    HSLToHex,
} from "/scripts/global.js";

(function () {
    let pixijs = document.createElement("script");
    pixijs.src = "/scripts/pixi.js";
    pixijs.defer = true;
    document.head.appendChild(pixijs);
    pixijs.onload = function () {
        if (printLog() == true) {
            console.log("Loaded PixiJS");
        };

        const imageDisplace = function (container) {
            let imageSize = [2560, 1440];
            const scaleFactor = [100, 100];

            let canvasSize = [0, 0, imageSize[0] / imageSize[1]];
            function updateCanvasSize() {
                canvasSize[0] = Math.min(container.offsetWidth, imageSize[1] / 2);
                canvasSize[1] = canvasSize[0] / canvasSize[2];
            };
            updateCanvasSize();

            let containerBG = getComputedStyle(document.querySelector("main")).getPropertyValue("--color-bg-off");
            let containerBGHSLA = HSLAStringToHSLA(containerBG);
            let containerBGHex = HSLToHex(containerBGHSLA.h, containerBGHSLA.s, containerBGHSLA.l);

            const app = new PIXI.Application({
                background: containerBGHex,
                backgroundAlpha: containerBGHSLA.a,
                width: canvasSize[0],
                height: canvasSize[1],
            });

            const file = fileHandle(container.innerHTML);
            container.innerHTML = "";

            // app.view.id = "image-displace-" + i + "-canvas"
            app.view.style = "box-shadow: 0px 0px 10px 5px var(--color-bg-contrast);"
            container.style = "text-align: center;"
            container.appendChild(app.view);

            const baseImage = PIXI.Sprite.from(file.fileName + file.fileExtension);
            baseImage.width = canvasSize[0];
            baseImage.height = canvasSize[1];
            baseImage.transform.position.x = canvasSize[0] * - 0;
            app.stage.addChild(baseImage);

            const depthMap = PIXI.Sprite.from(file.fileName + "_depth" + file.fileExtension);
            depthMap.width = canvasSize[0];
            depthMap.height = canvasSize[1];
            app.stage.addChild(depthMap);

            const displacementFilter = new PIXI.DisplacementFilter(depthMap);
            app.stage.filters = [displacementFilter];
            displacementFilter.scale.x = 0;
            displacementFilter.scale.y = 0;

            function appResize() {
                updateCanvasSize();

                let containers = [app.view, app.renderer.screen, baseImage, depthMap];
                for (let i in containers) {
                    containers[i].width = canvasSize[0];
                    containers[i].height = canvasSize[1];
                };

                if (printLog() == true) {
                    console.log("Resized app");
                };
            };

            window.addEventListener('resize', debounce(() => appResize()));

            app.view.addEventListener("mousemove", (e) => {
                const rect = e.target.getBoundingClientRect();
                let x = Math.floor(e.clientX - rect.left);
                let y = Math.floor(e.clientY - rect.top);
                // displacementFilter.scale.x = (canvasSize[0] / 2 - x) / scaleFactor[0];
                // displacementFilter.scale.y = (canvasSize[1] / 2 - y) / scaleFactor[1];
                displacementFilter.scale.x = (x - canvasSize[0] / 2) / scaleFactor[0];
                displacementFilter.scale.y = (y - canvasSize[1] / 2) / scaleFactor[1];
            });
        };

        const init = function () {
            const images = Array.prototype.slice.call(document.getElementsByClassName("image-displace"));

            for (let i in images) {
                if (printLog() == true) {
                    console.log("Loading Displacement Filter " + i);
                };
                imageDisplace(images[i]);
            };
        };
        setTimeout(init, 250)
    };
})();