const productsData = [
  {
    id: 1000,
    brand: "Apple",
    model: "Iphone 11",
    price: "13000",
    discount: "10",
    color: "Siyah",
    description: "Apple Iphone 11 Pro Max",
  },
  {
    id: 1001,
    brand: "Apple",
    model: "Iphone 12",
    price: "16000",
    discount: "14",
    color: "Sarı",
    description: "Apple Iphone 12 Pro Max",
  },
  {
    id: 1002,
    brand: "Apple",
    model: "Iphone 11",
    price: "12000",
    discount: "0",
    color: "Kırmızı",
    description: "Apple Iphone 11 Pro Max",
  },
  {
    id: 1003,
    brand: "Apple",
    model: "Iphone 11",
    price: "11000",
    discount: "8",
    color: "Siyah",
    description: "Apple Iphone 11 Pro",
  },
  {
    id: 1004,
    brand: "Apple",
    model: "Iphone 11",
    price: "13000",
    discount: "10",
    color: "Sarı",
    description: "Apple Iphone 11 Pro Max",
  },
  {
    id: 1005,
    brand: "Apple",
    model: "Iphone 11",
    price: "14000",
    discount: "5",
    color: "Beyaz",
    description: "Apple Iphone 11 Pro Max",
  },
];

localStorage.setItem("productList", JSON.stringify(productsData));

export default productsData;