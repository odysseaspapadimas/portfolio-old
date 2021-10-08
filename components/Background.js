import { Stars } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function StarsElement() {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.0005;
    ref.current.rotation.z += 0.0005;
  });
  return <Stars ref={ref} />;
}

function ReactBox({ position, rotation, textureUrl }) {
  const ref = useRef();
  const texture = new THREE.TextureLoader().load(textureUrl);
  useFrame(() => {
    ref.current.position.y -= 0.08;
    ref.current.position.x += 0.01;
    ref.current.rotation.z += 0.04;
    ref.current.rotation.y += 0.04;

    if (ref.current.position.y < -15) {
      ref.current.position.x = -1;
      ref.current.position.y = 10;
    }
  });
  return (
    <mesh position={position} rotation={rotation} ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
}

const Background = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -100,
      }}
    >
      <StarsElement />
      <ReactBox
        position={[-1, 10, 0]}
        rotation={[0.3, 0, 0]}
        textureUrl={
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        }
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
};

export default Background;
