import type { RakutenApiResponse, ItemDetails } from "../types";

type ItemHeaderProps = {
  name: ItemDetails["itemName"];
};

type ItemDetailsProps = {
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

type ProductTableProps = {
  items: RakutenApiResponse;
};

function ItemHeader({ name }: ItemHeaderProps) {
  return <h2>{name}</h2>;
}

function ItemDetails({ price, details }: ItemDetailsProps) {
  return (
    <section>
      <strong>{price}</strong>
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

function ItemCard({ item }: ItemCardProps) {
  return (
    <article>
      <ItemHeader name={item.itemName} />
      <ItemImages images={item.mediumImageUrls} />
      <ItemDetails price={item.itemPrice} details={item.itemCaption} />
    </article>
  );
}

function ProductTable({ items }: ProductTableProps) {
  return (
    <section>
      {items.map((item) => (
        <ItemCard key={item.item} item={item} />
      ))}
    </section>
  );
}
