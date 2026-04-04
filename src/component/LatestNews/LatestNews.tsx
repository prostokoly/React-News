import { getLatestNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { type INewsApiResponse } from "../../interfaces";
import BannersList from "../BannersList/BannersList";
import styles from "./latestNews.module.css";

const LatestNews = () => {
    const { data, isLoading } = useFetch<INewsApiResponse, null>(getLatestNews);
    return (
        <section className={styles.section}>
            <BannersList banners={data && data.news} isLoading={isLoading} />
        </section>
    );
};

export default LatestNews;
