import { TOTAL_PAGE } from "../../constant/constant";
import { useDebaunce } from "../../helpers/hooks/useDebaunce";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./newsByFilters.module.css";

const NewsByFilters = () => {
    const dispatch = useAppDispatch();

    const filters = useAppSelector((state) => state.news.filters);
    const news = useAppSelector((state) => state.news.news);

    const debounceKeywords = useDebaunce(filters.keywords, 1500);

    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debounceKeywords,
    });

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGE) {
            // changeFilter("page_number", filters.page_number + 1);
            dispatch(
                setFilters({
                    key: "page_number",
                    value: filters.page_number + 1,
                }),
            );
        }
    };
    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            // changeFilter("page_number", filters.page_number - 1);
            dispatch(
                setFilters({
                    key: "page_number",
                    value: filters.page_number - 1,
                }),
            );
        }
    };

    const handlePageClick = (pageNumber: number) => {
        // changeFilter("page_number", pageNumber);
        dispatch(
            setFilters({
                key: "page_number",
                value: pageNumber,
            }),
        );
    };

    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} />
            <PaginationWrapper
                totalPage={TOTAL_PAGE}
                nextPage={handleNextPage}
                previousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
                top
                bottom
            >
                <NewsList news={news} isLoading={isLoading} />
            </PaginationWrapper>
        </section>
    );
};

export default NewsByFilters;
