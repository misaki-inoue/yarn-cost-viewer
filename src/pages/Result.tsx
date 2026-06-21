import ItemCard from "../components/ProductTable";
import mock from "../../mock/rakuten_api_res.json";
import { mapProduct } from "../mappers/productMapper";

export default function Result() {
  const products = mapProduct(mock);
  return (
    <section>
      {products.map((product) => (
        <ItemCard key={product.itemCode} item={product} />
      ))}
    </section>
  );
}
