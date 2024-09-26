import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen font-['Helvitica_Now_Display']">
      <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
        {[
          "iphone",
          "macbook",
          "ios",
          "ipad",
          "services",
          "iphone",
          "macbook",
          "ios",
          "ipad",
          "services",
        ].map((e) => (
          <a href="" className="text-white font-[400] text-sm capitalize">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-36 left-1/2 -translate-x-1/2 ">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          macbook pro.
        </h3>
        <h5>Oh So Pro !</h5>
        <p className="text-center w-1/2">
          The MacBook Pro is a high-performance laptop designed for
          professionals. It features powerful processors, high-resolution
          displays, and advanced graphics capabilities. Known for its sleek
          design and premium build quality, the MacBook Pro is a popular choice
          for creative professionals, developers, and students.
        </p>
      </div>
      <Canvas camera={{ fov: 16, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        {/* <OrbitControls /> */}
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
