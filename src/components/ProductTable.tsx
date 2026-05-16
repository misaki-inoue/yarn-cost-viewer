import type { RakutenApiResponse, ItemDetails } from "../types";

type ItemHeaderRowProps = {
  name: ItemDetails["itemName"];
};

type ItemDetailsRowProps = {
  price: ItemDetails["itemPrice"];
  details: ItemDetails["itemCaption"];
};

function ItemHeaderRow({ name }: ItemHeaderRowProps) {
  return (
    <tr>
      <th>{name}</th>
    </tr>
  );
}

function ItemDetailRow({ price, details }: ItemDetailsRowProps) {
  return (
    <tr>
      <td>{price}</td>
      <td>{details}</td>
    </tr>
  );
}
