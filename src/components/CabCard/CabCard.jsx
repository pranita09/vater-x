import styles from "./cabCard.module.css";
import {BiSolidColor } from "react-icons/bi";
import {HiDotsHorizontal,} from "react-icons/hi";
import { Menu, Modal } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import {useData} from "../../contexts/DataContext";
import { useState } from "react";
import { CabModal } from "../Modals/CabModal/CabModal";

export const CabCard = ({cab}) => {
  const {state,deleteSelectedCab}=useData();
  const [showCabModal, setShowCabModal] = useState(false);
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
  const {drivers}=state;

  return (
    <div className={styles[`cab-card-container`]}>
      <header className={styles.header}>
        <img className={styles.img} alt="car image" src="https://www.shutterstock.com/shutterstock/photos/1748114237/display_1500/stock-photo-bodrum-turkey-suzuki-swift-parked-in-city-park-near-atms-1748114237.jpg" width={160} height={160} />
        <main className={styles[`cab-information-header`]}>
        <strong>{cab?.name}</strong>
        <small>{cab?.model_number}</small>
        <span><BiSolidColor style={{color:cab?.color}}/> {cab?.color}</span>
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
      <select className={styles.dropdown}>
        <option disabled selected>Assign Driver</option>
        {drivers.map(({name,id})=>(
          <option value={id}>{name}</option>
        ))}
      </select>
    </div>
  );
};
