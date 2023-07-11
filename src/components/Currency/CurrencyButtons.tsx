type Currency = {
  symbol: string;
  exchangeRate: number;
};

type Props = {
  currencies: Currency[];
  selectedCurrency: Currency;
  handleCurrencyChange: (currency: Currency) => void;
};

const CurrencyButtons: React.FC<Props> = ({
  currencies,
  selectedCurrency,
  handleCurrencyChange,
}) => {
  return (
    <div className="button-currency">
      {currencies.map((currency) => (
        <button
          key={currency.symbol}
          onClick={() => handleCurrencyChange(currency)}
        >
          {currency.symbol}
        </button>
      ))}
    </div>
  );
};

export default CurrencyButtons;
