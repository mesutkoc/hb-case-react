import { removeItem, addItemToBasket } from "./index";

describe("Return basket after added/removed item", () => {
  test("Return current basket", () => {
    const datas = [
      { brand: "Apple", model: "Iphone 12", id: 1 },
      { brand: "Samsung", model: "Samsung S20", id: 2 },
      { brand: "Apple", model: "Iphone 11", id: 3 },
    ];
    const filter = removeItem(datas, {
      brand: "Apple",
      model: "Iphone 11",
      id: 3,
    });
    expect(filter).toEqual([
      { brand: "Apple", model: "Iphone 12", id: 1 },
      { brand: "Samsung", model: "Samsung S20", id: 2 },
    ]);
  });
  test("Return current basket after add item", () => {
    const datas = [
      { brand: "Apple", model: "Iphone 12", id: 1 },
      { brand: "Samsung", model: "Samsung S20", id: 2 },
    ];
    const filter = addItemToBasket(datas, {
      brand: "Apple",
      model: "Iphone 11",
      id: 3,
    });
    expect(filter).toEqual([
      { brand: "Apple", model: "Iphone 12", id: 1 },
      { brand: "Samsung", model: "Samsung S20", id: 2},
      { brand: "Apple", model: "Iphone 11", id: 3 },
    ]);
  });

});
