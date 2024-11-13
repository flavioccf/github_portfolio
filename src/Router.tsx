import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { RepoDetails } from "./components/RepoDetails";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/repo/:repoId" element={<RepoDetails />} />
      </Route>
    </Routes>
  );
}
