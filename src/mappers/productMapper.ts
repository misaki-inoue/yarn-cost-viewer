import type { RakutenApiResponse, ProductCardData } from "../types";

export function mapProduct(response: RakutenApiResponse): ProductCardData[] {
  return response.Items.map(({ Item }) => ({
    name: Item.itemName,
    code: Item.itemCode,
    price: Item.itemPrice,
    caption: Item.itemCaption,
    url: Item.itemUrl,
    imageUrl: Item.mediumImageUrls,
    shopName: Item.shopName,
    shopUrl: Item.shopUrl,
  }));
}
