import useFetchImageInfos from "@/hooks/useFetchImagesInfo";
import type { ReactElement } from "react";
import type { Vector3 } from "three";
import XRImage from "./xr_image/XRImage";

type Props = {
  baiusLocation: Vector3;
};

const XRIndex = ({ baiusLocation }: Props): ReactElement => {
  const imageInfos = useFetchImageInfos({ baiusLocation });
  return (
    <>
      {imageInfos.map((imageInfo) => (
        <XRImage key={imageInfo.id} imageInfo={imageInfo} />
      ))}
    </>
  );
};

export default XRIndex;
