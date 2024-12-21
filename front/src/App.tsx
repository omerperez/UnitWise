import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import { ProtectedLayout } from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route
            index
            path="/"
            element={<Navigate to={ROUTES.home} replace />}
          />
          <Route path={ROUTES.home} element={<h1>Home</h1>}></Route>
          <Route path={ROUTES.apartments} element={<h1>Apartments</h1>}></Route>
          <Route path={ROUTES.tenants} element={<h1>Tenants</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
