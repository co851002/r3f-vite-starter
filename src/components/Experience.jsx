// import { Canvas } from '@react-three/fiber'
import { useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";

import { Environment, Decal, RenderTexture, Text, AccumulativeShadows, RandomizedLight, PerspectiveCamera, OrbitControls } from '@react-three/drei'
 
import { useControls } from 'leva'


import { VisionPro } from './VisionPro';


export const Experience = () => {
  // const [name1, setName1] = useState("Suzy");
  // const [name2, setName2] = useState("Lizzie");

  // Define the controls
  // const values = useControls({ 
  //   'Name 1': { value: name1, transient: true },
  //   'Name 2': { value: name2, transient: true }
  // });

  // Use useEffect to update the state
  // useEffect(() => {
  //   setName1(values['Name 1']);
  //   setName2(values['Name 2']);
  // }, [values['Name 1'], values['Name 2']]); // Dependency array ensures this runs only when these values change

  const [rotation, setRotation] = useState([Math.PI / 2, 0, 0]);

  // const { rotationSpring } = useSpring({
  //   rotationSpring: rotation,
  //   config: { mass: 1, tension: 170, friction: 26 },
  // });

  // const handleRotate = () => {
  //   setRotation(prevRotation => [prevRotation[0], prevRotation[1] + Math.PI, prevRotation[2]]);
  // };



  return (
    <>
    <Canvas shadows camera={{ position: [10, 0,0], fov: 10 }} >
      <color attach="background" args={["#ccc"]} />
    <group rotation={rotation} >

    <VisionPro />

    </group>
        <AccumulativeShadows
          frames={100}
          color="goldenrod"
          alphaTest={0.95}
          colorBlend={0.5}
          opacity={1}
          scale={10}
          position={[0, -0.5, 0]}
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
          
          // autoRotate
          autoRotateSpeed={-0.75}
          maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}

        />
        <Environment preset="lobby" />
        </Canvas>
        {/* <button onClick={handleRotate} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        Rotate 180°
      </button> */}
    </>
  );
};
