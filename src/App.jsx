import { RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import { getBlogs, loadBlog } from "./services/content";
import { loadProperties, loadProperty } from "./services/properties";
import ErrorPage from "./pages/ErrorPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const PropertiesPage = lazy(() => import("./pages/PropertiesPage"));
const PropertyDetailsPage = lazy(() => import("./pages/PropertyDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailsPage = lazy(() => import("./pages/BlogDetailsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        handle: {
          seo: {
            title: "Homely | Find your next home",
            description: "Explore thoughtfully selected homes and real estate insights with Homely.",
          },
        },
      },
      {
        path: "/properties",
        element: <PropertiesPage />,
        loader: loadProperties,        
        errorElement : <ErrorPage />,
        handle: {
          seo: {
            title: "Properties | Homely",
            description: "Browse available homes and find the property that fits your next move.",
          },
        },
      },
      {
        path: "/properties/:id",
        element: <PropertyDetailsPage />,
        loader: loadProperty,
        handle: {
          seo: (property) => ({
            title: property ? `${property.name} | Homely` : "Property details | Homely",
            description: property?.description?.[0] || "View property details, features, and photos.",
            image: property?.heroImage || property?.images?.[0]?.medium?.src,
            type: "article",
          }),
        },
      },
      {
        path: "/blog",
        element: <BlogPage />,
        loader: getBlogs,
        errorElement : <ErrorPage />,
        handle: {
          seo: {
            title: "Real estate insights | Homely",
            description: "Read Homely's latest property market news, tips, and real estate guides.",
          },
        },
      },
      {
        path: "/blog/:id",
        element: <BlogDetailsPage />,
        loader: loadBlog,
        handle: {
          seo: (blog) => ({
            title: blog ? `${blog.title} | Homely` : "Article | Homely",
            description: blog?.excerpt || "Read the latest real estate insights from Homely.",
            image: blog?.image,
            type: "article",
          }),
        },
      },
      {
        path: "/contact",
        element: <ContactPage />,
        handle: {
          seo: {
            title: "Contact | Homely",
            description: "Get in touch with Homely for personalized real estate guidance.",
          },
        },
      },
      {
        path: "*",
        element: <NotFoundPage />,
        handle: {
          seo: {
            title: "Page not found | Homely",
            description: "The page you requested could not be found.",
            noIndex: true,
          },
        },
      },
    ],
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
