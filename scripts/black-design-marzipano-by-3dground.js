// <script type="module" src="../../../scripts/black-design-marzipano-by-3dground.js"></script>

const sitePrefix = `/~zishuo.li/`;

let blackDesign = document.createElement("style");
blackDesign.innerHTML = `
#titleBar {
    right: 0;
    height: 60px;
}

.mobile #titleBar {
    right: 0;
}

body.fullscreen-enabled #titleBar {
    right: 0;
}

body.multiple-scenes #titleBar {
    left: 0;
}

body.multiple-scenes.mobile #titleBar {
    left: 0;
}

#titleBar .sceneName {
    line-height: 60px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.28) 100%);
    text-shadow: 0px 0px 8px black;

    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
}

#sceneListToggle, #autorotateToggle {
    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;

    background-color: unset;
}

#sceneListToggle {
    position: relative;
}

#sceneListToggle .icon {
    position: inherit;
    top: inherit;
    right: inherit;
}

#autorotateToggle .icon {
    position: relative;
    top: unset;
    right: unset;
}

#sceneList {
    top: 3px;
    padding-top: 52px;
    background-color: black;
    border-radius: 6px;
    
    background-color: hsl(0, 0%, 0%, 50%);
    width: unset;
    min-width: 100px;
    max-width: 300px;
}

#sceneList .scenes {
    // background-color: hsl(0, 0%, 0%, 20%);
    background-color: unset;
    border-radius: 6px;
}

#sceneList.enabled {
    margin-left: 223px;
}

#sceneList .scene {
    height: 60px;
}

#sceneList .scene .text {
    line-height: 60px;
}

.mobile #sceneList .scene .text {
    line-height: 60px;
}

.no-touch #sceneList .scene:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

#sceneList .scene.current {
    background-color: rgba(255, 255, 255, 0.1);
}

.link-hotspot {
    width: 40px;
    height: 40px;
}

.mobile .link-hotspot {
    width: 45px;
    height: 45px;
}

.link-hotspot-tooltip {
    top: 2px;
    /* ( 60 - (16 + 2*8) ) / 2 */
    background-color: black;
}
`;

let blackDesignIcon = document.createElement("link");
blackDesignIcon.rel = "shortcut icon";
blackDesignIcon.type = "image/x-icon";
blackDesignIcon.sizes = "16x16 32x32 48x48 64x64";
blackDesignIcon.href = sitePrefix + "assets/icons/pano/pano.svg";

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = sitePrefix + "assets/icons/favicon/favicon.ico";

document.head.appendChild(blackDesign);
document.head.appendChild(blackDesignIcon);
document.head.appendChild(favicon);

// document.querySelector("#sceneListToggle img.icon off").src = sitePrefix + "assets/icons/pano/menu.svg";
// document.querySelector("#sceneListToggle img.icon on").src = sitePrefix + "assets/icons/pano/close.svg";

if (document.querySelector("#sceneList ul.scenes")) { document.querySelector("#sceneList ul.scenes").innerHTML = ""; };

// document.title = APP_DATA.name;

// let el = document.querySelector('#sceneList ul');

// APP_DATA.scenes.forEach(i => {
//     let a = document.createElement('a');
//     let li = document.createElement('li');

//     a.classList.add('scene');
//     a.setAttribute('data-id', i.id);
//     a.setAttribute('href', 'javascript:void(0)');

//     li.classList.add('text');
//     li.innerHTML = i.name;

//     a.appendChild(li);
//     el.appendChild(a);
// });