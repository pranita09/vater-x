import styles from "./driverDetailsModal.module.css";
import { MdOutlineCancel, MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const driver = {
  assigned_cab: "qwsadsed",
  created_at: "2023-07-14T15:59:37+00:00",
  email: "driver@mail.com",
  id: "5f030811-5f0a-40ee-be60-87953e2947ac",
  name: "John Doe",
  phone_number: "2323443",
  profile_photo_url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  rating: 2,
};

export const DriverDetailsModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={driver?.profile_photo_url} alt={driver?.name} />
      </div>
      <div className={styles.driverInfo}>
        <div className={styles.driverHeader}>
          <h2>{driver?.name}</h2>
          <MdOutlineCancel className={styles.cancelIcon} />
        </div>
        <span className={styles.id}>{driver?.assigned_cab}</span>
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
