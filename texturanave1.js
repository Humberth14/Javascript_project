
var figura = new THREE.Shape();

figura.moveTo(10, 10);
figura.lineTo(10, 13.5);
figura.lineTo(13.5, 17);
figura.lineTo(17, 13.5);
figura.lineTo(17, 10);
figura.lineTo(13.5,14.5)
figura.moveTo(10,10);

var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 0.11} );

THREE.ImageUtils.crossOrigin = '';
var textura =THREE.ImageUtils.loadTexture('Humberth14.github.io/nave1.jpg');
var material = new THREE.MeshBasicMaterial({map: textura});
var malla = new THREE.Mesh( forma, material );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
