import AddToCart from "../AddToCart/AddToCart";
import "./Products.css";
const Products = ({ data }) => {
  return (
    <div className="products">
      {data.map((product) => (
        <div className="product" key={product.id}>
          <img className="img" src={product.image} alt={product.title} />
          <h1 className="price">${product.price}</h1>
          <p className="title">{product.title}</p>
          <span className="category">{product.category}</span>
          <AddToCart product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
