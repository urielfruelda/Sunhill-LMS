import * as THREE from 'three';
import './StuLogin';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

let scene,
  camera,
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane,
  renderer,
  container,
  rocket,
  HEIGHT,
  WIDTH;

const createScene = () => {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x5d0361, 10, 1500);

  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 60;
  nearPlane = 1;
  farPlane = 10000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );
  camera.position.set(0, 0, 500);

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;

  container = document.getElementById("canvas");
  if (container) {
    container.appendChild(renderer.domElement);
  } else {
    console.error('Canvas container not found.');
  }

  window.addEventListener("resize", handleWindowResize, false);

  // Placeholder geometry for initial visibility
  const placeholderGeometry = new THREE.BoxGeometry(10, 10, 10);
  const placeholderMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const placeholder = new THREE.Mesh(placeholderGeometry, placeholderMaterial);
  placeholder.position.set(0, 0, 0);
  scene.add(placeholder);

  let loader = new GLTFLoader();
  
  loader.load(
    "/rocket.gltf",
    (gltf) => {
      rocket = gltf.scene;
      rocket.position.set(0, 0, 0); // Center the rocket in the scene
      rocket.scale.set(0.5, 0.5, 0.5); // Adjust scale as needed
      scene.add(rocket);

      // Remove placeholder and render the scene after rocket is loaded
      scene.remove(placeholder);
      renderer.render(scene, camera);
    },
    undefined,
    (error) => console.error('An error occurred while loading the model.', error)
  );
};

const handleWindowResize = () => {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
};

const createLights = () => {
  const ambientLight = new THREE.HemisphereLight(0x404040, 0x404040, 1);
  const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
  directionalLight.position.set(-300, 0, 600);
  const pointLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
  pointLight.position.set(200, -100, 50);

  scene.add(ambientLight, directionalLight, pointLight);
};

const targetRocketPosition = 40;
const animationDuration = 2000;

const loop = () => {
  const t = (Date.now() % animationDuration) / animationDuration;

  if (rocket) {
    rocket.rotation.y += 0.1;
    rocket.position.y = targetRocketPosition * Math.sin(Math.PI * 2 * t);
  }
  renderer.render(scene, camera);       

  requestAnimationFrame(loop);
};

const main = () => {
  createScene();
  createLights();
  loop();
};

main();
