export interface RakutenImage {
  imageUrl: string;
}

export interface ItemDetails {
  itemName: string;
  catchcopy: string;
  itemCode: string;
  itemPrice: number;
  itemPriceBaseField: string;
  itemPriceMax1: number;
  itemPriceMax2: number;
  itemPriceMax3: number;
  itemPriceMin1: number;
  itemPriceMin2: number;
  itemPriceMin3: number;
  itemCaption: string;
  itemUrl: string;
  shopUrl: string;
  smallImageUrls: RakutenImage[];
  mediumImageUrls: RakutenImage[];
  affiliateUrl: string;
  shopAffiliateUrl: string;
  imageFlag: number;
  availability: number;
  taxFlag: number;
  postageFlag: number;
  creditCardFlag: number;
  shopOfTheYearFlag: number;
  shipOverseasFlag: number;
  shipOverseasArea: string;
  asurakuFlag: number;
  asurakuClosingTime: string;
  asurakuArea: string;
  affiliateRate: number;
  startTime: string;
  endTime: string;
  reviewCount: number;
  reviewAverage: number;
  pointRate: number;
  pointRateStartTime: string;
  pointRateEndTime: string;
  giftFlag: number;
  shopName: string;
  shopCode: string;
  genreId: number;
  attributeIds: [number];
}

export interface RakutenItemContainer {
  Item: ItemDetails;
}

export interface RakutenApiResponse {
  count: number;
  page: number;
  first: number;
  last: number;
  hits: number;
  carrier: number;
  pageCount: number;
  Items: RakutenItemContainer[];
}

export interface ProductCardData {
  itemName: string;
  itemCode: string;
  itemPrice: number;
  itemCaption: string;
  itemUrl: string;
  mediumImageUrls: RakutenImage[];
  shopName: string;
  shopUrl: string;
}
