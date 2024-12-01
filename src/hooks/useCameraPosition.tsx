import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Quaternion, Vector3 } from "three";

const vectorHelper = new Vector3();
const quaternionHelper = new Quaternion();

const useCameraPosition = () => {
  const camera = useThree((state) => state.camera);
  const positionRef = useRef<Vector3>(new Vector3());
  const quaternionRef = useRef<Quaternion>(new Quaternion());
  useFrame(() => {
    camera.getWorldPosition(vectorHelper);
    camera.getWorldQuaternion(quaternionHelper);
    positionRef.current.set(vectorHelper.x, vectorHelper.y, vectorHelper.z);
    quaternionRef.current.set(
      quaternionHelper.x,
      quaternionHelper.y,
      quaternionHelper.z,
      quaternionHelper.w,
    );
  });

  return { positionRef, quaternionRef };
};

export default useCameraPosition;
