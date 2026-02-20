import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";

export function createPlayerControls(camera, renderer) {
  const controls = new PointerLockControls(camera, renderer.domElement);
  const playerspeed = 0.1;

  addEventListener("keydown", (KeyboardEvent) => {
    switch (event.code) {
      case "KeyW":
        controls.moveForward(playerspeed);
        break;
      case "KeyS":
        controls.moveForward(-playerspeed);
        break;
      case "KeyA":
        controls.moveRight(-playerspeed);
        break;
      case "KeyD":
        controls.moveRight(playerspeed);
        break;
    }
  });

  addEventListener("mousedown", () => {
    if (!controls.isLocked) {
      controls.lock();
    }
  });

  return controls;
}
