
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

var SW = window.innerWidth, SH = window.innerHeight;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, SW / SH, 0.1, 1000);// fov, aspect, near/far clip planes
var renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0x000000); // Fondo negro


renderer.setSize(SW, SH);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;


var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 0, 5);
scene.add(directionalLight);


var cabinaPrincipal = new THREE.BoxGeometry(1,1, 1);
var cabinaPrincipalmMaterial = new THREE.MeshLambertMaterial( { color : 0xff2244 }); 
var cabina = new THREE.Mesh( cabinaPrincipal, cabinaPrincipalmMaterial );
scene.add( cabina );



function rotateC(){
  cabina.rotation.x+=0.005;
  cabina.rotation.y+=0.005;
}

export {scene,renderer,camera,rotateC}