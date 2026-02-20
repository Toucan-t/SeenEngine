import * as THREE from "three";
import { createPlayerControls } from "./scripts/player/playercontrols.js";
import { loadGeometry } from "./scripts/geometry/geometryloader.js";
import { createPlayerCamera } from "./scripts/player/playercamera.js";

const scene = new THREE.Scene();
const camera = createPlayerCamera();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const controls = createPlayerControls(camera, renderer);
const geometry = loadGeometry();
scene.add(geometry);

camera.position.z = 5;

function animate(time) {
  renderer.render(scene, camera);
}
