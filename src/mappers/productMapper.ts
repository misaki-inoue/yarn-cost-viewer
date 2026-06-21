import type { RakutenApiResponse, ProductCardData } from "../types";

export function mapProduct(response: RakutenApiResponse): ProductCardData[] {
  return response.Items.map(({ Item }) => ({
    itemName: Item.itemName,
    itemCode: Item.itemCode,
    itemPrice: Item.itemPrice,
    itemCaption: Item.itemCaption,
    itemUrl: Item.itemUrl,
    mediumImageUrls: Item.mediumImageUrls,
    shopName: Item.shopName,
    shopUrl: Item.shopUrl,
  }));
}
