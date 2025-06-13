// components/lights.js
import * as THREE from 'three';

export function addLights(scene) {
  const ambient = new THREE.AmbientLight(0x404040, 2); // luz general
  const pointLight = new THREE.PointLight(0x00ffff, 2, 10);
  pointLight.position.set(0, 3, 2);

  // Luz pulsante
  let pulse = true;
  setInterval(() => {
    pointLight.intensity = pulse ? 2 : 0.5;
    pulse = !pulse;
  }, 1000);

  scene.add(ambient);
  scene.add(pointLight);
}
