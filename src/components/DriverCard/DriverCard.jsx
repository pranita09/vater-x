import styles from "./driverCard.module.css";
import { DriverDetailsModal, DriverModal } from "..";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineCable, MdOutlineEmail } from "react-icons/md";

import { handleCopyToClipboard } from "../../utils/utilFunctions";
import { useState } from "react";
import { Menu, Modal } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useData } from "../../contexts/DataContext";

export const DriverCard = ({ driver }) => {
  const [showDriverDetails, setShowDriverDetails] = useState(false);
  const [showDriverModal, setShowDriverModal] = useState(false);

  
  const [driverAssignedCab,setDriverAssignedCab] = useState(driver?.assigned_cab)
  const {deleteSelectedDriver,state,removedCab,assignedCab} = useData()
  const {cabs} = state
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
    setShowDriverModal(!showDriverModal)

  }
  const handleChange= (e) => {
    setDriverAssignedCab(e.target.value)
    assignedCab(driver.id,e.target.value)
  }


  return (
    <div className={styles[`driver-card-container`]}>
      <header className={styles.header}>
        <img
          className={styles.img}
          alt="img"
          src="https://64.media.tumblr.com/8f738ecdaeb21216a3246f8b0b2512c6/763fa44ee059f802-e5/s400x600/85ccc7cdea62a007c2d7bc78629ee0079f683f64.png"
          width={68}
          height={68}
        />
        <strong className={styles.name}>{driver?.name}</strong>
        <small
          className={styles.id}
          onClick={() => handleCopyToClipboard(driver?.id)}
        >
          XXYY{driver?.id.slice(-5)}
        </small>
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
        <MenuItem onClick={()=>deleteSelectedDriver(driver?.id)}>Delete</MenuItem>
      </Menu>

      {showDriverModal && (
        <Modal open={showDriverModal} onClose={() => setShowDriverModal(false)}>
          <>
            <DriverModal isEdit={true} driver={driver} setShowDriverModal={setShowDriverModal} />
          </>
        </Modal>
      )}
      </header>

      <main className={styles[`section-container`]}>
        <section className={styles.section}>
          <BsTelephone className={styles.iconTwo} />
          <span>{driver?.phone_number}</span>
        </section>

        <section className={styles.section}>
          <MdOutlineEmail className={styles.iconTwo} />
          <span>{driver?.email}</span>
        </section>
      </main>
      <button
        className={styles.button}
        onClick={() => setShowDriverDetails(true)}
      >
        VIEW PROFILE
      </button>
      {showDriverDetails && (
        <Modal
          open={showDriverDetails}
          onClose={() => setShowDriverDetails(false)}
        >
          <>
            <DriverDetailsModal
              driver={driver}
              setShowDriverDetails={setShowDriverDetails}
            />
          </>
        </Modal>
      )}

      {!driverAssignedCab && <select className={styles.dropdown} value={  driverAssignedCab} onChange={(e)=>handleChange(e)}>
        <option selected>Assign Driver</option>
        {cabs.map(({name,id})=><option value={id}>{name}</option>)}
      </select>}
    </div>

    
  );
  
};
