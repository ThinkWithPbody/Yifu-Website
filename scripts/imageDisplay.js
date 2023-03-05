import {
    printLog,
    fileHandle,
} from "/scripts/global.js";

const imageLoad = function (container) {
    let file = fileHandle(container.innerHTML);
    let img = `<img src="` + file.filePath + `" alt="` + file.fileNameShort + `" style="width: 100%;">`;
    let a = `<a target="_blank" href="` + file.filePath + `">` + img + `</a>`

    container.innerHTML = a;
    return file;
};

const images = Array.prototype.slice.call(document.getElementsByClassName("image"));
for (let i in images) {
    if (printLog() == true) {
        console.log("Loading Image " + i);
    };
    imageLoad(images[i]);
};

const imageDisplay = function (container) {
    let file = fileHandle(container.innerHTML);
    // let a = `<a target="_blank" href="` + file.filePath + `"><img src="` + file.filePath + `" alt="` + file.fileNameShort + `"></a>`;
    // let a = <a></a>;
    let img = `<img src="` + file.filePath + `" alt="` + file.fileNameShort + `" style="width: 100%;">`;
    let d = `<a target="_blank" href="` + file.filePath + `"><div class="image-displace">` + file.filePath + `</div></a>`;
    let a = `<a target="_blank" href="` + file.filePath + `">` + img + `</a>`
    let div = `<div class="image-display-description">` + file.fileNameShort + `</div>`;
    

    container.innerHTML = a;
    container.innerHTML += div;
};

// const imageDisplaceDisplays = Array.prototype.slice.call(document.getElementsByClassName("image-displace-display"));


const imageDisplays = Array.prototype.slice.call(document.getElementsByClassName("image-display"));
for (let i in imageDisplays) {
    if (printLog() == true) {
        console.log("Loading Image Display " + i);
    };
    imageDisplay(imageDisplays[i]);
};