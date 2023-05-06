import { Suspense, lazy } from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import { RoutePaths } from "./routes/route-paths";

const Home = lazy(() => import("./pages/home/Home"));
const Player = lazy(() => import("./pages/player/Player"));

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>...</>}>
        <Routes>
          <Route path={RoutePaths.HOME} element={<Home />} />
          <Route path={RoutePaths.PLAYER(":id")} element={<Player />} />
          <Route path="*" element={<>No Route</>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
