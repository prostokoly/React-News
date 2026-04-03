import styles from "./main.module.css";
import { useDebaunce } from "../../helpers/hooks/useDebaunce";
import { PAGE_SIZE } from "../../constant/constant";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import LatestNews from "../../component/LatestNews/LatestNews";
import NewsByFilters from "../../component/NewsByFilters/NewsByFilters";
import { getNews } from "../../api/apiNews";

const Main = () => {
    const { filters, changeFilter } = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: "",
    });

    const debounceKeywords = useDebaunce(filters.keywords, 1500);

    const { data, isLoading } = useFetch(getNews, {
        ...filters,
        keywords: debounceKeywords,
    });

    return (
        <main className={styles.main}>
            <LatestNews banners={data && data.news} isLoading={isLoading} />

            <NewsByFilters
                filters={filters}
                changeFilter={changeFilter}
                news={data?.news}
                isLoading={isLoading}
            />
        </main>
    );
};

export default Main;
