import React, { useRef } from "react";
import styles from "./slider.module.css";

const Slider = ({ children }) => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= 150;
    };

    const scrollRight = () => {
        sliderRef.current.scrollRight += 150;
    };
    return (
        <div onClick={scrollLeft} className={styles.slider}>
            <button className={styles.arrow}>{`<`}</button>
            {React.cloneElement(children, { ref: sliderRef })}
            <button
                onClick={scrollRight}
                className={styles.arrow}
            >{`>`}</button>
        </div>
    );
};

export default Slider;
