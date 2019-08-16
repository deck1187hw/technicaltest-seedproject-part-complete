import Store from "../Store";
import FilterDeals from "../FilterDeals";
import mockData from "../../../public/db.json";

describe("Filter Deals Class", () => {
    const sut = new Store();
    const filterDeals = new FilterDeals(sut);
    sut.setDeals(mockData.deals);

    describe("findFilter", () => {
         it("should find the string on the array of product types", () => {
            const result = filterDeals.findFilter(["Broadband", "Phone"], "Broadband");
            expect(result).toEqual("Broadband");
          });

          it("should find the string on the array of product types even if its lowercase", () => {
            const result = filterDeals.findFilter(["Broadband", "Phone"], "broadband");
            expect(result).toEqual("Broadband");
          });
          it("should return null when no element found", () => {
            const result = filterDeals.findFilter(["Broadband", "Phone"], "NOT EXISTING");
            expect(result).toEqual(null);
          });
    });

    describe("filter", () => {
        it("should return the deals if no filter specified", () => {
            // Act
            const result = sut.deals;
            // Assert
            expect(result).toEqual(mockData.deals);
        });
    });

});
