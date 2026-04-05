import Header from "./component/Header/Header";
import Main from "./pages/Main/Main";

import "./index.css";
import { useTheme } from "./context/ThemeContext/ThemeContext";
import { useAppSelector } from "./store";
import { useGetNewsQuery } from "./store/services/newsApi";

function App() {
    const { isDark } = useTheme();
    const news = useAppSelector((state) => state.news.news);

    //нужно создать новый стейт и сделать экран загрузки
    // const { isLoading, data, error } = useGetNewsQuery({
    //     page_number: 1,
    //     page_size: 10,
    // });

    // if (isLoading) {
    //     return <h1>Loading site...</h1>;
    // }
    return (
        <div className={`app ${isDark ? "dark" : "light"} `}>
            <Header />
            <div className="container">
                <Main />
            </div>
        </div>
    );
}

export default App;
