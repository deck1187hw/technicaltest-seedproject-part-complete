import Store from "../Store";
import FilterDeals from "../FilterDeals";
import mockData from "../../../public/db.json";

describe("filter", () => {
  it("should find the string on the array of product types", () => {
    const sut = new Store();
    const filterDeals = new FilterDeals(sut);
    const result = filterDeals.findFilter(["Broadband", "Phone"], "Broadband");
    expect(result).toEqual("Broadband");
  });
  it("should find the string on the array of product types even if its lowercase", () => {
    const sut = new Store();
    const filterDeals = new FilterDeals(sut);
    const result = filterDeals.findFilter(["Broadband", "Phone"], "broadband");
    expect(result).toEqual("Broadband");
  });
  it("should return null when no element found", () => {
    const sut = new Store();
    const filterDeals = new FilterDeals(sut);
    const result = filterDeals.findFilter(["Broadband", "Phone"], "NOT EXISTING");
    expect(result).toEqual(null);
  });
});
