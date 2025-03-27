import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Layout from "./ui/Layout";
import AddNewProduct from "./pages/AddNewProduct";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="order/:orderId" element={<Order />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddNewProduct />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
