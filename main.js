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
  
      function AnimationBlender(scene){
    var box = scene.getMeshByName("anm_box")
    scene.beginAnimation(box, 0, 250, true);
    var box_b = scene.getMeshByName("anm_box_b")
    scene.beginAnimation(box_b, 0, 250, true);
    var box_f = scene.getMeshByName("anm_box_f")
    scene.beginAnimation(box_f, 0, 250, true);
    var box_l = scene.getMeshByName("anm_box_l")
    scene.beginAnimation(box_l, 0, 250, true);
    var box_r = scene.getMeshByName("anm_box_r")
    scene.beginAnimation(box_r, 0, 250, true);
    var box_u = scene.getMeshByName("anm_box_u")
    scene.beginAnimation(box_u, 0, 250, true);
    var box_logo_a = scene.getMeshByName("anm_logo_a")
    scene.beginAnimation(box_logo_a, 0, 250, true);
    var box_logo_c = scene.getMeshByName("anm_logo_c")
    scene.beginAnimation(box_logo_c, 0, 250, true);
    var box_logo_e = scene.getMeshByName("anm_logo_e")
    scene.beginAnimation(box_logo_e, 0, 250, true);
    var box_logo_n = scene.getMeshByName("anm_logo_n")
    scene.beginAnimation(box_logo_n, 0, 250, true);
    var box_logo_o = scene.getMeshByName("anm_logo_o")
    scene.beginAnimation(box_logo_o, 0, 250, true);
        
  }
  
  // import scene
  BABYLON.SceneLoader.ShowLoadingScreen = false;
  BABYLON.SceneLoader.Append("scene/", "scene.babylon", scene, onSceneImported);
  function onSceneImported(newMeshes, particleSystems, skeletons) {
    scene.activeCamera = camera;
    scene.gravity = new BABYLON.Vector3(0, -0.1, 0);
    scene.fogMode = BABYLON.Scene.FOGMODE_NONE;
    AnimationBlender(scene);
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
  camera.rotation = new BABYLON.Vector3( 0, -0.4, 0);
  
  return camera;
}
window.addEventListener("resize", function () {
  engine.resize();
});


return scene;
}





