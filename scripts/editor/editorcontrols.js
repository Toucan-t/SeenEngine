import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { createEditorCamera } from "./editorcamera.js";

export function createEditorControls(camera, renderer) {
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
      case "Enter":
        if (!camera.topmode) {
          camera.position.y = 50;
          camera.topmode = true;
        } else if (camera.topmode) {
          camera.position.y = 1;
          camera.topmode = false;
        }
        break;
      case "KeyE":
        camera.position.y += 2;
        break;
      case "KeyR":
        camera.position.y -= 2;
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
