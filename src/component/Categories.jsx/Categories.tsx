import { forwardRef, type ForwardedRef } from "react";
import styles from "./categories.module.css";
import type { CategoriesType } from "../../interfaces";

interface IProps {
    categories: CategoriesType[];
    setSelectedCategory: (category: CategoriesType | null) => void;
    selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
    (
        { categories, setSelectedCategory, selectedCategory }: IProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        return (
            <div ref={ref} className={styles.categories}>
                <button
                    className={!selectedCategory ? styles.active : styles.item}
                    onClick={() => setSelectedCategory(null)}
                >
                    All
                </button>

                {categories.map((category) => {
                    return (
                        <button
                            className={
                                selectedCategory === category
                                    ? styles.active
                                    : styles.item
                            }
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        );
    },
);

Categories.displayName = "Categories";

export default Categories;
