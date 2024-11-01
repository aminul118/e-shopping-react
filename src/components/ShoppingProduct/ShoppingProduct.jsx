const ShoppingProduct = ({ product }) => {
  console.log(product);
  const { product_name, image_url, manufacture_country } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt={product_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          <strong>Manufacture Country:</strong> {manufacture_country}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingProduct;
