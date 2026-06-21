import type { RakutenApiResponse, ProductCardList } from "../types";

export function mapProductList(response: RakutenApiResponse): ProductCardList {
  return {
    count: response.count,
    items: response.Items.map(({ Item }) => ({
      itemName: Item.itemName,
      itemCode: Item.itemCode,
      itemPrice: Item.itemPrice,
      itemCaption: Item.itemCaption,
      itemUrl: Item.itemUrl,
      mediumImageUrls: Item.mediumImageUrls,
      shopName: Item.shopName,
      shopUrl: Item.shopUrl,
    })),
  };
}
