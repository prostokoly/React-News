import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

// import "./index.css";
import { ThemeProvider } from "./providers/ThemeContext/ThemeProvidert";
import { store } from "./appStore";
import BaseLayout from "./layouts/BaseLayout";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <BaseLayout />
            </Provider>
        </ThemeProvider>
    </StrictMode>,
);
