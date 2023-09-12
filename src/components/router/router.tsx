import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/main_layouts";
import Home from "../home/home";
import Products from "../products/product/product";
import Help from "../help/help";
import About from "../about/about";
import NotFound from "../not_found/not_found";

export const Router = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />}></Route>;
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
// what goes here??
