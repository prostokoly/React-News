import { useDispatch } from "react-redux";
import { useTheme } from "../../context/ThemeContext/ThemeContext";
import type { IFilters } from "../../interfaces";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import Categories from "../Categories.jsx/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./newsFilters.module.css";
import { setFilters } from "../../store/slices/newsSlice";

interface IProps {
    filters?: IFilters;
}
const NewsFilters = ({ filters }: IProps) => {
    const { isDark } = useTheme();

    const { data } = useGetCategoriesQuery(null);
    const dispatch = useDispatch();

    return (
        <div className={styles.filters}>
            {data ? (
                <Slider isDark={isDark}>
                    <Categories
                        categories={data.categories}
                        setSelectedCategory={(category) =>
                            dispatch(
                                setFilters({
                                    key: "category",
                                    value: category,
                                }),
                            )
                        }
                        selectedCategory={filters!.category}
                    />
                </Slider>
            ) : null}

            <Search
                keywords={filters!.keywords}
                setKeywords={(keywords) =>
                    dispatch(
                        setFilters({
                            key: "keywords",
                            value: keywords,
                        }),
                    )
                }
            />
        </div>
    );
};

export default NewsFilters;
