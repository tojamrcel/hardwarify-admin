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
import Protected from "./ui/Protected";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <Protected>
                  <Layout />
                </Protected>
              }
            >
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
        <Toaster position="top-center" />
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
