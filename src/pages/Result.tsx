import ProductCard from "../components/ProductCard";
import mock from "../../mock/rakuten_api_res.json";
import { mapProduct } from "../mappers/productMapper";

export default function Result() {
  const products = mapProduct(mock);
  return (
    <section>
      {products.map((product) => (
        <ProductCard key={product.itemCode} product={product} />
      ))}
    </section>
  );
}
