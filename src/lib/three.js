var THREE = global.THREE = require('three');

// Allow cross-origin images to be loaded.

// This should not be on `THREE.Loader` nor `THREE.ImageUtils`.
// Must be on `THREE.TextureLoader`.
if (THREE.TextureLoader) {
  THREE.TextureLoader.prototype.crossOrigin = 'anonymous';
}

// This is for images loaded from the model loaders.
if (THREE.ImageLoader) {
  THREE.ImageLoader.prototype.crossOrigin = 'anonymous';
}

// In-memory caching for XHRs (for images, audio files, textures, etc.).
if (THREE.Cache) {
  THREE.Cache.enabled = true;
}

// TODO: Eventually include these only if they are needed by a component.
require('../../vendor/DeviceOrientationControls'); // THREE.DeviceOrientationControls
require('three/examples/js/loaders/DRACOLoader');  // THREE.DRACOLoader
require('three/examples/js/loaders/GLTFLoader');  // THREE.GLTFLoader
require('three/examples/js/loaders/OBJLoader');  // THREE.OBJLoader
require('three/examples/js/loaders/MTLLoader');  // THREE.MTLLoader
require('three/examples/js/utils/BufferGeometryUtils');  // THREE.BufferGeometryUtils
require('three/examples/js/lights/LightProbeGenerator'); // THREE.LightProbeGenerator

THREE.DRACOLoader.prototype.crossOrigin = 'anonymous';
THREE.GLTFLoader.prototype.crossOrigin = 'anonymous';
THREE.MTLLoader.prototype.crossOrigin = 'anonymous';
THREE.OBJLoader.prototype.crossOrigin = 'anonymous';

module.exports = THREE;
