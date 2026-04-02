import { useEffect, useState } from "react";
import NewsBanner from "../../component/NewsBanner/NewsBanner";
import styles from "./main.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import NewsList from "../../component/NewsList/NewsList";
import Skeleton from "../../component/Skeleton/Skeleton";
import Pagination from "../../component/Paginaton/Pagination";
import Categories from "../../component/Categories.jsx/Categories";

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState("All");

    const totalPage = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category:
                    selectedCategories === "All" ? null : selectedCategories,
            });

            setNews(response.news);
            setIsLoading(false);
        } catch (error) {
            {
                console.error(error);
            }
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            setCategories(["All", ...response.categories]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage, selectedCategories]);

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <main className={styles.main}>
            <Categories
                categories={categories}
                setSelectedCategory={setSelectedCategories}
                selectedCategory={selectedCategories}
            />

            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[3]} />
            ) : (
                <Skeleton type={"banner"} count={1} />
            )}

            <Pagination
                totalPage={totalPage}
                nextPage={handleNextPage}
                previousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
            />

            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton type={"item"} count={10} />
            )}

            <Pagination
                totalPage={totalPage}
                nextPage={handleNextPage}
                previousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
            />
        </main>
    );
};

export default Main;
