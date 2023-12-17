import {
  Decal,
  RenderTexture,
  Text,
  PerspectiveCamera,
} from "@react-three/drei";

export const Ring = ({ text, color, ...props }) => (
  <group {...props}>
    <mesh castShadow scale={[1, 1, 3]}>
      <torusGeometry args={[1, 0.075, 32, 64]} />
      <meshStandardMaterial color={color} metalness={1} roughness={0.1} />
      <Decal position={[0, -0.68, 0]} rotation={0} scale={[1.5, 0.15, 0.53]}>
        <meshStandardMaterial
          roughness={0}
          transparent
          polygonOffset
          polygonOffsetFactor={-10}
        >
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera
              makeDefault
              manual
              aspect={2.5 / 1}
              position={[0, 0, 5]}
            />
            <Text
              font="https://fonts.gstatic.com/s/homemadeapple/v18/Qw3EZQFXECDrI2q789EKQZJob3x-.woff"
              fontSize={1.75}
              letterSpacing={-0.05}
              color="yellow"
            >
              {text}
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>
    </mesh>
  </group>
);
