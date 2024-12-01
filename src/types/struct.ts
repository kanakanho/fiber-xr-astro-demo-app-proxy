import type { Quaternion, Vector3 } from "three";

export type ImageInfo = {
  id: string;
  url: string;
  position: Vector3;
  quaternion: Quaternion;
  scale: [number, number];
};
