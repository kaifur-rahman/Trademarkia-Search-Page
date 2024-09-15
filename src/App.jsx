import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Template from "./pages/Template";
import { SearchProvider } from "./components/contexts/SearchContext";
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <SearchProvider>
        <Template />
      </SearchProvider>
    ),
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
