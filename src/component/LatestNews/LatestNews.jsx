import BannersList from "../BannersList/BannersList";
import styles from "./latestNews.module.css";

const LatestNews = ({ banners, isLoading }) => {
    return (
        <section className={styles.section}>
            <BannersList banners={banners} isLoading={isLoading} />
        </section>
    );
};

export default LatestNews;
