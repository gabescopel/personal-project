export function formatPrice(value: number) {
    let price =
        Math.round(value).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return price;
}