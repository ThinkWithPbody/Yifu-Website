import {
    printLog,
    fileHandle,
} from "/scripts/global.js";

// 

const imageDisplaceDisplay = function (container) {
    const file = fileHandle(container.innerHTML);

    const dis = document.createElement("div");
    dis.classList.add("image-displace");
    dis.innerText = container.innerHTML;

    // const a = document.createElement("a");
    // a.target = "_blank";
    // a.href = file.path;
    // a.href = `javascript:void(0);`;
    // a.addEventListener(`click`, function () { modalLoad(event, a, dis, file) });
    // a.appendChild(dis);

    const desc = document.createElement("div");
    desc.classList.add("image-display-description");
    desc.innerText = file.fileNameShort;


    container.innerHTML = "";
    container.appendChild(dis);
    container.appendChild(desc);
};

const imageDisplaceDisplays = Array.from(document.getElementsByClassName("image-displace-display"));
for (let i in imageDisplaceDisplays) {
    if (printLog() == true) {
        console.log("Loading Image Displace Display " + i);
    };
    imageDisplaceDisplay(imageDisplaceDisplays[i]);
};

// 

const imageDisplay = function (container) {
    const file = fileHandle(container.innerHTML);

    const image = document.createElement(`div`);
    image.classList.add(`image`);
    image.innerText = container.innerHTML;

    const desc = document.createElement("div");
    desc.classList.add(`image-display-description`);
    desc.innerText = file.fileNameShort;


    // container.innerHTML = a;
    container.innerHTML = ``;
    container.appendChild(image);
    container.appendChild(desc);
};

// const imageDisplaceDisplays = Array.prototype.slice.call(document.getElementsByClassName("image-displace-display"));
const imageDisplays = Array.from(document.getElementsByClassName(`image-display`));
for (let i in imageDisplays) {
    if (printLog() == true) {
        console.log(`Loading Image Display ` + i);
    };
    imageDisplay(imageDisplays[i]);
};

// 

const imageLoad = function (container) {
    const file = fileHandle(container.innerHTML);

    const img = document.createElement(`img`);
    img.src = file.path;
    img.alt = file.fileNameShort;
    img.style = `width: 100%;`;

    const a = document.createElement(`a`);
    // a.target = `_blank`;
    // a.href = file.path;
    // a.href = `javascript:void(0);`;
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

const modalLoad = function (event, parent, ele, file) {
    event.preventDefault();

    const modal = document.createElement(`div`);
    modal.style = `display: block; position: fixed; z-index: 10; top: 0; left: 0; width: 100%; height: 100%; overflow: auto; background-color: var(--color-bg-contrast); background-color: hsl(var(--main-hue), 0%, 5%, 50%); overflow-y:hidden; cursor: zoom-out;`
    modal.classList.add(`modal`);
    modal.setAttribute(`bp`, `grid`);

    let modalContent = document.createElement(`div`);
    modalContent.style = `position:relative; top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); display: flex; flex-flow: column; height: max-content; padding: 10px 10px 0px 10px; background-color: var(--color-bg-off); box-shadow: 0px 0px 10px 5px var(--color-bg-contrast); cursor: default;`;
    modalContent.classList.add(`modalContent`);
    modalContent.setAttribute(`bp`, `10 offset-2`);

    let desc = document.createElement(`div`);
    desc.classList.add(`image-display-description`);
    desc.innerText = file.fileNameShort;

    let container = document.querySelector(`body`);
    modalContent.appendChild(ele.cloneNode(true));
    modalContent.appendChild(desc);
    modal.appendChild(modalContent);
    container.appendChild(modal);

    window.onclick = function (e) {
        if (e.target == modal) {
            parent.appendChild(ele);
            modal.remove();
        };
    };
};
