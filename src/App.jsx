import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Template from "./pages/Template";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
