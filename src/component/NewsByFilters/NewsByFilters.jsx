import { getNews } from "../../api/apiNews";
import { PAGE_SIZE, TOTAL_PAGE } from "../../constant/constant";
import { useDebaunce } from "../../helpers/hooks/useDebaunce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./newsByFilters.module.css";

const NewsByFilters = () => {
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
        <section className={styles.section}>
            <NewsFilters filters={filters} changeFilter={changeFilter} />
            <PaginationWrapper
                totalPage={TOTAL_PAGE}
                nextPage={handleNextPage}
                previousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
                top
                bottom
            >
                <NewsList news={data?.news} isLoading={isLoading} />
            </PaginationWrapper>
        </section>
    );
};

export default NewsByFilters;
