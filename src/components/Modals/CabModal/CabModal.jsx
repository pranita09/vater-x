import { useEffect, useState } from "react";
import styles from "./cabModal.module.css";
import { BsCamera } from "react-icons/bs";
import { useData } from "../../../contexts/DataContext";

export const CabModal = ({ isEdit,cab,setShowCabModal }) => {
  const { addNewCab,editSelectedCab } = useData();
  const [profilePhoto, setProfilePhoto] = useState("");

  
  const [cabDetails,setCabDetails] = useState(
    {
      name:"",
      registration_number:"",
      model_number:"",
      color:""
    }
)
    
  const formInputHandler = (e) => {
    const { name, value } = e.target;
    setCabDetails({ ...cabDetails, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(isEdit){
      editSelectedCab(cab?.id,cabDetails)
    }else{
      addNewCab({ ...cabDetails, profile_photo_url: profilePhoto });
    }
    setCabDetails({
      name:"",
      registration_number:"",
      model_number:"",
      color:""
    });
    setProfilePhoto(null);
    setShowCabModal(false);
  };

  useEffect(()=>{isEdit && setCabDetails(cab)},[])

  return (
    <div className={styles.container}>
      <p className={styles.header}>{isEdit ? "Edit" : "Add"} Cab Details</p>
      <form className={styles.formInputs} onSubmit={formSubmitHandler}>
        <input type="text" placeholder="Enter name" required value={cabDetails.name} name="name" onChange={formInputHandler} />
        <input type="text" placeholder="Registration Number" name="registration_number" value={cabDetails.registration_number} required onChange={formInputHandler}/>
        <input type="text" placeholder="Modal Number" value={cabDetails.model_number} name="model_number" required onChange={formInputHandler}/>
        <input type="text" name='color' placeholder="Color of the cab" value={cabDetails.color} required onChange={formInputHandler}/>
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
          <button className={styles.cancelBtn} onClick={()=>setShowCabModal(false)} >Cancel</button>
        </div>
      </form>
    </div>
  );
};
