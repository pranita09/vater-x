import logo from "../../assets/logo.png";
import styles from "./loader.module.css";

export const Loader=()=>
{
    return (
        <div className={styles.loader}>
            <img src={logo} alt="Loading" width={250} height={250} />
        </div>
    )
}