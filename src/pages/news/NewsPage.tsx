import { Link } from "react-router-dom";
import { useAppSelector } from "../../store";
import styles from "./news.module.css";
import Image from "../../component/Image/Image";

const NewsPage = () => {
    const currentNews = useAppSelector((state) => state.news.currentNews);

    if (!currentNews) {
        return (
            <div>
                <h1>Новость не найдена...</h1>
                <Link to={"/"}>
                    <h3 style={{ marginTop: "50px", color: "blue" }}>
                        Перейти на главную{" "}
                    </h3>
                </Link>
            </div>
        );
    }
    return (
        <>
            <main>
                <h1>{currentNews.title}</h1>
            </main>
            <div className={styles.details}>
                <Image image={currentNews.image} />
                <div className={styles.extra}>Автор: {currentNews.author}</div>
                <a href={currentNews.url}>Узнать подробнее</a>
            </div>
        </>
    );
};

export default NewsPage;
