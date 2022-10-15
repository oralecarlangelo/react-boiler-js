import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./App.css";
import MainPage from "./pages";
import AboutMe from "./pages/about-me";
import Contact from "./pages/contact";
import Home from "./pages/home";
import MarketingPage from "./pages/marketing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
          <h1 className="text-6xl text-center">Landing</h1>
          <Link
            className="mt-4 bg-white text-black px-4 py-2 rounded-md font-semibold"
            to="/home"
          >
            Go to my Portfolio
          </Link>
        </div>
      ),
    },
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about-me",
          element: <AboutMe />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/",
      element: <MarketingPage />,
      children: [
        {
          path: "/market",
          element: <Home />,
        },
        {
          path: "/other-about-me",
          element: <AboutMe />,
        },
        {
          path: "/other-contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
