import React, { useRef } from "react";
import styles from "./slider.module.css";

interface Props {
    children: React.ReactElement;
    isDark: boolean;
}

const Slider = ({ children, isDark }: Props) => {
    const sliderRef = useRef<HTMLElement | null>(null);

    const scrollLeft = () => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollLeft -= 150;
    };

    const scrollRight = () => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollLeft += 150;
    };
    return (
        <div
            onClick={scrollLeft}
            className={`${styles.slider} ${isDark ? styles.dark : styles.light} `}
        >
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
