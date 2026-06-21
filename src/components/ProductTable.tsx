import type { ItemDetails, ProductCardData } from "../types";

type ItemHeaderProps = {
  name: ProductCardData["itemName"];
};

type ItemDetailsProps = {
  price: ProductCardData["itemPrice"];
  details: ProductCardData["itemCaption"];
};

type ItemImageProps = {
  imageUrl: string;
};

type ItemImagesProps = {
  images: ProductCardData["mediumImageUrls"];
};

type ItemCardProps = {
  item: ProductCardData;
};

function ItemHeader({ name }: ItemHeaderProps) {
  return <h2>{name}</h2>;
}

function ItemDetails({ price, details }: ItemDetailsProps) {
  return (
    <section>
      <strong>¥{price}/skein</strong>
      <p>{details}</p>
    </section>
  );
}

function ItemImage({ imageUrl }: ItemImageProps) {
  return <img src={imageUrl} alt="" width={128} />;
}

function ItemImages({ images }: ItemImagesProps) {
  return (
    <>
      {images.map(({ imageUrl }) => (
        <ItemImage key={imageUrl} imageUrl={imageUrl} />
      ))}
    </>
  );
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <article>
      <ItemHeader name={item.itemName} />
      <ItemImages images={item.mediumImageUrls} />
      <ItemDetails price={item.itemPrice} details={item.itemCaption} />
    </article>
  );
}
