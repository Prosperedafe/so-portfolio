import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";
import Project from "../pages/project";
import Contact from "../pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "project/:id",
        element: <Project />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:id",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

