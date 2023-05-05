import { Suspense, lazy } from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./views/home/Home"));
const Player = lazy(() => import("./views/player/Player"));

const Layout = () => {
  return (
    <>
      <h1>Welcome to the app</h1>
      <Outlet />
    </>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="video" element={<Player />} />
          <Route path="*" element={<>No Route</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
