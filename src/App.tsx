import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Layout from "./ui/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="order/:orderId" element={<Order />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
