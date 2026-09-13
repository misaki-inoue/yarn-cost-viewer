import type { ProductCardData } from "../types";

type ProductHeaderProps = {
  name: ProductCardData["name"];
};

type ProductDetailsProps = {
  price: ProductCardData["price"];
  details: ProductCardData["caption"];
};

type ProductImageProps = {
  imageUrl: string;
};

type ProductImagesProps = {
  images: ProductCardData["imageUrl"];
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
      {images.map(({ imageUrl }, i) => (
        <ProductImage key={`${imageUrl}-${i}`} imageUrl={imageUrl} />
      ))}
    </>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <ProductHeader name={product.name} />
      <ProductImages images={product.imageUrl} />
      <ProductDetails price={product.price} details={product.caption} />
    </article>
  );
}
