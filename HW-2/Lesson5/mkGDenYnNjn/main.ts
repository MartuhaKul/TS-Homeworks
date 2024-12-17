interface CurrencyValue {
    currency: string;
    value: number;
}

let exchange = (sumUAH: number, currencyValues: CurrencyValue[], exchangeCurrency: string): number | null => {
    let Currency: CurrencyValue | undefined = undefined;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            Currency = item;
            break;
        }
    }
    return Currency ? sumUAH / Currency.value : null;
};

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
