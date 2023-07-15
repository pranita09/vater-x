import styles from "./driverDetailsModal.module.css";
import { MdOutlineCancel, MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { modalContainerStyles } from "../../../utils/constants";

import {defaultAvatar,handleCopyToClipboard} from "../../../utils/utilFunctions";

export const DriverDetailsModal = ({ driver, setShowDriverDetails, setAnchorEl }) => {
  return (
    <div className={styles.container} style={modalContainerStyles}>
      <div className={styles.imageContainer}>
        <img src={defaultAvatar(driver?.profile_photo_url)} alt={driver?.name} />
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
        <span className={styles.id} onClick={() => handleCopyToClipboard(driver?.id)}>XXYY{driver?.id.slice(-5)}</span>
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
