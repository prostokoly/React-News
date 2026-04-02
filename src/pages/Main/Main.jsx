import NewsBanner from "../../component/NewsBanner/NewsBanner";
import styles from "./main.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import NewsList from "../../component/NewsList/NewsList";
import Pagination from "../../component/Paginaton/Pagination";
import Categories from "../../component/Categories.jsx/Categories";
import Search from "../../component/Search/Search";
import { useDebaunce } from "../../helpers/hooks/useDebaunce";
import { PAGE_SIZE, TOTAL_PAGE } from "../../constant/constant";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

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

    const { data: dataCategories } = useFetch(getCategories);

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGE) {
            changeFilter("page_number", filters.page_number + 1);
        }
    };
    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            changeFilter("page_number", filters.page_number - 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        changeFilter("page_number", pageNumber);
    };

    return (
        <main className={styles.main}>
            {dataCategories ? (
                <Categories
                    categories={dataCategories.categories}
                    setSelectedCategory={(category) =>
                        changeFilter("category", category)
                    }
                    selectedCategory={filters.category}
                />
            ) : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter("keywords", keywords)}
            />

            <NewsBanner
                isLoading={isLoading}
                item={data && data.news && data.news[3]}
            />

            <Pagination
                totalPage={TOTAL_PAGE}
                nextPage={handleNextPage}
                previousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            />

            <NewsList news={data?.news} isLoading={isLoading} />

            <Pagination
                totalPage={TOTAL_PAGE}
                nextPage={handleNextPage}
                previousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            />
        </main>
    );
};

export default Main;
