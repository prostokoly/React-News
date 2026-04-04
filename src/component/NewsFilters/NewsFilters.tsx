import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import type { ICategoriesApiResponse, IFilters } from "../../interfaces";
import Categories from "../Categories.jsx/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./newsFilters.module.css";

interface IProps {
    filters?: IFilters;
    changeFilter: (key: string, value: string | number | null) => void;
}
const NewsFilters = ({ filters, changeFilter }: IProps) => {
    const { data: dataCategories } = useFetch<ICategoriesApiResponse, null>(
        getCategories,
    );

    return (
        <div className={styles.filters}>
            {dataCategories ? (
                <Slider>
                    <Categories
                        categories={dataCategories.categories}
                        setSelectedCategory={(category) =>
                            changeFilter("category", category)
                        }
                        selectedCategory={filters!.category}
                    />
                </Slider>
            ) : null}

            <Search
                keywords={filters!.keywords}
                setKeywords={(keywords) => changeFilter("keywords", keywords)}
            />
        </div>
    );
};

export default NewsFilters;
