function newGame(scene){
var letterMaterial = new THREE.LineBasicMaterial( { color: 0x1ffaff} );
var letterGeometry = new THREE.Geometry();
letterGeometry.vertices.push(new THREE.Vector3(0,0,0));
letterGeometry.vertices.push(new THREE.Vector3(0,5,0));
letterGeometry.vertices.push(new THREE.Vector3(0,5,0));
letterGeometry.vertices.push(new THREE.Vector3(2,0,0));
letterGeometry.vertices.push(new THREE.Vector3(2,0,0));
letterGeometry.vertices.push(new THREE.Vector3(2,5,0));
letterGeometry.vertices.push(new THREE.Vector3(3,0,0));
letterGeometry.vertices.push(new THREE.Vector3(3,5,0));
letterGeometry.vertices.push(new THREE.Vector3(3,5,0));
letterGeometry.vertices.push(new THREE.Vector3(5,5,0));
letterGeometry.vertices.push(new THREE.Vector3(3,0,0));
letterGeometry.vertices.push(new THREE.Vector3(5,0,0));
letterGeometry.vertices.push(new THREE.Vector3(3,2.5,0));
letterGeometry.vertices.push(new THREE.Vector3(5,2.5,0));
letterGeometry.vertices.push(new THREE.Vector3(6,5,0));
letterGeometry.vertices.push(new THREE.Vector3(6.5,0,0));
letterGeometry.vertices.push(new THREE.Vector3(6.5,0,0));
letterGeometry.vertices.push(new THREE.Vector3(7,2.5,0));
letterGeometry.vertices.push(new THREE.Vector3(7,2.5,0));
letterGeometry.vertices.push(new THREE.Vector3(7.5,0,0));
letterGeometry.vertices.push(new THREE.Vector3(7.5,0,0));
letterGeometry.vertices.push(new THREE.Vector3(8,5,0));
var mainMessage = new THREE.Line(letterGeometry, letterMaterial, THREE.LinePieces);
mainMessage.position.set(-11 * 20,0,-1);
mainMessage.scale.set(20,20,1);
scene.add(mainMessage);
this.hide = function(){
mainMessage.position.z = -1;
}
this.show = function(){
mainMessage.position.z = 50;
}
this.shown = function(){
if(mainMessage.position.z == -1) return false;
else if (mainMessage.position.z == 50) return true;
}
}
