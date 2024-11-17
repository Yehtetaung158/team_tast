import { createBrowserRouter } from "react-router-dom";
import HomePage from "../feature/home/pages/HomePage";
import AboutPage from "../feature/about/page/AboutPage";
import ContactPage from "../feature/contact/pages/ContactPage";
import BlogPage from "../feature/blog/pages/BlogPage";
import PageLayoud from "../components/PageLayoud";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageLayoud />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
    ],
  },
]);

export default routes;
