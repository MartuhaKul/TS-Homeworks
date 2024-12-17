interface CurrencyValue {
    currency: string;
    value: number;
}

function exchange(sumUAH: number, currencyValues: CurrencyValue[], exchangeCurrency: string): number {
    let Currency: CurrencyValue | undefined;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            Currency = item;
            break;
        }
    }

    if (Currency) {
        return sumUAH / Currency.value;
    } else {
        throw new Error('Currency not found');
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
