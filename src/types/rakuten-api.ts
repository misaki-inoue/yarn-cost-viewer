export interface RakutenImage {
  imageUrl: string;
}

export interface ItemDetails {
  itemName: string;
  catchCopy: string;
  itemCode: string;
  itemPrice: number;
  itemCaption: string;
  itemUrl: string;
  mediumImageUrls: RakutenImage[];
  shopName: string;
  shopUrl: string;
}

export interface RakutenItemContainer {
  Item: ItemDetails;
}

export interface RakutenApiResponse {
  count: number;
  Items: RakutenItemContainer[];
}
