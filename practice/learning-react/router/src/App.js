import {
  Home,
  About,
  Events,
  Products,
  Whoops404,
  Service,
  History,
  Location
} from "./pages";
import {
  Routes,
  Route,
  Navigate,
  useRoutes,
  useNavigate
} from "react-router-dom";

export function App2() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="service" element={<Service />} />
          <Route path="history" element={<History />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="events" element={<Events />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<Whoops404 />} />
        <Route
          path="history"
          element={<Navigate to="/about/history" replace />}
        />
      </Routes>
    </div>
  );
}

// Another way to be a router`
export default function App() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/about",
      element: <About />,
      children: [
        {
          path: "service",
          element: <Service />
        },
        {
          path: "history",
          element: <History />
        },
        {
          path: "lcation",
          element: <Location />
        }
      ]
    },
    { path: "/events", element: <Events /> },
    { path: "/products", element: <Products /> },
    { path: "*", element: <Whoops404 /> },
    { path: "history", element: <Navigate to="/about/history" replace /> }
  ]);
  return element;
}
