import BannersList from "../BannersList/BannersList";
import styles from "./latestNews.module.css";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import type { INews } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { setCurrentNews } from "../../store/slices/newsSlice";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
    const { data, isLoading } = useGetLatestNewsQuery(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const navigateTo = (news: INews) => {
        dispatch(setCurrentNews(news));
        navigate(`/news/${news.id}`);
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
