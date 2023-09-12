import { NavLink } from "react-router-dom";

const Products = () => (
  <section className="content">
    <h2 className="subtitle">Products Index Page</h2>
    <p>
      More products will be added soon, but for now here are some links to the
      first few:
    </p>
    <ul>
      <li>
        <NavLink to="/products/1">Product_1</NavLink>
      </li>
      <li>
        <NavLink to="/products/2">Product_2</NavLink>
      </li>
      <li>
        <NavLink to="/products/3">Product_3</NavLink>
      </li>
      <li>
        <NavLink to="/products/4">Product_4</NavLink>
      </li>
    </ul>
  </section>
);

export default Products;
