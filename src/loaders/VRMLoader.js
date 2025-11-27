import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class VRMLoader extends GLTFLoader {
  constructor(manager) {
    super(manager);
  }

  load(url, onLoad, onProgress, onError) {
    super.load(
      url,
      (gltf) => {
        if (onLoad) onLoad(gltf);
      },
      onProgress,
      onError
    );
  }
}

export { VRMLoader };