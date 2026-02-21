import * as THREE from "three";

export function loadGeometry() {
  const debugsize = 100;
  const debugdivisions = 200;
  const debuggrid = new THREE.GridHelper(debugsize, debugdivisions);
  return [debuggrid];
}
