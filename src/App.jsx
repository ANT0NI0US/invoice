import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ui/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import Loader from "./ui/loader/Loader";

const AppLayout = lazy(() => import("./Layout/AppLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Bills = lazy(() => import("./pages/Bills"));
const Customers = lazy(() => import("./pages/Customers"));
const Products = lazy(() => import("./pages/Products"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bills" element={<Bills />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
