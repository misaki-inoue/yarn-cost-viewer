import ItemCard from "../components/ProductTable";
import mock from "../../mock/api_res_simple.json";

export default function Result() {
  const items = mock.Items.map((it) => it.Item);
  return (
    <section>
      {items.map((item) => (
        <ItemCard key={item.itemCode} item={item} />
      ))}
    </section>
  );
}
