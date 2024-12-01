import type { ImageInfo } from "@/types/struct";
import { Image } from "@react-three/drei";
import type { ReactElement } from "react";
import { Quaternion } from "three";

export type XRImageProps = {
  imageInfo: ImageInfo;
};

const XRImage = ({ imageInfo }: XRImageProps): ReactElement => {
  const flipQuaternion = new Quaternion(
    imageInfo.quaternion.x,
    imageInfo.quaternion.y,
    imageInfo.quaternion.z,
    imageInfo.quaternion.w,
  );
  flipQuaternion.multiply(new Quaternion(0, 1, 0, 0));

  return (
    <>
      <Image
        url={imageInfo.url}
        position={imageInfo.position}
        quaternion={imageInfo.quaternion}
        scale={imageInfo.scale}
      />
      <Image
        url={imageInfo.url}
        position={imageInfo.position}
        quaternion={flipQuaternion}
        scale={imageInfo.scale}
      />
    </>
  );
};

export default XRImage;
