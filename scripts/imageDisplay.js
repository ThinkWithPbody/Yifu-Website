import {
    printLog,
    fileHandle,
} from "/scripts/global.js";

const display = function (container, i) {
    const file = fileHandle(container.innerHTML);
    let a = `<a target="_blank" href="` + file.filePath + `"><img src="` + file.filePath + `" alt="` + file.fileNameShort + `"></a>`
    let div = `<div class="image-display-description">` + file.fileNameShort + `</div>`

    container.innerHTML = "";
    container.innerHTML += a;
    container.innerHTML += div;
};

const images = Array.prototype.slice.call(document.getElementsByClassName("image-display"));

for (let i in images) {
    if (printLog() == true) {
        console.log("Loading Image Display " + i);
    };
    display(images[i], i);
};