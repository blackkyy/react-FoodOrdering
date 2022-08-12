import styles from "./HeaderButton.module.css";
import CartIcon from "./CartIcon"


const HeaderButton = () => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={styles.badge}>5</span>
        </button>
    );
}

export default HeaderButton;