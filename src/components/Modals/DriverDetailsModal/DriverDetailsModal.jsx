import styles from "./driverDetailsModal.module.css";
import { MdOutlineCancel, MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { modalContainerStyles } from "../../../utils/constants";

export const DriverDetailsModal = ({ driver, setShowDriverDetails }) => {
  return (
    <div className={styles.container} style={modalContainerStyles}>
      <div className={styles.imageContainer}>
        <img src={driver?.profile_photo_url} alt={driver?.name} />
      </div>
      <div className={styles.driverInfo}>
        <div className={styles.driverHeader}>
          <h2>{driver?.name}</h2>
          <div
            className={styles.cancelIcon}
            onClick={() => setShowDriverDetails(false)}
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
