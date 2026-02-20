import * as THREE from "three";

export function loadGeometry() {
  const plane = new THREE.Plane(new THREE.Vector3(1, 0, 0));
  const helper = new THREE.PlaneHelper(plane, 1, 0xffff00);
  return helper;
}
