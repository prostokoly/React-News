import withSkeleton from "../../helpers/hocs/withSkeleton";
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

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
