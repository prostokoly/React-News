import Image from "../Image/Image";
import styles from "./newsBanner.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import type { INews } from "../../interfaces";
import type { ReactNode } from "react";

interface IProps {
    item: INews;
    viewNewsSlot?: (news: INews) => ReactNode;
}
const NewsBanner = ({ item, viewNewsSlot }: IProps) => {
    return (
        <div className={styles.banner}>
            <Image image={item?.image} />
            <h3 className={styles.title}>{item?.title}</h3>
            <p className={styles.extra}>
                {formatTimeAgo(item?.published)} by {item?.author}
            </p>
            <p style={{ cursor: "pointer" }}>
                {viewNewsSlot ? viewNewsSlot(item) : null}
            </p>
        </div>
    );
};

export default NewsBanner;
