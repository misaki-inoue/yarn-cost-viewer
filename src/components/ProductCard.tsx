import type { ProductCardData } from "../types";

type ProductHeaderProps = {
  name: ProductCardData["itemName"];
};

type ProductDetailsProps = {
  price: ProductCardData["itemPrice"];
  details: ProductCardData["itemCaption"];
};

type ProductImageProps = {
  imageUrl: string;
};

type ProductImagesProps = {
  images: ProductCardData["mediumImageUrls"];
};

type ProductCardProps = {
  product: ProductCardData;
};

function ProductHeader({ name }: ProductHeaderProps) {
  return <h2>{name}</h2>;
}

function ProductDetails({ price, details }: ProductDetailsProps) {
  return (
    <section>
      <strong>¥{price}/skein</strong>
      <p>{details}</p>
    </section>
  );
}

function ProductImage({ imageUrl }: ProductImageProps) {
  return <img src={imageUrl} alt="" width={128} />;
}

function ProductImages({ images }: ProductImagesProps) {
  return (
    <>
      {images.map(({ imageUrl }) => (
        <ProductImage key={imageUrl} imageUrl={imageUrl} />
      ))}
    </>
  );
}

export default function ProductCard({ product: item }: ProductCardProps) {
  return (
    <article>
      <ProductHeader name={item.itemName} />
      <ProductImages images={item.mediumImageUrls} />
      <ProductDetails price={item.itemPrice} details={item.itemCaption} />
    </article>
  );
}
