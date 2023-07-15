import { useState } from "react";
import styles from "./driverModal.module.css";
import { BsCamera } from "react-icons/bs";
import { modalContainerStyles } from "../../../utils/constants";
import { useData } from "../../../contexts/DataContext";

export const DriverModal = ({ isEdit, setShowDriverModal }) => {
  const { addNewDriver } = useData();
  const [driverDetails, setDriverDetails] = useState({
    name: "",
    email: "",
    phone_number: "",
    rating: "",
  });
  const [profilePhoto, setProfilePhoto] = useState("");

  const formInputHandler = (e) => {
    const { name, value } = e.target;
    setDriverDetails({ ...driverDetails, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    addNewDriver({ ...driverDetails, profile_photo_url: profilePhoto });
    setDriverDetails({
      name: "",
      email: "",
      phone_number: "",
      rating: "",
    });
    setProfilePhoto(null);
    setShowDriverModal(false);
  };

  return (
    <div className={styles.container} style={modalContainerStyles}>
      <p className={styles.header}>{isEdit ? "Edit" : "Add"} Driver Details</p>
      <form className={styles.formInputs} onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={driverDetails?.name}
          onChange={formInputHandler}
          required
        />
        <input
          type="email"
          placeholder="Email Id"
          name="email"
          value={driverDetails?.email}
          onChange={formInputHandler}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phone_number"
          value={driverDetails?.phone_number}
          onChange={formInputHandler}
          required
        />
        <input
          type="text"
          placeholder="Rating"
          name="rating"
          value={driverDetails?.rating}
          onChange={formInputHandler}
          required
        />
        <label>
          <input
            type="file"
            accept="image/*"
            value={profilePhoto}
            onChange={(e) => setProfilePhoto(e.target.files[0])}
          />
          <span>
            <BsCamera title="Add Profile Picture" />
          </span>
        </label>
        {profilePhoto && <p>Photo is choosen</p>}
        <div className={styles.btns}>
          <button type="submit" className={styles.submitBtn}>
            {isEdit ? "Save" : "Add"}
          </button>
          <button
            className={styles.cancelBtn}
            onClick={() => setShowDriverModal(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
