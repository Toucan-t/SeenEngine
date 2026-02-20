import * as THREE from "three";

export function loadGeometry() {
  const plane = new THREE.Plane(new THREE.Vector3(1, 0, 0));
  const helper = new THREE.PlaneHelper(plane, 1, 0xffff00);
  const debugsize = 100;
  const debugdivisions = 100;
  const debuggrid = new THREE.GridHelper(debugsize, debugdivisions);
  return [debuggrid, helper];
}
