import styles from "./cabCard.module.css";
import {BiSolidColor } from "react-icons/bi";
import {HiDotsHorizontal,} from "react-icons/hi";
import { Menu, Modal } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import {useData} from "../../contexts/DataContext";
import { useState } from "react";
import { CabModal } from "../Modals/CabModal/CabModal";
import {defaultAvatar,defaultCab} from "../../utils/utilFunctions";

import { MdOutlineCancel } from "react-icons/md";

export const CabCard = ({cab}) => {
  const {state,deleteSelectedCab,assignedCab,removedCab, getDrivers}=useData();
  const [showCabModal, setShowCabModal] = useState(false);

  const [cabAssignedDriver,setCabAssignedDriver] = useState(cab?.assigned_driver)
  
  const {drivers}=state;
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEditModal = () => {
    setAnchorEl(null)
    setShowCabModal(!showCabModal)
  }
 
  const handleChange= (e) => {
    setCabAssignedDriver(e.target.value)
    assignedCab(e.target.value,cab.id)
  }

  const removeDriver = () =>{
    removedCab(cabAssignedDriver,cab?.id)
    setCabAssignedDriver(null)
  }

  return (
    <div className={styles[`cab-card-container`]}>
      <header className={styles.header}>
        <img className={styles.img} alt="car" src={defaultCab(cab?.car_photourl)} width={160} height={160} />
        <main className={styles[`cab-information-header`]}>
        <strong>{cab?.name}</strong>
        <small>{cab?.model_number}</small>
        <span><BiSolidColor style={{color:cab?.color}}/> {cab?.color}</span>
        {cabAssignedDriver && <div className={styles[`driver-card`]}>
        <img
            className={styles[`driver-img`]}
            alt="img"
            src={defaultAvatar(drivers.find(({id})=>id===cabAssignedDriver)?.profile_photo_url)}
            width={45}
            height={45}
          />
          <strong className={styles.name}>{drivers.find(({id})=>id===cabAssignedDriver)?.name}</strong>
          
          
            <MdOutlineCancel className={styles[`driver-close-icon`]} onClick={()=>removeDriver()} />
          
      </div>}
      {!cabAssignedDriver && <select className={styles.dropdown} value={ cabAssignedDriver} onChange={(e)=>handleChange(e)}>
        <option selected>Assign Driver</option>
        {drivers.map(({name,id,assigned_cab})=>{if(assigned_cab===null) return (<option value={id}>{name}</option>)})}
      </select>}
        </main>
        <Button
        id="more-option"
        className={styles.icon}
        aria-controls={open ? 'more-options' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <HiDotsHorizontal />
      </Button>
      <Menu
        id="more-options"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>handleEditModal()}>Edit</MenuItem>
        <MenuItem onClick={()=>deleteSelectedCab(cab?.id)}>Delete</MenuItem>
      </Menu>
      </header>
      {showCabModal && (
        <Modal open={showCabModal} onClose={() => setShowCabModal(false)}>
          <>
            <CabModal isEdit={true} cab={cab} setShowCabModal={setShowCabModal} />
          </>
        </Modal>
      )}
      
    </div>
  );
};
