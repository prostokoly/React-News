import { TOTAL_PAGE } from "../../constant/constant";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Paginaton/Pagination";
import styles from "./newsByFilters.module.css";

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
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

            <Pagination
                totalPage={TOTAL_PAGE}
                nextPage={handleNextPage}
                previousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            />

            <NewsList news={news} isLoading={isLoading} />

            <Pagination
                totalPage={TOTAL_PAGE}
                nextPage={handleNextPage}
                previousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            />
        </section>
    );
};

export default NewsByFilters;
