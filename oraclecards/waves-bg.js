import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.126.0/build/three.module.js';
import { GUI } from 'https://cdn.jsdelivr.net/npm/three@0.126.0/examples/jsm/libs/dat.gui.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.120.1/examples/jsm/controls/OrbitControls.js';
import { Water } from 'https://cdn.jsdelivr.net/npm/three@0.120.1/examples/jsm/objects/Water.js';
import { Sky } from 'https://cdn.jsdelivr.net/npm/three@0.120.1/examples/jsm/objects/Sky.js';

var container, stats;
var camera, scene, renderer;
var controls, water, sun, mesh, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8, mesh9;
var mouseX = 0,
  mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

// function onDocumentMouseMove(event) {
//   mouseX = (event.clientX - windowHalfX) * 10;
//   mouseY = (event.clientY - windowHalfY) * 10;
// }

function init() {
  container = document.getElementById('canvas-container');

  //

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  //

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 20000);
  camera.position.set(10, 30, 30);
  camera.rotation.y = 1;

  //

  sun = new THREE.Vector3();

  // Water

  var waterGeometry = new THREE.PlaneBufferGeometry(10000, 10000);

  water = new Water(waterGeometry, {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: new THREE.TextureLoader().load(
      '../textures/waternormals.jpg',
      function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }
    ),
    alpha: 1.0,
    sunDirection: new THREE.Vector3(),
    sunColor: 0xffffff,
    waterColor: 0x391326,
    distortionScale: 3.7,
    fog: scene.fog !== undefined,
  });

  water.rotation.x = -Math.PI / 2;

  scene.add(water);

  // Skybox

  var sky = new Sky();
  sky.scale.setScalar(10000);
  scene.add(sky);

  var uniforms = sky.material.uniforms;

  uniforms['turbidity'].value = 10;
  uniforms['rayleigh'].value = 1;
  uniforms['mieCoefficient'].value = 0.005;
  uniforms['mieDirectionalG'].value = 0.8;

  var parameters = {
    inclination: 0.49,
    azimuth: 0.06,
  };

  var pmremGenerator = new THREE.PMREMGenerator(renderer);

  function updateSun() {
    let hour = new Date().getHours();
    let hourParam = 0.5;
    if (hour > 19 || hour < 4) {
      hourParam = 0.6;
    } else if (hour > 17 || hour < 7) {
      hourParam = 0.5;
    } else {
      hourParam = 0.8;
    }
    var theta = Math.PI * (parameters.inclination - hourParam);
    var phi = 2 * Math.PI * (parameters.azimuth - 0.5);

    sun.x = Math.cos(phi);
    sun.y = Math.sin(phi) * Math.sin(theta);
    sun.z = Math.sin(phi) * Math.cos(theta);

    sky.material.uniforms['sunPosition'].value.copy(sun);
    water.material.uniforms['sunDirection'].value.copy(sun).normalize();

    scene.environment = pmremGenerator.fromScene(sky).texture;
  }

  updateSun();

  //
  // var geometry = new THREE.BoxBufferGeometry(10, 10, 10);
  // var material = new THREE.MeshNormalMaterial();
  // var geometry2 = new THREE.BoxBufferGeometry(6, 6, 6);
  // var material2 = new THREE.MeshNormalMaterial();

  // mesh = new THREE.Mesh(geometry, material);
  // mesh2 = new THREE.Mesh(geometry2, material2);
  // mesh3 = new THREE.Mesh(geometry, material);
  // mesh4 = new THREE.Mesh(geometry2, material2);
  // mesh5 = new THREE.Mesh(geometry, material);
  // mesh6 = new THREE.Mesh(geometry2, material2);
  // mesh7 = new THREE.Mesh(geometry2, material2);
  // mesh8 = new THREE.Mesh(geometry, material);
  // mesh9 = new THREE.Mesh(geometry, material);

  // scene.add(mesh);
  // scene.add(mesh2);
  // scene.add(mesh3);
  // scene.add(mesh4);
  // scene.add(mesh5);
  // scene.add(mesh6);
  // scene.add(mesh7);
  // scene.add(mesh8);
  // scene.add(mesh9);

  //

  // controls = new OrbitControls(camera, renderer.domElement);
  // controls.maxPolarAngle = Math.PI * 0.495;
  // controls.target.set(0, 50, 0);
  // controls.minDistance = 40.0;
  // controls.maxDistance = 200.0;
  // controls.update();

  // //

  // stats = new Stats();
  // container.appendChild(stats.dom);

  // GUI

  // var gui = new GUI();

  // var folder = gui.addFolder('Sky');
  // folder.add(parameters, 'inclination', 0, 0.5, 0.0001).onChange(updateSun);
  // folder.add(parameters, 'azimuth', 0, 1, 0.0001).onChange(updateSun);
  // folder.open();

  // var uniforms = water.material.uniforms;

  // var folder = gui.addFolder('Water');
  // folder.add(uniforms.distortionScale, 'value', 0, 8, 0.1).name('distortionScale');
  // folder.add(uniforms.size, 'value', 0.1, 10, 0.1).name('size');
  // folder.add(uniforms.alpha, 'value', 0.9, 1, 0.001).name('alpha');
  // folder.open();

  // //

  window.addEventListener('resize', onWindowResize, false);
  // document.addEventListener('mousemove', onDocumentMouseMove, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  var time = Date.now() * 0.001 + 10000;

  var rx = Math.sin(time * 0.7) * 0.02;
  var ry = Math.sin(time * 0.3) * 0.01;
  var rz = Math.sin(time * 0.2) * 0.01;

  camera.position.x += (mouseX - camera.position.x) * 0.0001;
  // camera.position.y += (-mouseY - camera.position.y) * 0.0001;
  camera.lookAt(scene.position);

  water.material.uniforms['time'].value += 1.0 / 60.0;

  var time = performance.now() * 0.001;

  // mesh.position.y = Math.sin(time) * 2 + 1;
  // mesh.position.x = Math.sin(time) * 6 - 50;
  // mesh.position.z = Math.sin(time) * 5 - 135;
  // mesh.rotation.x = time * 0.5;
  // mesh.rotation.z = time * 0.7;

  // mesh2.position.x = Math.sin(time) * 5 + 55;
  // mesh2.rotation.y = time * 1.5;
  // mesh2.rotation.z = time * 0.2;

  // mesh3.position.x = Math.sin(time) * 5 - 55;
  // mesh3.rotation.y = time * 1.5;
  // mesh3.rotation.z = time * 0.9;

  // mesh4.position.x = Math.sin(time) * 5 + 55;
  // mesh4.position.z = Math.sin(time) * 5 - 135;
  // mesh4.rotation.y = time * 0.5;
  // mesh4.rotation.z = time * 0.6;

  // mesh5.position.x = Math.sin(time) * 5 + 25;
  // mesh5.position.z = Math.sin(time) * 5 - 75;
  // mesh5.rotation.y = time * 0.25;
  // mesh5.rotation.z = time * 0.13;

  // mesh6.position.x = Math.sin(time) * 5 + 105;
  // mesh6.position.z = Math.sin(time) * 5 - 55;
  // mesh6.rotation.y = time * 1.5;
  // mesh6.rotation.x = time * 0.3;

  // mesh7.position.x = Math.sin(time) * 3.1 - 25;
  // mesh7.position.z = Math.sin(time) * 5 - 45;
  // mesh7.rotation.y = time * 0.5;
  // mesh7.rotation.z = time * 0.3;

  // mesh8.position.x = Math.sin(time) * 5 - 35;
  // mesh8.position.z = Math.sin(time) * 5 - 355;
  // mesh8.rotation.y = time * 1.75;
  // mesh8.rotation.x = time * 0.3;

  // mesh9.position.x = Math.sin(time) * 10 + 305;
  // mesh9.position.z = Math.sin(time) * 5 - 555;
  // mesh9.rotation.y = time * 0.75;
  // mesh9.rotation.x = time * 0.1;

  renderer.render(scene, camera);
}
