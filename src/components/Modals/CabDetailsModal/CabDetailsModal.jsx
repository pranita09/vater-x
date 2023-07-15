import styles from "./cabDetailsModal.module.css";
import { BiSolidColor } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

const cab = {
  created_at: "2023-07-14T15:52:40.688596+00:00",
  model_number: "1234A",
  color: "Black",
  car_photourl: "https://www.topgear.com/sites/default/files/2022/07/6_0.jpg",
  assigned_driver: "",
  id: "475e71e9-f24f-4012-ad2b-5dfcbf71b79c",
  name: "Maruti",
  registration_number: "MH21-AS-6745",
};

export const CabDetailsModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={cab?.car_photourl} alt={cab?.name} />
      </div>
      <div className={styles?.cabInfo}>
        <div className={styles.cabHeader}>
          <h1>{cab?.name}</h1>
          <MdOutlineCancel className={styles.cancelIcon} />
        </div>
        <p className={styles.regNumber}>{cab?.registration_number}</p>
        <div className={styles.cabColor}>
          <BiSolidColor className={styles.colorIcon} />
          <span>{cab?.color}</span>
        </div>
        {!cab?.assigned_driver && (
          <button className={styles.assignButton}>Assign Driver</button>
        )}
      </div>
    </div>
  );
};
