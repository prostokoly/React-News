import React from "react";

import styles from "./pagination.module.css";
import type { IPaginationProps } from "../../interfaces";
import { useTheme } from "../../app/providers/ThemeContext/ThemeProvidert";

const Pagination = ({
    totalPage,
    nextPage,
    previousPage,
    currentPage,
    handlePageClick,
}: IPaginationProps) => {
    const { isDark } = useTheme();
    return (
        <div
            className={`${styles.pagination} ${isDark ? styles.dark : styles.light} `}
        >
            <button
                disabled={currentPage <= 1}
                className={styles.arrow}
                onClick={() => previousPage()}
            >
                {"<"}
            </button>
            <div className={styles.list}>
                {[...Array(totalPage)].map((_, index) => {
                    return (
                        <button
                            onClick={() => handlePageClick(index + 1)}
                            className={styles.pagesNumber}
                            disabled={index + 1 === currentPage}
                            key={index}
                        >
                            {index + 1}
                        </button>
                    );
                })}
            </div>
            <button
                className={styles.arrow}
                disabled={currentPage >= totalPage}
                onClick={() => nextPage()}
            >
                {">"}
            </button>
        </div>
    );
};

export default Pagination;
