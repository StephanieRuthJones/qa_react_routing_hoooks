import { useRoutes } from "react-router-dom"
import App from "./App";
import Dogs from "./components/list-components/Dogs";
import FavDogs from "./components/list-components/FavDogs";

export default function Router() {
  let element = useRoutes([
    {
      element: <App />,
      children: [
        { path: "/", element: <Dogs /> },
        { path: "favorites", element: <FavDogs /> }
      ]
    }
  ]);

  return element;
}
