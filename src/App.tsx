import Header from "./component/Header/Header";
import Main from "./pages/Main/Main";

import "./index.css";
import { useTheme } from "./context/ThemeContext/ThemeContext";

function App() {
    const { isDark } = useTheme();
    return (
        <div className={`app ${isDark ? "dark" : "light"} `}>
            <Header />
            <div className="container">
                <Main isDark={isDark} />
            </div>
        </div>
    );
}

export default App;
