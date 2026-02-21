import * as THREE from "three";
import { createEditorControls } from "./scripts/editor/editorcontrols.js";
import { loadGeometry } from "./scripts/geometry/geometryloader.js";
import { createEditorCamera } from "./scripts/editor/editorcamera.js";
import { loadScene } from "./scripts/rendering/sceneloader.js";

const scene = loadScene();
const camera = createEditorCamera();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const controls = createEditorControls(camera, renderer);
const geometry = loadGeometry();
geometry.forEach((mesh) => {
  scene.add(mesh);
});

const raycaster = new THREE.Raycaster();
const editorspheregeometry = new THREE.SphereGeometry(0.1, 32, 32);
const editorsphere = new THREE.Mesh(
  editorspheregeometry,
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
);
const mouse = new THREE.Vector2(0, 0);
addEventListener("mousemove", (onMouseMove) => {
  scene.remove(editorsphere);
  raycaster.setFromCamera(mouse, camera);
  raycaster.intersectObjects(scene.children, true);
  const intersects = raycaster.intersectObjects(scene.children, true);
  scene.add(editorsphere);
  editorsphere.position.x = Math.round(intersects[0].point.x / 0.5) * 0.5;
  editorsphere.position.y = Math.round(intersects[0].point.y / 0.5) * 0.5;
  editorsphere.position.z = Math.round(intersects[0].point.z / 0.5) * 0.5;
});

function animate(time) {
  renderer.render(scene, camera);
}
