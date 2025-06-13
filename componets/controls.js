// components/controls.js

export function setupControls(camera) {
    let speed = 0.1;
  
    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowUp':
        case 'w':
          camera.position.z -= speed;
          break;
        case 'ArrowDown':
        case 's':
          camera.position.z += speed;
          break;
        case 'ArrowLeft':
        case 'a':
          camera.position.x -= speed;
          break;
        case 'ArrowRight':
        case 'd':
          camera.position.x += speed;
          break;
        case ' ':
          camera.position.y += speed; // espacio: subir
          break;
      }
    });
  
    document.addEventListener('keyup', (e) => {
      if (e.key === ' ') {
        camera.position.y -= speed; // regresar al nivel
      }
    });
  }
  