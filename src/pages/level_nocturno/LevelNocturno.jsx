import {
  BakeShadows,
  KeyboardControls,
  OrbitControls,
} from "@react-three/drei";
import React, { Suspense } from "react";
import { useRef } from "react";
import { World } from "./World/World";

import { Ligths } from "./lights/Ligths";
import { EnviromentSky } from "./enviroments/EnviromentSky";
import { useKeyboard } from "./Controls/useKeyboard";
import { Sphere } from "./figures/Sphere";
import { Girl } from "./Charaters/Avatars/Girl";
import { WelcomeText } from "./World/WelcomeText";
import { EvilBoyCircle } from "./Charaters/EvilsBoys/EvilBoyCircle";
import { EvilBoyDiagonal } from "./Charaters/EvilsBoys/EvilBoyDiagonal";
import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";

export const LevelNocturno = () => {
  const boxRef = useRef(null);
  const keyMap = useKeyboard();
  console.log("prueba");
  return (
    <>
      {/* <Perf position="top-left"/>
                    
            */}
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        {/* <Pane/> */}
        <Canvas
          shadows={true}
          camera={{
            position: [0, 1.5, -1],
            rotation: [0, 0, 0],
          }}
        >
          <OrbitControls target={[0, 1.5, -5]} />
          <Suspense fallback={null}>
            <Ligths />
            <BakeShadows />
            <EnviromentSky />
            <Physics debug={true}>
              <World />
              <EvilBoyCircle position={[0, 0.5, -6]}></EvilBoyCircle>
              <EvilBoyDiagonal position={[0, 0.5, -50]}></EvilBoyDiagonal>
              <Girl></Girl>
              <Sphere position={[0, 1.6, -5]} />
            </Physics>
            <WelcomeText position={[0, 1.6, -5]} />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </>
  );
};
