import BannersList from "../BannersList/BannersList";
import styles from "./latestNews.module.css";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import type { INews } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { setCurrentNews } from "../../store/slices/newsSlice";

const LatestNews = () => {
    const { data, isLoading } = useGetLatestNewsQuery(null);
    const dispatch = useAppDispatch();

    const navigateTo = (news: INews) => {
        dispatch(setCurrentNews(news));
    };
    return (
        <section className={styles.section}>
            <BannersList
                banners={data && data.news}
                isLoading={isLoading}
                viewNewsSlot={(news: INews) => (
                    <p onClick={() => navigateTo(news)}>посмотреть</p>
                )}
            />
        </section>
    );
};

export default LatestNews;
