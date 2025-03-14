import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Classroom() {
  const { scene } = useGLTF("/models/Classroom.glb");
    //<div style={{ width: "100vw", height: "100vh" }}>
    return (
        <Canvas camera={{position: [2, 2, 5], fov: 35}}
        style={{ width: "100vw", height: "100vh" }}
        >
        <ambientLight intensity={2.0} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <primitive object={scene} scale={3} position={[17, -11, 6]} />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
   //</div>
    );
}
export default Classroom;