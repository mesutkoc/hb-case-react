import { getFilters } from "./index";

test("Return counts that is same brand", () => {
  const datas = [
    { brand: "Apple", model: "Iphone 12" },
    { brand: "Samsung", model: "Samsung S20" },
    { brand: "Apple", model: "Iphone 11" },
  ];
  const filter = getFilters(datas);
  expect(filter).toEqual([
    { brand: "Apple", count: 2 },
    { brand: "Samsung", count: 1 },
  ]);
});
