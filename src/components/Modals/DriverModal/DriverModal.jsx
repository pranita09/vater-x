import styles from "./driverModal.module.css";
import { BsCamera } from "react-icons/bs";

export const DriverModal = ({ isEdit }) => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>{isEdit ? "Edit" : "Add"} Driver Details</p>
      <form className={styles.formInputs}>
        <input type="text" placeholder="Enter name" required />
        <input type="email" placeholder="Email Id" required />
        <input type="text" placeholder="Phone Number" required />
        <input type="text" placeholder="Rating" required />
        <label>
          <input type="file" accept="*/image" required />
          <span>
            <BsCamera title="Add Profile Picture" />
          </span>
        </label>
        <div className={styles.btns}>
          <button type="submit" className={styles.submitBtn}>
            {isEdit ? "Save" : "Add"}
          </button>
          <button className={styles.cancelBtn}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
