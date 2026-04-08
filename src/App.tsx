import Header from "./component/Header/Header";

import "./index.css";
import { useTheme } from "./context/ThemeContext/ThemeContext";
import { Outlet } from "react-router-dom";

function App() {
    const { isDark } = useTheme();

    return (
        <div className={`app ${isDark ? "dark" : "light"} `}>
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
