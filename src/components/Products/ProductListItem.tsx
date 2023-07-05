import { Button } from "@mui/material";
// import "App.scss";
import "./ProductListItem.scss";


type Props = {
  title: string;
  description: string;
  price: string;
  onBuy: (price: number) => void;
};

const ProductListItem: React.FC<Props> = ({
  title,
  description,
  price,
  onBuy,
 
}: Props) => {
  const handleBuy = () => {
    const parsedPrice = parseFloat(price.replace(/[^\d.]/g, ""));
    onBuy(parsedPrice);
  };
  return (
    <>
      <h4 className="product-title">{title}</h4>
      <div className="product-description">{description}</div>
      <div className="product-price">{price}</div>
      <div className="btn-wrap">
        <Button className="button" variant="outlined" onClick={handleBuy}>
          Buy
        </Button>
      </div>
    </>
  );
};


export default ProductListItem;
