import AddToCart from "../AddToCart/AddToCart";
import "./Products.css";
const Products = ({ data, addToCart }) => {
  return (
    <div className="products">
      {data.map((product) => (
        <div className="product" key={product.id}>
          {/* With img element */}
          {/* <div className="image-container">
            <img className="image" src={product.image} alt={product.title} />
          </div> */}

          {/* As style backgroundImage */}
          <div
            className="image-container with-background-image"
            title={product.title}
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>

          <h1 className="price">${product.price}</h1>
          <p className="title">{product.title}</p>
          <span className="category">{product.category}</span>
          
          <button
            type="button"
            className="add-to-cart"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>

          {/* <AddToCart product={product} /> */}
        </div>
      ))}
    </div>
  );
};

export default Products;
