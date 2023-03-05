import {
    printLog,
    fileHandle,
} from "/scripts/global.js";

// 

const imageDisplaceDisplay = function (container) {
    let file = fileHandle(container.innerHTML);

    let divDis = document.createElement("div");
    divDis.classList.add("image-displace");
    divDis.innerText = container.innerHTML;

    let a = document.createElement("a");
    a.target = "_blank";
    a.href = file.filePath;
    a.appendChild(divDis);

    let div = document.createElement("div");
    div.classList.add("image-display-description");
    div.innerText = file.fileNameShort;


    container.innerHTML = "";
    container.appendChild(a);
    container.appendChild(div);
};

const imageDisplaceDisplays = Array.prototype.slice.call(document.getElementsByClassName("image-displace-display"));
for (let i in imageDisplaceDisplays) {
    if (printLog() == true) {
        console.log("Loading Image Displace Display " + i);
    };
    imageDisplaceDisplay(imageDisplaceDisplays[i]);
};

// 

const imageDisplay = function (container) {
    let file = fileHandle(container.innerHTML);

    let image = document.createElement(`div`);
    image.classList.add(`image`);
    image.innerText = container.innerHTML;

    let desc = document.createElement("div");
    desc.classList.add(`image-display-description`);
    desc.innerText = file.fileNameShort;


    // container.innerHTML = a;
    container.innerHTML = ``;
    container.appendChild(image);
    container.appendChild(desc);
};

// const imageDisplaceDisplays = Array.prototype.slice.call(document.getElementsByClassName("image-displace-display"));
const imageDisplays = Array.prototype.slice.call(document.getElementsByClassName(`image-display`));
for (let i in imageDisplays) {
    if (printLog() == true) {
        console.log(`Loading Image Display ` + i);
    };
    imageDisplay(imageDisplays[i]);
};

// 

const imageLoad = function (container) {
    let file = fileHandle(container.innerHTML);

    let img = document.createElement(`img`);
    img.src = file.filePath;
    img.alt = file.fileNameShort;
    img.style = `width: 100%;`;

    let a = document.createElement(`a`);
    a.target = `_blank`;
    a.href = file.filePath;
    a.addEventListener(`click`, function () { modalLoad(event, a, img, file) });
    a.appendChild(img);

    container.innerHTML = ``;
    container.appendChild(a);
};

const images = Array.from(document.getElementsByClassName(`image`));
for (let i in images) {
    if (printLog() == true) {
        console.log(`Loading Image ` + i);
    };
    imageLoad(images[i]);
};

//

const modalLoad = function (e, parent, ele, file) {
    console.log(e, parent, ele, file)
    e.preventDefault();

    const modal = document.createElement(`div`);
    modal.style = `display: block; position: fixed; z-index: 10; top: 0; left: 0; width: 100%; height: 100%; overflow: auto; background-color: var(--color-bg-contrast); background-color: hsl(var(--main-hue), 0%, 5%, 50%)`
    modal.setAttribute(`bp`, `grid`);

    let modalContent = document.createElement(`div`);
    modalContent.style = `position:relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); height: max-content;padding: 10px 10px 0px 10px; background-color: var(--color-bg-off); box-shadow: 0px 0px 10px 5px var(--color-bg-contrast)`;
    modalContent.setAttribute(`bp`, `10 offset-2`);

    let desc = document.createElement(`div`);
    desc.classList.add(`image-display-description`);
    desc.innerText = file.fileNameShort;

    let container = document.querySelector(`body`);
    modalContent.appendChild(ele);
    modalContent.appendChild(desc);
    modal.appendChild(modalContent);
    container.appendChild(modal);

    window.onclick = function (event) {
        if (event.target == modal) {
            parent.appendChild(ele);
            modal.remove();
        }
    }
}
