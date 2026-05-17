import type { RakutenApiResponse, ItemDetails, RakutenImage } from "../types";

type ItemHeaderRowProps = {
  name: ItemDetails["itemName"];
};

type ItemDetailsRowProps = {
  price: ItemDetails["itemPrice"];
  details: ItemDetails["itemCaption"];
};

type ImageListProps = {
  images: ItemDetails["mediumImageUrls"];
};

type ItemImagesRowProps = {
  itemImages: RakutenImage[];
};

function ItemHeaderRow({ name }: ItemHeaderRowProps) {
  return (
    <tr>
      <th>{name}</th>
    </tr>
  );
}

function ItemDetailRow({ price, details }: ItemDetailsRowProps) {
  return (
    <tr>
      <td>{price}</td>
      <td>{details}</td>
    </tr>
  );
}

function ItemImage({ imageUrl }: RakutenImage) {
  return <img src={imageUrl} alt="" width={128} />;
}

function ImageList({ images }: ImageListProps) {
  return (
    <>
      {images.map(({ imageUrl }) => (
        <ItemImage key={imageUrl} imageUrl={imageUrl} />
      ))}
    </>
  );
}

function ItemImagesRow({ itemImages }: ItemImagesRowProps) {
  return (
    <tr>
      <td>
        <ImageList images={itemImages} />
      </td>
    </tr>
  );
}
