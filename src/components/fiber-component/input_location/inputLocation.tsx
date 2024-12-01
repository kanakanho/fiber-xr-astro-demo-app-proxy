import gpsToVector3 from "@/utils/gpsToVector3";
import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import type { Vector3 } from "three";

type Props = {
  setBaiusLocation: React.Dispatch<React.SetStateAction<Vector3>>;
};

type GPSLocation = {
  lat: number;
  lon: number;
};

type Elevation = {
  elevation: number;
  hsrc: string;
};

const InputLocation = ({ setBaiusLocation }: Props): ReactElement => {
  const [lat, setLat] = useState<string>("35.184488");
  const [lon, setLon] = useState<string>("137.110884");

  useEffect(() => {
    const storedLocation = localStorage.getItem("gpsLocation");
    if (storedLocation) {
      const { lat, lon }: GPSLocation = JSON.parse(storedLocation);
      setLat(String(lat));
      setLon(String(lon));
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://cyberjapandata2.gsi.go.jp/general/dem/scripts/getelevation.php?lat=${lat}&lon=${lon}&outtype=JSON`,
      );
      const data = await response.json();
      const elevation: Elevation = data;
      // x,y,zの座標を取得
      const vector = gpsToVector3({
        lat: Number(lat),
        lon: Number(lon),
        height: elevation.elevation,
      });
      setBaiusLocation(vector);
      const gpsLocation: GPSLocation = {
        lat: Number(lat),
        lon: Number(lon),
      };
      localStorage.setItem("gpsLocation", JSON.stringify(gpsLocation));
    } catch (error) {
      console.error("Error fetching elevation data:", error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="latを入力してください"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <input
        type="text"
        placeholder="lonを入力してください"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default InputLocation;
