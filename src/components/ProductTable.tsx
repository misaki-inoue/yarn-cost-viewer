import type { RakutenApiResponse, ItemDetails } from "../types";

type ItemHeaderRowProps = {
  itemName: ItemDetails["itemName"];
};

type ItemDetailsRowProps = {
  price: ItemDetails["itemPrice"];
  details: ItemDetails["itemCaption"];
};

function ItemHeaderRow({ itemName }: ItemHeaderRowProps) {
  return (
    <tr>
      <th>{itemName}</th>
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
