// components/dashboard.js
import * as THREE from 'three';

export function createDashboard(scene) {
  const panelMaterial = new THREE.MeshStandardMaterial({ color: 0x112244 });
  const screenMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x0044ff });

  // Base del tablero
  const base = new THREE.Mesh(new THREE.BoxGeometry(6, 0.5, 4), panelMaterial);
  base.position.set(0, 0, 0);
  scene.add(base);

  // Pantallas frontales
  for (let i = -2; i <= 2; i += 2) {
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1), screenMaterial);
    screen.position.set(i, 1.2, -1.5);
    screen.rotation.x = -0.2;
    scene.add(screen);
  }

  // Joysticks
  const joystickGeo = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
  const joystickMat = new THREE.MeshStandardMaterial({ color: 0x444444 });
  const leftStick = new THREE.Mesh(joystickGeo, joystickMat);
  leftStick.position.set(-1.5, 0.5, 1.2);
  scene.add(leftStick);

  const rightStick = leftStick.clone();
  rightStick.position.set(1.5, 0.5, 1.2);
  scene.add(rightStick);
}
