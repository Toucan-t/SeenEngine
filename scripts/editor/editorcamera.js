import * as THREE from "three";

export function createEditorCamera() {
  const topmode = false;
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.y = 1;
  return camera;
}
