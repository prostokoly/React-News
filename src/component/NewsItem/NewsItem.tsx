import styles from "./newsItem.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import type { INews } from "../../interfaces";
import type { ReactNode } from "react";

interface Props {
    item: INews;
    viewNewsSlot?: (news: INews) => ReactNode;
}

const NewsItem = ({ item, viewNewsSlot }: Props) => {
    return (
        <li className={styles.item}>
            <div
                className={styles.wrapper}
                style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.extra}>
                    {formatTimeAgo(item.published)} by {item.author}
                </p>
            </div>
            {viewNewsSlot ? viewNewsSlot(item) : null}
        </li>
    );
};

export default NewsItem;
