window.addEventListener('DOMContentLoaded', function(){
  // get the canvas DOM element
  var canvas = document.getElementById('renderCanvas');

  // load the 3D engine
  var engine = new BABYLON.Engine(canvas, true);

  // createScene function that creates and return the scene
  var createScene = function () {
  var scene = new BABYLON.Scene(engine);
  var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 5, new BABYLON.Vector3(0, 0, 0), scene);
  
  camera.attachControl(canvas, true);

  camera.lowerRadiusLimit = 2.5;
  camera.upperRadiusLimit = 10;
  camera.pinchDeltaPercentage = 0.01;
  camera.wheelDeltaPercentage = 0.01;

  scene.clearColor = new BABYLON.Color3(0.0, 0.0, 0.0);

  // Lets create a sun effect made of 3 different particle system
  // Definition: https://assets.babylonjs.com/particles/systems/sun.json
  BABYLON.ParticleHelper.CreateAsync("sun", scene).then((set) => {
      set.start();
  });

  return scene;
}

  // call the createScene function
  var scene = createScene();

  // run the render loop
  engine.runRenderLoop(function(){
      scene.render();
  });

  // the canvas/window resize event handler
  window.addEventListener('resize', function(){
      engine.resize();
  });
});