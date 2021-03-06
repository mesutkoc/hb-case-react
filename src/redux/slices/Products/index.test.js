import {
  getFilters,
  getColorFilters,
  setProducts,
  getCurrentPage,
  getSortingFilter,
} from "./index";


describe("Test", () => {
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
  test("Return counts that is same color", () => {
    const datas = [
      { brand: "Apple", color: "Siyah" },
      { brand: "Samsung", color: "Kırmızı" },
      { brand: "Apple", color: "Siyah" },
    ];
    const filter = getColorFilters(datas);
    expect(filter).toEqual([
      { color: "Siyah", count: 2 },
      { color: "Kırmızı", count: 1 },
    ]);
  });
  test("Return datas", () => {
    const datas = [
      { brand: "Apple", color: "Sarı" },
      { brand: "Samsung", color: "Siyah" },
    ];
    expect(setProducts(datas)).toEqual([
      { brand: "Apple", color: "Sarı" },
      { brand: "Samsung", color: "Siyah" },
    ]);
  });
  test("Return sorting", () => {
    const datas = "New";
    expect(getSortingFilter(datas,"New")).toEqual("New");
  });
  test("Return page", () => {
    const datas = "1";
    expect(getCurrentPage(datas, "1")).toEqual("1");
  });
});
