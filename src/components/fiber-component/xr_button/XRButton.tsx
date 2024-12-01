import type { XRStore } from "@react-three/xr";
import type { ReactElement } from "react";
import styles from "./XRButton.module.scss";

type Props = {
  store: XRStore;
  setIsImmersive: React.Dispatch<React.SetStateAction<boolean>>;
};

const XRButton = ({ store, setIsImmersive }: Props): ReactElement => {
  const enterAR = () => {
    store.enterAR();
    setIsImmersive(true);
  };

  return (
    <div className={styles.xrButtonContainer}>
      <button type="button" className={styles.xrButton} onClick={() => enterAR()}>
        Enter AR
      </button>
    </div>
  );
};

export default XRButton;
