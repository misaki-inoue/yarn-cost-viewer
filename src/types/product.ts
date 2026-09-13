export interface Image {
  imageUrl: string;
}

export interface ProductCardData {
  name: string;
  code: string;
  price: number;
  caption: string;
  url: string;
  imageUrl: Image[];
  shopName: string;
  shopUrl: string;
}
