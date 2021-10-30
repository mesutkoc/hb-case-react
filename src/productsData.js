const productsData = [
  {
    id: 1000,
    brand: "Apple",
    model: "Iphone 11",
    price: "13000",
    discount: "10",
    color: "Siyah",
    description: "Apple Iphone 11 Pro 128 GB Parlak Siyah ",
  },
  {
    id: 1001,
    brand: "Apple",
    model: "Iphone 12",
    price: "16000",
    discount: "14",
    color: "Sarı",
    description: "Apple Iphone 12 Pro Max 64 GB Sarı",
  },
  {
    id: 1002,
    brand: "Apple",
    model: "Iphone X",
    price: "12000",
    discount: "0",
    color: "Kırmızı",
    description: "Apple Iphone X  64 GB Kırmızı",
  },
  {
    id: 1003,
    brand: "Apple",
    model: "Iphone 12",
    price: "11000",
    discount: "8",
    color: "Siyah",
    description: "Apple Iphone 12 128 GB Siyah",
  },
  {
    id: 1004,
    brand: "Apple",
    model: "Iphone 11",
    price: "13000",
    discount: "10",
    color: "Sarı",
    description: "Apple Iphone 11 Pro Max Sarı",
  },
  {
    id: 1005,
    brand: "Apple",
    model: "Iphone 11",
    price: "14000",
    discount: "5",
    color: "Beyaz",
    description: "Apple Iphone 11 Pro Max Beyaz",
  },
  {
    id: 1006,
    brand: "Apple",
    model: "Iphone XS",
    price: "13000",
    discount: "10",
    color: "Siyah",
    description: "Apple Iphone XS 128 GB Siyah",
  },
  {
    id: 1007,
    brand: "Apple",
    model: "Iphone 12",
    price: "16000",
    discount: "14",
    color: "Sarı",
    description: "Apple Iphone 12 Pro Max Sarı 256 GB",
  },
  {
    id: 1008,
    brand: "Apple",
    model: "Iphone 11",
    price: "12000",
    discount: "0",
    color: "Kırmızı",
    description: "Apple Iphone 11 Pro Max Parlak Kırmızı 128 GB",
  },
  {
    id: 1009,
    brand: "Apple",
    model: "Iphone 11",
    price: "11000",
    discount: "8",
    color: "Siyah",
    description: "Apple Iphone 11 Pro Siyah 64 GB",
  },
  {
    id: 1010,
    brand: "Apple",
    model: "Iphone 12",
    price: "13000",
    discount: "10",
    color: "Sarı",
    description: "Apple Iphone 12 Pro Max 128 GB Sarı",
  },
  {
    id: 1011,
    brand: "Apple",
    model: "Iphone XS",
    price: "14000",
    discount: "5",
    color: "Beyaz",
    description: "Apple Iphone 11 Pro Max 64 GB Beyaz",
  },
  {
    id: 1012,
    brand: "Xiaomi",
    model: "Xiaomi Mi 11 Lite 5G",
    price: "13000",
    discount: "10",
    color: "Siyah",
    description: "Xiaomi Mi 11 Lite 5G 64 GB",
  },
  {
    id: 1013,
    brand: "Xiaomi",
    model: "Xiaomi Mi 11 Ultra",
    price: "16000",
    discount: "14",
    color: "Sarı",
    description: "Xiaomi Mi 11 Ultra 128 GB",
  },
  {
    id: 1014,
    brand: "Xiaomi",
    model: "Xiaomi Mi 9 Pro",
    price: "12000",
    discount: "0",
    color: "Kırmızı",
    description: "Xiaomi Mi 9 Pro 64 GB",
  },
  {
    id: 1015,
    brand: "Xiaomi",
    model: "Xiaomi Mi 8 SE",
    price: "13000",
    discount: "10",
    color: "Turuncu",
    description: "Xiaomi Mi 8 SE 5G 64 GB",
  },
  {
    id: 1016,
    brand: "Xiaomi",
    model: "Xiaomi Mi CC9",
    price: "16000",
    discount: "14",
    color: "Sarı",
    description: "Xiaomi Mi CC9 Ultra 128 GB",
  },
  {
    id: 1017,
    brand: "Xiaomi",
    model: "Xiaomi Mi 11 Lite 4G",
    price: "12000",
    discount: "0",
    color: "Pembe",
    description: "Xiaomi Mi 11 Lite 4G 64 GB",
  },
  {
    id: 1018,
    brand: "Samsung",
    model: "Samsung Galaxy A7 (2017)",
    price: "12000",
    discount: "0",
    color: "Kırmızı",
    description: "Samsung Galaxy A7 (2017) 64 GB",
  },
  {
    id: 1019,
    brand: "Samsung",
    model: "Samsung Galaxy C5 Pro",
    price: "13000",
    discount: "10",
    color: "Turuncu",
    description: "Samsung Galaxy C5 Pro 64 GB",
  },
  {
    id: 1020,
    brand: "Samsung",
    model: "Samsung Galaxy C7 Pro",
    price: "16000",
    discount: "14",
    color: "Beyaz",
    description: "Samsung Galaxy C7 Pro 128 GB",
  },
  {
    id: 1021,
    brand: "Samsung",
    model: "Samsung Galaxy A8 (2016) ",
    price: "12000",
    discount: "0",
    color: "Siyah",
    description: "Samsung Galaxy A8 (2016)  64 GB",
  },
  {
    id: 1022,
    brand: "Huawei",
    model: "Huawei Mate 9 (2016)",
    price: "12000",
    discount: "0",
    color: "Kırmızı",
    description: "Huawei Mate 9 (2016) 64 GB",
  },
  {
    id: 1023,
    brand: "Huawei",
    model: "Huawei Ascend Mate 2 (4G) (2014)",
    price: "13000",
    discount: "10",
    color: "Turuncu",
    description: "Huawei Ascend Mate 2 (4G) (2014) 64 GB",
  },
  {
    id: 1024,
    brand: "Huawei",
    model: "Huawei Ascend Mate 7",
    price: "16000",
    discount: "14",
    color: "Beyaz",
    description: "Huawei Ascend Mate 7 Pro 128 GB",
  },
  {
    id: 1025,
    brand: "Huawei",
    model: "Huawei Mate 20 X 5G (2019)",
    price: "12000",
    discount: "0",
    color: "Pembe",
    description: "Huawei Mate 20 X 5G (2019) 64 GB",
  },
  {
    id: 1026,
    brand: "Google",
    model: "Google Pixel 6 Pro",
    price: "12000",
    discount: "0",
    color: "Siyah",
    description: "Google Pixel 6 Pro 64 GB",
  },
  {
    id: 1027,
    brand: "Google",
    model: "Google Pixel 4a 5G.",
    price: "12000",
    discount: "0",
    color: "Kırmızı",
    description: "Google Pixel 4a 5G 64 GB",
  },
  {
    id: 1028,
    brand: "Google",
    model: "Google Pixel 6 Pro.",
    price: "13000",
    discount: "10",
    color: "Turuncu",
    description: "Google Pixel 6 Pro. 64 GB",
  },
  {
    id: 1029,
    brand: "Google",
    model: "Google Pixel 5",
    price: "16000",
    discount: "14",
    color: "Sarı",
    description: "Google Pixel 5 128 GB",
  },
  {
    id: 1030,
    brand: "Google",
    model: "Google Pixel 5a 5G",
    price: "12000",
    discount: "0",
    color: "Pembe",
    description: "Google Pixel 5a 5G 64 GB",
  },

  {
    id: 1031,
    brand: "BlackBerry",
    model: "BlackBerry 9300 Curve Orginal",
    price: "3000",
    discount: "0",
    color: "Siyah",
    description: "BlackBerry 9300 Curve Orginal 64 GB",
  },
  {
    id: 1032,
    brand: "BlackBerry",
    model: "BlackBerryBold 9700",
    price: "4000",
    discount: "0",
    color: "Kırmızı",
    description: "BlackBerryBold 9700 64 GB",
  },
  {
    id: 1033,
    brand: "BlackBerry",
    model: "BlackBerry Q20",
    price: "4600",
    discount: "10",
    color: "Turuncu",
    description: "BlackBerryQ20 Pro 64 GB",
  },
  {
    id: 1034,
    brand: "BlackBerry",
    model: "BlackBerry Q10",
    price: "6000",
    discount: "14",
    color: "Sarı",
    description: "BlackBerry Q10 128 GB",
  },
  {
    id: 1035,
    brand: "BlackBerry",
    model: "BlackBerryCurve 8520",
    price: "8000",
    discount: "0",
    color: "Pembe",
    description: "BlackBerryCurve 8520 64 GB",
  },
];

localStorage.setItem("productList", JSON.stringify(productsData));

export default productsData;
