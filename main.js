 window.addEventListener('DOMContentLoaded', function(){
  var canvas = document.getElementById('renderCanvas');

  var engine = new BABYLON.Engine(canvas, true);

  var createScene = function () {
  var scene = new BABYLON.Scene(engine);
  var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 5, new BABYLON.Vector3(0, 0, 0), scene);
  
  camera.attachControl(canvas, true);

  camera.lowerRadiusLimit = 2.5;
  camera.upperRadiusLimit = 10;
  camera.pinchDeltaPercentage = 0.01;
  camera.wheelDeltaPercentage = 0.01;

  scene.clearColor = new BABYLON.Color3(0.0, 0.0, 0.0);
  // BABYLON.ParticleHelper.BaseAssetsUrl = "https://github.com/Prestwick97/BabylonSphere/blob/master/particleSet.json";

  // var sun = new BABYLON.ParticleHelper.CreateAsync("star", scene);

  BABYLON.ParticleHelper.CreateAsync("sun", scene).then((set) => {
      set.start();
  });

  return scene;
}

  var scene = createScene();


  engine.runRenderLoop(function(){
      scene.render();
  });


  window.addEventListener('resize', function(){
      engine.resize();
  });
});