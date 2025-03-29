
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  transparent: true
});
document.getElementById('hero').appendChild(app.view);

const image = new PIXI.Sprite.from('imagens/sua-imagem.jpg'); // Substitua pelo caminho da sua imagem
image.width = app.screen.width;
image.height = app.screen.height;
app.stage.addChild(image);

const displacementSprite = new PIXI.Sprite.from('imagens/mapa-de-distorcao.png'); // Substitua pelo caminho do seu mapa de distorção
const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
app.stage.addChild(displacementSprite);
app.stage.filters = [displacementFilter];

displacementSprite.scale.x = 0;
displacementSprite.scale.y = 0;

window.addEventListener('resize', () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
  image.width = app.screen.width;
  image.height = app.screen.height;
});

document.getElementById('container').addEventListener('mouseover', () => {
  displacementSprite.scale.x = 50;
  displacementSprite.scale.y = 50;
});

document.getElementById('container').addEventListener('mouseout', () => {
  displacementSprite.scale.x = 0;
  displacementSprite.scale.y = 0;
});

