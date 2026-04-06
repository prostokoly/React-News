import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router/appRouter.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                {/* <App /> */}
                <RouterProvider router={appRouter} />
            </Provider>
        </ThemeProvider>
    </StrictMode>,
);
