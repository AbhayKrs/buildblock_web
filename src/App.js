import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from './store';

import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import Templates from "./containers/Templates";
import Editor from "./containers/Editor";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Dashboard from "./containers/Dashboard";

const Layout = (props) => {
  const theme = useSelector(state => state.common.theme);

  return (
    <main className={theme}>
      <Header />
      <div className="containerBox flex flex-col bg-slate-200 dark:bg-neutral-800">
        <Outlet />
        <Footer />
      </div>
    </main>
  )
};

const App = () => {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/templates',
          element: <Templates />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/editor',
          element: <Editor />
        },
        {
          path: '/signin',
          element: <Signin />
        },
        {
          path: '/signup',
          element: <Signup />
        }
      ]
    }
  ])

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;