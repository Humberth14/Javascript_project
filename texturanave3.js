function setup (){
 THREE.ImageUtils.crossOrigin = '';
  
  var textura =THREE.ImageUtils.loadTexture('Humberth14.github.io/m2.jpg');
  var material = new THREE.MeshBasicMaterial({map: textura});
var figura = new THREE.Shape();
figura.moveTo(10, 10);
figura.lineTo(12, 10);
figura.lineTo(12, 12);
figura.lineTo(14, 12);
figura.lineTo(14, 14);
figura.lineTo(16,14);
figura.lineTo(16,16);
figura.lineTo(14,16);
figura.lineTo(14,18);
figura.lineTo(12,18);
figura.lineTo(12,20);
figura.lineTo(10,20);
figura.lineTo(10,18);
figura.lineTo(8,18);
figura.lineTo(8,16);
figura.lineTo(6,16);
figura.lineTo(6,14);
figura.lineTo(8,14);
figura.lineTo(8,12);
figura.lineTo(10,12);
figura.moveTo(10,10);


var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 0.11} );




malla = new THREE.Mesh( forma, material );

escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}
function loop() {
requestAnimationFrame(loop);

malla.rotation.x += 0;
malla.rotation.y += 0;

renderer.render(escena, camara);
}
var camara, escena, renderer, malla;
setup()
loop();
