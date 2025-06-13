import { scene, renderer, camera, rotateC } from './controls.js';
import { modeloNaveGLB, rotateN } from './nave.js';

// Ruta del archivo GLB (ajústala según tu carpeta pública)
modeloNaveGLB('https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf');


function animate() {
  requestAnimationFrame(animate);
  rotateC();
  rotateN();
  renderer.render(scene, camera);
}

animate();
