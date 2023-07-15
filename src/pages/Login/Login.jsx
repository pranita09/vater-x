import styles from "./login.module.css";

import { useData } from "../../contexts/DataContext";
import { actionTypes } from "../../utils/constants";

export const Login = () => {
  const {state,dispatch, loginHandler, guestLoginHandler}=useData();
  const {login:{name,password}} = state;
  const { LOGIN_FIELDS } = actionTypes;

  return (
    <div className={styles[`container`]}>
      <h1 className={styles.header}>VATER-X</h1>
      <div className={styles[`login-container`]}>
        <main className={styles.main}>
        <label className={styles.label}>Login</label>
        <input className={styles.input} placeholder="Email" value={name} onChange={(e)=>dispatch({type:LOGIN_FIELDS,payload:{inputField:"name",data:e.target.value}})}></input>
        <input className={styles.input} type="password" placeholder="Password" value={password} onChange={(e)=>dispatch({type:LOGIN_FIELDS,payload:{inputField:"password",data:e.target.value}})}></input>
        <button className={styles.button} onClick={()=>loginHandler()}>LOGIN</button>
        <button className={styles.button} onClick={()=>guestLoginHandler()}>Login as Guest</button>
        </main>
        
      </div>
    </div>
  );
};