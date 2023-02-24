const IMG_WIDTH = 300;
const IMG_HEIGHT = 381;
const SCALE_FACTOR = 25;

const app = new PIXI.Application({
  width: IMG_WIDTH, 
  height: IMG_HEIGHT
});
const container = document.getElementById("test_app");

container.appendChild(app.view);

const img = new PIXI.Sprite.from("");
img.width = IMG_WIDTH;
img.height = IMG_HEIGHT;
app.stage.addChild(img);

depthMap = new PIXI.Sprite.from("");
depthMap.width = IMG_WIDTH;
depthMap.height = IMG_HEIGHT;
app.stage.addChild(depthMap);

displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

container.addEventListener("mousemove", (e) => {
  displacementFilter.scale.x = (IMG_WIDTH / 2 - e.clientX) / SCALE_FACTOR;
  displacementFilter.scale.y = (IMG_HEIGHT / 2 - e.clientY) / SCALE_FACTOR;
})