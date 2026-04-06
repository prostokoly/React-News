import Header from "../../component/Header/Header";
import { useTheme } from "../providers/ThemeContext/ThemeProvidert";
import Main from "../../pages/main/ui/Page";
// import "./index.css";

function BaseLayout() {
    const { isDark } = useTheme();

    return (
        <div className={`app ${isDark ? "dark" : "light"} `}>
            <Header />
            <div className="container">
                <Main />
            </div>
        </div>
    );
}

export default BaseLayout;
