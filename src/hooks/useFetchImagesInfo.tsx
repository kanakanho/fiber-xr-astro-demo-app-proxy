import type { ImageInfo } from "@/types/struct";
import gpsToVector3 from "@/utils/gpsToVector3";
import { useEffect, useRef, useState } from "react";
import { Quaternion, Vector3 } from "three";
import useCameraPosition from "./useCameraPosition";

type Props = {
  baiusLocation: Vector3;
};

type ResImageInfo = {
  id: string;
  url: string;
  position: {
    lat: number;
    lon: number;
    height: number;
  };
  quaternion: {
    x: number;
    y: number;
    z: number;
    w: number;
  };
  scale: [number, number];
};

const useFetchImageInfos = ({ baiusLocation }: Props): ImageInfo[] => {
  const startLocationEstimationPoint = useRef(new Vector3());
  const { positionRef } = useCameraPosition();
  const imageInfos = useRef<ImageInfo[]>([]);
  const apiURL = import.meta.env.PUBLIC_API_URL;

  useEffect(() => {
    const fetchImageInfos = async () => {
      const tmpUserLocation = positionRef.current;
      startLocationEstimationPoint.current = tmpUserLocation;
      const resImageInfos: ResImageInfo[] = await fetch(`${apiURL}`).then((res) => res.json());
      const updatedImageInfos = resImageInfos.map((resImageInfo) => {
        const positionVector3 = gpsToVector3({
          lat: resImageInfo.position.lat,
          lon: resImageInfo.position.lon,
          height: resImageInfo.position.height,
        });
        return {
          id: resImageInfo.id,
          url: resImageInfo.url,
          position: new Vector3(
            positionVector3.x - baiusLocation.x + startLocationEstimationPoint.current.x,
            positionVector3.y - baiusLocation.y + startLocationEstimationPoint.current.y,
            positionVector3.z - baiusLocation.z + startLocationEstimationPoint.current.z,
          ),
          quaternion: new Quaternion(
            resImageInfo.quaternion.x,
            resImageInfo.quaternion.y,
            resImageInfo.quaternion.z,
            resImageInfo.quaternion.w,
          ),
          scale: resImageInfo.scale,
        };
      });

      imageInfos.current = updatedImageInfos;
    };

    const intervalId = setInterval(fetchImageInfos, 10000);

    // 初回実行
    fetchImageInfos();

    return () => clearInterval(intervalId);
  }, [positionRef, baiusLocation]);

  return imageInfos.current;
};

export default useFetchImageInfos;
