function setup (){
 THREE.ImageUtils.crossOrigin = '';
  
  var textura =THREE.ImageUtils.loadTexture('Humberth14.github.io/br.jpg');
  var material = new THREE.MeshBasicMaterial({map: textura});
var figura = new THREE.Shape();
figura.moveTo(10, 10);
figura.lineTo(10, 7);
figura.lineTo(14, 2);
figura.lineTo(16, 2);
figura.lineTo(20, 7);
figura.lineTo(20,10);
figura.lineTo(16,7);
figura.lineTo(15,10);
figura.lineTo(14,7);
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
