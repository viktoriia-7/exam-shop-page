import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import ProductListItem from "./ProductListItem";
import productsArray from "utils/productsArray";
import CurrencyButtons from "components/Currency/CurrencyButtons";

type Currency = {
  symbol: string;
  exchangeRate: number;
};

const ProductList: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>({
    symbol: "EUR",
    exchangeRate: 1,
  });

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
  };

  const handleBuy = (price: number) => {
    const convertedPrice = price / selectedCurrency.exchangeRate;
    setTotalPrice((prevTotalPrice) => prevTotalPrice + convertedPrice);
  };

  const getConvertedPrice = (price: number): string => {
    const convertedPrice = price * selectedCurrency.exchangeRate;
    return `${selectedCurrency.symbol} ${convertedPrice.toFixed(2)}`;
  };

  const currencies: Currency[] = [
    { symbol: "EUR", exchangeRate: 1 },
    { symbol: "USD", exchangeRate: 1.12 },
    { symbol: "UAH", exchangeRate: 30.08 },
    { symbol: "PLN", exchangeRate: 4.48 },
  ];
  return (
    <Container>
      <h1>Our shop page</h1>

      <CurrencyButtons
        currencies={currencies}
        selectedCurrency={selectedCurrency}
        handleCurrencyChange={handleCurrencyChange}
      />
      <Grid container textAlign={"center"}>
        {productsArray.map(({ id, title, description, price }) => {
          const convertedPrice = getConvertedPrice(price);

          return (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <ProductListItem
                title={title}
                description={description}
                price={convertedPrice}
                onBuy={handleBuy}
              />
            </Grid>
          );
        })}
      </Grid>
      <p className="total-price">Total: {getConvertedPrice(totalPrice)}</p>
    </Container>
  );
};
export default ProductList;
