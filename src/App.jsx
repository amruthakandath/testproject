import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { GLTFLoader } from "three-stdlib";
import { VRMLoaderPlugin } from "@pixiv/three-vrm";

import {
  initializeAnimations,
  updateAnimations,
  disposeAnimations,
  toggleAnimation,
  switchAnimation,
  createrightWaveAnimation as createWaveAnimation,
} from "./animationHandler";

export default function App() {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());

  const [vrmModel, setVrmModel] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe6eef6);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 3.6, -4.5);
    cameraRef.current = camera;

    // Renderer
    if (!rendererRef.current) {
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    }

    // Controls
    const controls = new OrbitControls(camera, rendererRef.current.domElement);
    controls.target.set(0, 1.2, 0);
    controls.enableDamping = true;
    controlsRef.current = controls;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const dir = new THREE.DirectionalLight(0xffffff, 1);
    dir.position.set(2.5, 5, 2.5);
    dir.castShadow = true;
    scene.add(dir);

    // Ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshStandardMaterial({ color: 0x88ff00 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // VRM Loader
    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));

    // Load VRM (make sure the path is correct for Vite)
    loader.load("/src/assets/Sample_Female.vrm", (gltf) => {
      const vrm = gltf.userData.vrm;
      if (!vrm || vrmModel) return;

      vrm.scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = true;
          obj.receiveShadow = true;
        }
      });

      scene.add(vrm.scene);
      setVrmModel(vrm);

      // Initialize animations
      const waveClip = createWaveAnimation(vrm);
      const clips = waveClip ? [waveClip] : [];
      initializeAnimations(vrm, clips);

      // Default animation → Idle
      switchAnimation("Idle");
      setIsAnimating(true);
    });

    const raycaster = raycasterRef.current;

    const onPointerMove = (e) => {
      const rect = rendererRef.current.domElement.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onClick = () => {
      if (!vrmModel) return;
      raycaster.setFromCamera(mouseRef.current, camera);
      const intersects = raycaster.intersectObject(vrmModel.scene, true);
      if (intersects.length > 0) {
        toggleAnimation(!isAnimating);
        setIsAnimating(!isAnimating);
      }
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);

    const tick = () => {
      const delta = clockRef.current.getDelta();
      updateAnimations(delta);

      if (vrmModel) {
        raycaster.setFromCamera(mouseRef.current, camera);
        const hits = raycaster.intersectObject(vrmModel.scene, true);
        setHovered(hits.length > 0);
      }

      controls.update();
      rendererRef.current.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();

    return () => {
      disposeAnimations();
      rendererRef.current?.dispose();
      if (mountRef.current) mountRef.current.innerHTML = "";
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />

      {/* Animation buttons */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          display: "flex",
          gap: "12px",
          zIndex: 200,
        }}
      >
        <button
          onClick={() => {
            if (vrmModel) switchAnimation("Idle");
            setIsAnimating(true);
          }}
          style={{
            padding: "10px 16px",
            borderRadius: 6,
            background: "#ffffff",
            fontWeight: "bold",
            cursor: "pointer",
            border: isAnimating ? "3px solid #00ffff" : "2px solid #cccccc",
            boxShadow: isAnimating ? "0 0 12px #00ffff" : "none",
          }}
        >
          dance with left
        </button>

        <button
          onClick={() => {
            if (vrmModel) switchAnimation("Wave");
            setIsAnimating(false);
          }}
          style={{
            padding: "10px 16px",
            borderRadius: 6,
            background: "#ffffff",
            fontWeight: "bold",
            cursor: "pointer",
            border: !isAnimating ? "3px solid #00ffff" : "2px solid #cccccc",
            boxShadow: !isAnimating ? "0 0 12px #00ffff" : "none",
          }}
        >
          righthand move
        </button>
      </div>
    </>
  );
}
