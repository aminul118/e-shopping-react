import { useEffect, useState } from "react";
import ShoppingProduct from "../ShoppingProduct/ShoppingProduct";

const ShoppingProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="py-8">
      <h1 className="text-2xl text-center">
        Here Is your Number of Products: {products.length}
      </h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {products.map((product) => (
          <ShoppingProduct key={product.id} product={product}></ShoppingProduct>
        ))}
      </div>
    </div>
  );
};

export default ShoppingProducts;
