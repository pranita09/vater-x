import styles from "./driverDetailsModal.module.css";
import { MdOutlineCancel, MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { modalContainerStyles } from "../../../utils/constants";

export const DriverDetailsModal = ({ driver, setShowDriverDetails, setAnchorEl }) => {
  return (
    <div className={styles.container} style={modalContainerStyles}>
      <div className={styles.imageContainer}>
        <img src="https://64.media.tumblr.com/8f738ecdaeb21216a3246f8b0b2512c6/763fa44ee059f802-e5/s400x600/85ccc7cdea62a007c2d7bc78629ee0079f683f64.png" alt={driver?.name} />
      </div>
      <div className={styles.driverInfo}>
        <div className={styles.driverHeader}>
          <h2>{driver?.name}</h2>
          <div
            className={styles.cancelIcon}
            onClick={() => {setShowDriverDetails(false);setAnchorEl && setAnchorEl(null)}}
          >
            <MdOutlineCancel />
          </div>
        </div>
        <span className={styles.id}>XXYY{driver?.id.slice(-5)}</span>
        <div className={styles.driverContact}>
          <BsTelephone />
          <span>{driver?.phone_number}</span>
        </div>
        <div className={styles.driverContact}>
          <MdOutlineEmail />
          <span>{driver?.email}</span>
        </div>
      </div>
    </div>
  );
};
