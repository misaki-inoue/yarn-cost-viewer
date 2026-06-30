import type { ItemDetails } from "../types";

type ItemHeaderProps = {
  name: ItemDetails["itemName"];
};

type ItemInfoProps = {
  price: ItemDetails["itemPrice"];
  details: ItemDetails["itemCaption"];
};

type ItemImageProps = {
  imageUrl: string;
};

type ItemImagesProps = {
  images: ItemDetails["mediumImageUrls"];
};

type ItemCardProps = {
  item: ItemDetails;
};

function ItemHeader({ name }: ItemHeaderProps) {
  return <h2>{name}</h2>;
}

function ItemInfo({ price, details }: ItemInfoProps) {
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
      <ItemInfo price={item.itemPrice} details={item.itemCaption} />
    </article>
  );
}
