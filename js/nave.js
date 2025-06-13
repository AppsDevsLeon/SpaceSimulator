import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';
import { scene } from './controls.js';

let modelN = null; // ✅ Corrección aquí

export function modeloNaveGLB(path) {
  const loader = new GLTFLoader();
  loader.load(
    path,
    function (gltf) {
      modelN = gltf.scene;

      modelN.scale.set(1, 1, 1);
      modelN.position.set(0, 0, 0);
      modelN.rotation.set(0, 0, 0);

      scene.add(modelN);
    },
    undefined,
    function (error) {
      console.error('Error al cargar el modelo:', error);
    }
  );
}

export function rotateN() {
  if (modelN) {
    modelN.rotation.y += 0.005;
  }
}
