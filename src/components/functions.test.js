import { calculateDiscount } from "./functions";

describe("Get discount", () => {
  test("Get discount detail", () => {
    const price = "12000";
    const discount = "10";
    expect(calculateDiscount(price, discount)).toEqual([10800, 1200]);
  });
});
