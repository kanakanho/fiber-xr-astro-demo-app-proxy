import { MathUtils, Vector3 } from "three";

function gpsToVector3({ lat, lon, height }: { lat: number; lon: number; height: number }): Vector3 {
  const earthRadius = 6371000;

  const latRad = MathUtils.degToRad(lat);
  const lonRad = MathUtils.degToRad(lon);

  const radius = earthRadius + height;
  const x = radius * Math.cos(latRad) * Math.cos(lonRad);
  const y = radius * Math.cos(latRad) * Math.sin(lonRad);
  const z = radius * Math.sin(latRad);

  return new Vector3(x, y, z);
}

export default gpsToVector3;
