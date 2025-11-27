import * as THREE from "three";
import { VRM } from "@pixiv/three-vrm";

let mixer= null;
let actions= {};
let activeAction= null;

// --------------------------------------------------
// FALLBACK HEAD TILT (Idle)
// --------------------------------------------------
// export const createFallbackIdle = (vrm: VRM): THREE.AnimationClip | null => {
//   const head = vrm.humanoid?.getBoneNode("head");
//   if (!head) return null;

//   const trackPath = `${head.name}.quaternion`;
//   const times = [0, 1, 2, 3];
//   const deg = (v: number) => THREE.MathUtils.degToRad(v);

//   const makeQuat = (y: number) =>
//     new THREE.Quaternion().setFromEuler(new THREE.Euler(0, deg(y), 0));

//   const quats = [makeQuat(0), makeQuat(10), makeQuat(-10), makeQuat(0)];
//   const values = quats.flatMap((q) => [q.x, q.y, q.z, q.w]);

//   const track = new THREE.QuaternionKeyframeTrack(trackPath, times, values);
//   return new THREE.AnimationClip("Idle", -1, [track]);
// };
// export const createleftWaveAnimation = (vrm: VRM): THREE.AnimationClip | null => {
//   const leftUpperArm = vrm.humanoid?.getBoneNode("leftUpperArm");
//   const leftLowerArm = vrm.humanoid?.getBoneNode("leftLowerArm");
//   const leftHand = vrm.humanoid?.getBoneNode("leftHand");

//   if (!leftUpperArm || !leftLowerArm || !leftHand) return null;

//   const times = [0, 0.5, 1, 1.5, 2]; // seconds
//   const deg = (v: number) => THREE.MathUtils.degToRad(v);

//   const makeQuat = (x = 0, y = 0, z = 0) =>
//     new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(x), deg(y), deg(z)));

//   // Shoulder swings arm forward
//   const upperArmQuats = [
//     makeQuat(30, 30, 0),
//     makeQuat(20, 45, 0),
//     makeQuat(30, 60, 0),
//     makeQuat(20, 45, 0),
//     makeQuat(30, 30, 0),
//   ];
//   const upperArmValues = upperArmQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

//   // Elbow bends slightly
//   const lowerArmQuats = [
//    makeQuat(30, 30, 0),
//     makeQuat(20, 45, 0),
//     makeQuat(30, 60, 0),
//     makeQuat(20, 45, 0),
//     makeQuat(30, 30, 0),
//   ];
//   const lowerArmValues = lowerArmQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

//   // Hand twists slightly
//   const handQuats = [
//     makeQuat(0, 0, 0),
//     makeQuat(10, 0, 0),
//     makeQuat(10, 0, 0),
//     makeQuat(10, 0, 0),
//     makeQuat(0, 0, 0),
//   ];
//   const handValues = handQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

//   const tracks = [
//     new THREE.QuaternionKeyframeTrack(`${leftUpperArm.name}.quaternion`, times, upperArmValues),
//     new THREE.QuaternionKeyframeTrack(`${leftLowerArm.name}.quaternion`, times, lowerArmValues),
//     new THREE.QuaternionKeyframeTrack(`${leftHand.name}.quaternion`, times, handValues),
//   ];

//   return new THREE.AnimationClip("Wave", -1, tracks);
// };
// export const createleftWaveAnimation = (vrm: VRM): THREE.AnimationClip | null => {
//   const leftUpperArm = vrm.humanoid?.getBoneNode("leftUpperArm");
//   const leftLowerArm = vrm.humanoid?.getBoneNode("leftLowerArm");
//   const leftHand = vrm.humanoid?.getBoneNode("leftHand");
//   const leftUpperLeg = vrm.humanoid?.getBoneNode("leftUpperLeg");
//   const leftLowerLeg = vrm.humanoid?.getBoneNode("leftLowerLeg");

//   if (!leftUpperArm || !leftLowerArm || !leftHand || !leftUpperLeg || !leftLowerLeg) return null;

//   const times = [0, 0.5, 1, 1.5, 2]; // seconds
//   const deg = (v: number) => THREE.MathUtils.degToRad(v);

//   const makeQuat = (x = 0, y = 0, z = 0) =>
//     new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(x), deg(y), deg(z)));

//   // Upper Arm: forward wave motion
//   const upperArmQuats = [
//     makeQuat(-30, 0, 0), // forward
//     makeQuat(-20, 15, 0),
//     makeQuat(-15, 30, 0),
//     makeQuat(-20, 15, 0),
//     makeQuat(-30, 0, 0),
//   ];
//   const upperArmValues = upperArmQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

//   // Lower Arm: elbow bend
//   const lowerArmQuats = [
//     makeQuat(10, -30, 0),
//     makeQuat(20, -40, 0),
//     makeQuat(25, -60, 0),
//     makeQuat(20, -40, 0),
//     makeQuat(10, -30, 0),
//   ];
//   const lowerArmValues = lowerArmQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

//   // Hand: twist for wave
//   const handQuats = [
//     makeQuat(0, -30, 0),
//     makeQuat(0, -45, 15),
//     makeQuat(0, -60, -15),
//     makeQuat(0, -45, 15),
//     makeQuat(0, -30, 0),
//   ];
//   const handValues = handQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

//   // Legs: simple bend/sway to accompany wave
//   const upperLegQuats = [
//     makeQuat(0, 0, 0),
//     makeQuat(-5, 5, 0),
//     makeQuat(5, 0, 0),
//     makeQuat(-5, 5, 0),
//     makeQuat(0, 0, 0),
//   ];
//   const upperLegValues = upperLegQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

//   const lowerLegQuats = [
//     makeQuat(0, 0, 0),
//     makeQuat(5, 0, 0),
//     makeQuat(-5, 0, 0),
//     makeQuat(5, 0, 0),
//     makeQuat(0, 0, 0),
//   ];
//   const lowerLegValues = lowerLegQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

//   const tracks = [
//     new THREE.QuaternionKeyframeTrack(`${leftUpperArm.name}.quaternion`, times, upperArmValues),
//     new THREE.QuaternionKeyframeTrack(`${leftLowerArm.name}.quaternion`, times, lowerArmValues),
//     new THREE.QuaternionKeyframeTrack(`${leftHand.name}.quaternion`, times, handValues),
//     new THREE.QuaternionKeyframeTrack(`${leftUpperLeg.name}.quaternion`, times, upperLegValues),
//     new THREE.QuaternionKeyframeTrack(`${leftLowerLeg.name}.quaternion`, times, lowerLegValues),
//   ];

//   return new THREE.AnimationClip("LeftWaveFront", -1, tracks);
// };
export const createleftWaveAnimation = (vrm)=> {
  const leftUpperArm = vrm.humanoid?.getBoneNode("leftUpperArm");
  const leftLowerArm = vrm.humanoid?.getBoneNode("leftLowerArm");
  const leftHand = vrm.humanoid?.getBoneNode("leftHand");
  const leftUpperLeg = vrm.humanoid?.getBoneNode("leftUpperLeg");
  const leftLowerLeg = vrm.humanoid?.getBoneNode("leftLowerLeg");
  const head = vrm.humanoid?.getBoneNode("head");

  if (!leftUpperArm || !leftLowerArm || !leftHand || !leftUpperLeg || !leftLowerLeg || !head) return null;

  const times = [0, 0.5, 1, 1.5, 2]; // seconds
  const deg = (v) => THREE.MathUtils.degToRad(v);

  const makeQuat = (x = 0, y = 0, z = 0) =>
    new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(x), deg(y), deg(z)));

  // Upper Arm: forward wave motion
  const upperArmQuats = [
    makeQuat(-30, 0, 0),
    makeQuat(-20, 15, 0),
    makeQuat(-15, 30, 0),
    makeQuat(-20, 15, 0),
    makeQuat(-30, 0, 0),
  ];
  const upperArmValues = upperArmQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

  // Lower Arm: elbow bend
  const lowerArmQuats = [
    makeQuat(10, -30, 0),
    makeQuat(20, -40, 0),
    makeQuat(25, -60, 0),
    makeQuat(20, -40, 0),
    makeQuat(10, -30, 0),
  ];
  const lowerArmValues = lowerArmQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

  // Hand: twist for wave
  const handQuats = [
    makeQuat(0, -30, 0),
    makeQuat(0, -45, 15),
    makeQuat(0, -60, -15),
    makeQuat(0, -45, 15),
    makeQuat(0, -30, 0),
  ];
  const handValues = handQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

  // Legs: simple bend/sway to accompany wave
  const upperLegQuats = [
    makeQuat(0, 0, 0),
    makeQuat(-5, 5, 0),
    makeQuat(5, 0, 0),
    makeQuat(-5, 5, 0),
    makeQuat(0, 0, 0),
  ];
  const upperLegValues = upperLegQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

  const lowerLegQuats = [
    makeQuat(0, 0, 0),
    makeQuat(5, 0, 0),
    makeQuat(-5, 0, 0),
    makeQuat(5, 0, 0),
    makeQuat(0, 0, 0),
  ];
  const lowerLegValues = lowerLegQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

  // Head tilt: subtle side-to-side tilt for natural look
  const headQuats = [
    makeQuat(0, 30, -5),
    makeQuat(0, 45, -3),
    makeQuat(0, 30, -0),
    makeQuat(0, 45, -3),
    makeQuat(0, 30, -5),
  ];
  const headValues = headQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

  const tracks = [
    new THREE.QuaternionKeyframeTrack(`${leftUpperArm.name}.quaternion`, times, upperArmValues),
    new THREE.QuaternionKeyframeTrack(`${leftLowerArm.name}.quaternion`, times, lowerArmValues),
    new THREE.QuaternionKeyframeTrack(`${leftHand.name}.quaternion`, times, handValues),
    new THREE.QuaternionKeyframeTrack(`${leftUpperLeg.name}.quaternion`, times, upperLegValues),
    new THREE.QuaternionKeyframeTrack(`${leftLowerLeg.name}.quaternion`, times, lowerLegValues),
    new THREE.QuaternionKeyframeTrack(`${head.name}.quaternion`, times, headValues),
  ];

  return new THREE.AnimationClip("LeftWaveFrontWithHeadTilt", -1, tracks);
};



// --------------------------------------------------
// WAVE ANIMATION (Right Hand)
// --------------------------------------------------


export const createrightWaveAnimation = (vrm) => {
  const rightUpperArm = vrm.humanoid?.getBoneNode("rightUpperArm");
  const rightLowerArm = vrm.humanoid?.getBoneNode("rightLowerArm");
  const rightHand = vrm.humanoid?.getBoneNode("rightHand");
  
  if (!rightUpperArm || !rightLowerArm || !rightHand) return null;

  const times = [0, 0.5, 1, 1.5, 2]; // seconds
  const deg = (v) => THREE.MathUtils.degToRad(v);

  const makeQuat = (x = 0, y = 0, z = 0) =>
    new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(x), deg(y), deg(z)));

  // Shoulder swings arm forward
  const upperArmQuats = [
    makeQuat(-30, 30, 0),
    makeQuat(-20, 45, 0),
    makeQuat(-30, 60, 0),
    makeQuat(-20, 45, 0),
    makeQuat(-30, 30, 0),
  ];
  const upperArmValues = upperArmQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

  // Elbow bends slightly
  const lowerArmQuats = [
   makeQuat(-30, 30, 0),
    makeQuat(-20, 45, 0),
    makeQuat(-30, 60, 0),
    makeQuat(-20, 45, 0),
    makeQuat(-30, 30, 0),
  ];
  const lowerArmValues = lowerArmQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

  // Hand twists slightly
  const handQuats = [
    makeQuat(0, 0, 0),
    makeQuat(10, 0, 0),
    makeQuat(-10, 0, 0),
    makeQuat(10, 0, 0),
    makeQuat(0, 0, 0),
  ];
  const handValues = handQuats.flatMap((q) => [q.x, q.y, q.z, q.w]);

  const tracks = [
    new THREE.QuaternionKeyframeTrack(`${rightUpperArm.name}.quaternion`, times, upperArmValues),
    new THREE.QuaternionKeyframeTrack(`${rightLowerArm.name}.quaternion`, times, lowerArmValues),
    new THREE.QuaternionKeyframeTrack(`${rightHand.name}.quaternion`, times, handValues),
  ];

  return new THREE.AnimationClip("Wave", -1, tracks);
};


// --------------------------------------------------
// INITIALIZE ANIMATIONS
// --------------------------------------------------
export const initializeAnimations = (
  vrm,
  extraClips
) => {
  mixer = new THREE.AnimationMixer(vrm.scene);
  actions = {};

  const idle = createleftWaveAnimation(vrm);
  if (idle) {
    const idleAction = mixer.clipAction(idle);
    idleAction.setLoop(THREE.LoopRepeat, Infinity);
    actions["Idle"] = idleAction;
  }

  extraClips?.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.setLoop(THREE.LoopRepeat, Infinity);
    actions[clip.name] = action;
  });

  // Play the first animation automatically
  const firstKey = Object.keys(actions)[0];
  if (firstKey) {
    activeAction = actions[firstKey];
    activeAction.play();
  }
};

// --------------------------------------------------
export const switchAnimation = (name) => {
  if (!mixer || !actions[name]) return;

  if (activeAction) activeAction.stop();
  activeAction = actions[name];
  activeAction.play();
};

export const updateAnimations = (delta) => {
  mixer?.update(delta);
};

export const toggleAnimation = (isOn) => {
  if (!activeAction) return;
  isOn ? activeAction.play() : activeAction.stop();
};

export const disposeAnimations = () => {
  mixer?.stopAllAction();
  mixer = null;
  actions = {};
  activeAction = null;
};
