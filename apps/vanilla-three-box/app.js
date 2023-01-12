import * as THREE from "three";


// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set the camera position and look at the center of the scene
camera.position.z = 5;
camera.lookAt(scene.position);

// Add a light to the scene
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);

// Create a grid of pixels with a specified width and height
const pixelWidth = 50;
const pixelHeight = 50;
const pixels = [];

for (let i = 0; i < pixelWidth; i++) {
  for (let j = 0; j < pixelHeight; j++) {
    // Create a pixel at the specified position and add it to the scene
    const pixel = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.1, 0.1),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    pixel.position.x = i - pixelWidth / 2;
    pixel.position.y = j - pixelHeight / 2;
    scene.add(pixel);

    // Add the pixel to the grid of pixels
    pixels.push(pixel);
  }
}

// Set up the simulation loop
const simulationSpeed = 100; // in milliseconds
let lastTime = Date.now();

function simulate() {
  // Calculate the time elapsed since the last update
  const currentTime = Date.now();
  const elapsedTime = currentTime - lastTime;

  if (elapsedTime > simulationSpeed) {
    // Update the state of each pixel in the simulation
    pixels.forEach((pixel) => {
      // Count the number of alive neighbors for this pixel
      let aliveNeighbors = 0;

      // Check the 8 neighboring pixels and increment the aliveNeighbors count if the pixel is alive
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue; // Skip the current pixel

          // Calculate the coordinates of the neighboring pixel
          const x = (pixel.position.x + i + pixelWidth) % pixelWidth;
          const y = (pixel.position.y + j + pixelHeight) % pixelHeight;

          // Check if the neighboring pixel is alive
          const neighbor = pixels[y * pixelWidth + x];
          if (neighbor.isAlive) aliveNeighbors++;
        }
      }

      // Update the state of the pixel according to the Conways Game of Life rules
      if (pixel.isAlive) {
        if (aliveNeighbors < 2 || aliveNeighbors > 3) {
          pixel.isAlive = false;
        }
      } else {
        if (aliveNeighbors === 3) {
          pixel.isAlive = true;
        }
      }

      // Update the color of the pixel to reflect its new state
      if (pixel.isAlive) {
        pixel.material.color.set(0x00ff00);
      } else {
        pixel.material.color.set(0xffffff);
      }
    });

    lastTime = currentTime;
  }

  // Render the scene
  renderer.render(scene, camera);

  // Continue the simulation loop
  requestAnimationFrame(simulate);
}

// Start the simulation loop
simulate();
