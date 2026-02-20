import * as THREE from "three";

export function loadGeometry() {
  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const plane = new THREE.Mesh(geometry, material);
  return plane;
}
