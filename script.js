// script.js

// Import Three.js
import * as THREE from 'three';

// Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a 3D character
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const character = new THREE.Mesh(geometry, material);
scene.add(character);

// Create cherry blossom particles
const particleCount = 1000;
const particles = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10; // Random positions
}
particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particleMaterial = new THREE.PointsMaterial({ color: 0xff69b4, size: 0.1 });
const particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

// Interaction system
window.addEventListener('click', (event) => {
    // Implement interaction logic
    console.log('Character interacted!');
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    character.rotation.x += 0.01;
    character.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
