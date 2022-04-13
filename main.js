//obfuscator: https://obfuscator.io/

var canvas; // drawing paper
var engine; // the pen - deal with the low level webgl
var scene; // objects rendered

document.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  canvas = document.getElementById("renderCanvas"); // canvas receives div renderCanvas
  engine = new BABYLON.Engine(canvas, true);
  scene = createScene();
  
  engine.runRenderLoop(function () {
    scene.render();
  });
}

var createScene = function () {
  var scene = new BABYLON.Scene(engine); // defines the engine to render the scene

  /* Camera */
  var camera = createFreeCamera(scene);
  /* Collisions */
  scene.collisionsEnabled = false;

  // import scene
  BABYLON.SceneLoader.ShowLoadingScreen = false;
  BABYLON.SceneLoader.Append("scene/", "scene.babylon", scene, onSceneImported);
  function onSceneImported(newMeshes, particleSystems, skeletons) {
    scene.activeCamera = camera;
    scene.gravity = new BABYLON.Vector3(0, -0.1, 0);
    scene.fogMode = BABYLON.Scene.FOGMODE_NONE;
    return scene;
}

function createFreeCamera(scene) {
  var camera = new BABYLON.FreeCamera("freeCamera", new BABYLON.Vector3(1, 1, 1), scene);
  camera.attachControl(canvas);
  camera.checkCollisions = false;
  camera.applyGravity = false;
  camera.ellipsoid = new BABYLON.Vector3(1.2, 0.82, 1.2);
  camera.speed = 0.10;
  camera.keysUp.push('w'.charCodeAt(0));
  camera.keysUp.push('W'.charCodeAt(0));
  camera.keysLeft.push('a'.charCodeAt(0));
  camera.keysLeft.push('A'.charCodeAt(0));
  camera.keysDown.push('s'.charCodeAt(0));
  camera.keysDown.push('S'.charCodeAt(0));
  camera.keysRight.push('d'.charCodeAt(0));
  camera.keysRight.push('D'.charCodeAt(0));

  camera.position = new BABYLON.Vector3(-4.3, 1.6, 34);
  camera.rotation = new BABYLON.Vector3( 0, -0.3, 0);
  
  return camera;
}
  
function AnimationBlender(scene){
  var box = scene.getMeshByName("anm_box")
  scene.beginAnimation(box, 0, 250, true);
}
  
window.addEventListener("resize", function () {
  engine.resize();
});


return scene;
}





