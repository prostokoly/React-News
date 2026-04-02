import NewsItem from "../NewsItem/NewsItem";
import styles from "./newsList.module.css";

import React from "react";

const NewsList = ({ news }) => {
    return (
        <ul className={styles.list}>
            {news.map((item) => {
                return <NewsItem key={item.id} item={item} />;
            })}
        </ul>
    );
};

export default NewsList;
