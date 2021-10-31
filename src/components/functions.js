export const calculateDiscount = (price, discount) => {
  const discountCash = (parseInt(price) * parseInt(discount)) / 100;
  const newPrice = price - discountCash;
  return [newPrice, discountCash];
};

