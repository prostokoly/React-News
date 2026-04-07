import { themeIcons } from "../../assets";
import { formatDate } from "../../helpers/formatDate";
// import "./header.modules.css";

import styles from "./header.module.css";
import { useTheme } from "../../context/ThemeContext/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
    const { isDark, toggleTheme } = useTheme();
    return (
        <header
            className={`${styles.header} ${isDark ? styles.dark : styles.light} `}
        >
            <div className={styles.info}>
                <Link to={"/"}>
                    <h1 className={styles.title}>News </h1>
                </Link>
                <p className={styles.date}>{formatDate(new Date())}</p>
            </div>
            <div>
                <img
                    src={isDark ? themeIcons.ligth : themeIcons.dark}
                    width={30}
                    alt="theme"
                    onClick={toggleTheme}
                />
            </div>
        </header>
    );
};

export default Header;
