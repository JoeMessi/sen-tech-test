import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RoutePaths } from "./routes/route-paths";

const Home = lazy(() => import("./pages/home/Home"));
const Player = lazy(() => import("./pages/player/Player"));
const Error = lazy(() => import("./pages/error/Error"));

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>...</>}>
        <Routes>
          <Route path={RoutePaths.HOME} element={<Home />} />
          <Route path={RoutePaths.PLAYER(":id")} element={<Player />} />
          <Route path="*" element={<Error message="No Route" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
