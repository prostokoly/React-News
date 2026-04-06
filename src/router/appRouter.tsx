import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main/Main";
import { NewsPage } from "../pages/news";

export const appRouter = createBrowserRouter([
    {
        element: <App />,
        errorElement: <div>error</div>,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/news/:id",
                element: <NewsPage />,
            },
        ],
    },
]);

export default appRouter;
