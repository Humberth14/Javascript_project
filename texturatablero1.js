function setup (){
THREE.ImageUtils.crossOrigin = '';
var textura =THREE.ImageUtils.loadTexture('Humberth14.github.io/espacio.jpg');
var material = new THREE.MeshBasicMaterial({map: textura});
var forma = new THREE.BoxGeometry(100,100,100);
malla = new THREE.Mesh(forma, material);


escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
camara.position.z = 50

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.125, window.innerHeight*.125);
document.body.appendChild(renderer.domElement);
}

function loop() {
renderer.render(escena, camara);
}
var camara, escena, renderer, malla;
setup()
loop();
