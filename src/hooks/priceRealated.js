export const changeINPrice = (price, oldprice) => {
  const difference = ((price - oldprice) / oldprice) * 100;
  if (difference > 0) {
    return null;
  } else {
    return (+difference * -1).toFixed(2) + "% off";
  }
};


export function formatPrice(value, opts = {}) {
  const { locale = "en-IN", currency = "INR" } = opts;
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}