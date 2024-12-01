import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { type ReactElement, useState } from "react";
import { Vector3 } from "three";
import styles from "./FiberComponent.module.scss";
import InputLocation from "./input_location/inputLocation";
import XRButton from "./xr_button/XRButton";
import XRIndex from "./xr_index/XRIndex";

const store = createXRStore({
  depthSensing: true,
  hand: {
    model: false,
  },
  controller: {
    model: false,
  },
  frameBufferScaling: "high",
});

const FiberComponent = (): ReactElement => {
  const [baiusLocation, setBaiusLocation] = useState(new Vector3());
  const [isImmersive, setIsImmersive] = useState(false);
  return (
    <div className={styles.threeCanvas}>
      <InputLocation setBaiusLocation={setBaiusLocation} />
      <XRButton store={store} setIsImmersive={setIsImmersive} />
      <Canvas camera={{ position: [0, 0, 0] }}>
        {isImmersive ? (
          <XR store={store}>
            <XRIndex baiusLocation={baiusLocation} />
          </XR>
        ) : (
          <XR store={store} />
        )}
      </Canvas>
    </div>
  );
};

export default FiberComponent;
