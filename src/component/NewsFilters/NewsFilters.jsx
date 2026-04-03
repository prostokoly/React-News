import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories.jsx/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./newsFilters.module.css";

const NewsFilters = ({ filters, changeFilter }) => {
    const { data: dataCategories } = useFetch(getCategories);

    return (
        <div className={styles.filters}>
            {dataCategories ? (
                <Slider>
                    <Categories
                        categories={dataCategories.categories}
                        setSelectedCategory={(category) =>
                            changeFilter("category", category)
                        }
                        selectedCategory={filters.category}
                    />
                </Slider>
            ) : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter("keywords", keywords)}
            />
        </div>
    );
};

export default NewsFilters;
