import type { RakutenApiResponse, ItemDetails } from "../types";

type ItemHeaderRowProps = {
  name: ItemDetails["itemName"];
};

type ItemDetailsRowProps = {
  price: ItemDetails["itemPrice"];
  details: ItemDetails["itemCaption"];
};

type ItemImageProps = {
  imageUrl: string;
};

type ItemImagesRowProps = {
  images: ItemDetails["mediumImageUrls"];
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

function ItemImage({ imageUrl }: ItemImageProps) {
  return <img src={imageUrl} alt="" width={128} />;
}

function ItemImagesRow({ images }: ItemImagesRowProps) {
  return (
    <tr>
      <td>
        {images.map(({ imageUrl }) => (
          <ItemImage key={imageUrl} imageUrl={imageUrl} />
        ))}
      </td>
    </tr>
  );
}
