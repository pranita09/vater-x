import styles from "./cabModal.module.css";
import { BsCamera } from "react-icons/bs";

export const CabModal = ({ isEdit }) => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>{isEdit ? "Edit" : "Add"} Cab Details</p>
      <form className={styles.formInputs}>
        <input type="text" placeholder="Enter name" />
        <input type="text" placeholder="Registration Number" />
        <input type="text" placeholder="Modal Number" />
        <input type="text" placeholder="Color of the cab" />
        <label>
          <input type="file" accept="*/image" />
          <span>
            <BsCamera title="Add Cab Picture" />
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
