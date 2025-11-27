# React + Javascript + Vite + Three.js + VRM

This project is a 3D web application built with **React**, **Javascript**, and **Vite**, featuring:

- Three.js real-time 3D rendering  
- VRM humanoid avatar support using `@pixiv/three-vrm`  
- Custom animation system (head tilt, left arm wave, right arm wave, leg movement)  
- Interactive controls (click to toggle animation, hover detection)  
- Clean React component structure  

---

## 🚀 Features

### ✔ Load VRM Avatar  
The app loads a `.vrm` model using `GLTFLoader` with `VRMLoaderPlugin`.

### ✔ Custom Animation System  
Includes:
- Idle animation  
- Right-hand wave animation  
- Left-hand + leg + head animation (custom keyframe clip)  
- Animation toggling and mixing  

### ✔ Mouse Interaction  
- **Click** → toggles animation (start/stop)  
- **Hover** → highlights model (hover state is tracked)

### ✔ OrbitControls  
Camera orbit navigation using mouse pan, zoom, rotate.

### ✔ Shadows & Lighting  
Directional light + ambient light + ground plane with shadows.

---

## 📦 Installation

```bash
npm install
