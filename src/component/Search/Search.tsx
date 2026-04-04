import styles from "./search.module.css";
interface IProps {
    keywords: string;
    setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: IProps) => {
    return (
        <div className={styles.search}>
            <input
                type="text"
                className={styles.input}
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="поиск"
            />
        </div>
    );
};

export default Search;
