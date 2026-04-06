import type { ReactNode } from "react";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import type { INews } from "../../interfaces";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./newsList.module.css";

interface Props {
    news?: INews[];
    viewNewsSlot?: (news: INews) => ReactNode;
}

const NewsList = ({ news, viewNewsSlot }: Props) => {
    return (
        <ul className={styles.list}>
            {news?.map((item) => {
                return (
                    <NewsItem
                        key={item.id}
                        item={item}
                        viewNewsSlot={viewNewsSlot}
                    />
                );
            })}
        </ul>
    );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
