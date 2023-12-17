// import { Canvas } from '@react-three/fiber'
import { useState, useEffect } from 'react';

import { Environment, Decal, RenderTexture, Text, AccumulativeShadows, RandomizedLight, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'

import { Ring } from "./Ring";


export const Experience = () => {
  const [name1, setName1] = useState("Suzy");
  const [name2, setName2] = useState("Lizzie");

  // Define the controls
  const values = useControls({ 
    'Name 1': { value: name1, transient: true },
    'Name 2': { value: name2, transient: true }
  });

  // Use useEffect to update the state
  useEffect(() => {
    setName1(values['Name 1']);
    setName2(values['Name 2']);
  }, [values['Name 1'], values['Name 2']]); // Dependency array ensures this runs only when these values change


  return (
    <>
        <Ring
          text={name1}
          color="#b09040"
          position={[-0.5, 0.228, 0]}
          rotation={[Math.PI / 2, 0.228, -Math.PI / 5]}
        />
        <Ring
          text={name2}
          color="#b09040"
          scale={0.92}
          position={[1, -0.02, 0]}
          rotation={[Math.PI / 2, 0, Math.PI / 4]}
        />
        <AccumulativeShadows
          frames={100}
          color="goldenrod"
          alphaTest={0.95}
          colorBlend={0.5}
          opacity={1}
          scale={10}
          position={[0, -0.22, 0]}
        >
          <RandomizedLight
            amount={8}
            radius={7}
            ambient={0.75}
            intensity={1}
            position={[5, 5, -7.5]}
            bias={0.01}
          />
        </AccumulativeShadows>
        <directionalLight intensity={20} position={[5, 5, -7.5]} bias={0.01} />
        <OrbitControls
          enablePan={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.1}
          autoRotate
          autoRotateSpeed={-0.075}
        />
        <Environment preset="apartment" />
    </>
  );
};
