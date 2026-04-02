import styles from "./image.module.css";

import React from "react";

const Image = ({ image }) => {
    return (
        <div className={styles.wrapper}>
            {image ? (
                <img src={image} alt="news" className={styles.image} />
            ) : null}
        </div>
    );
};

export default Image;
