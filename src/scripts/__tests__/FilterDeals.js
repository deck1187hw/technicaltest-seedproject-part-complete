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
    describe("Generate Filter Type Functions", () => {
        it("should generate same number of functions as filter types", () => {
            const result = filterDeals.filterCustomProvidersGenerateFunctions(['Broadband', 'Other one'])
            expect(result.length).toEqual(2);
        });
        it("should return an object of functions", () => {
            const result = filterDeals.filterCustomProvidersGenerateFunctions(['Broadband'])
            expect(typeof result).toEqual('object');
        });
        it("should return a function", () => {
            const result = filterDeals.filterCustomProvidersGenerateFunctions(['Broadband'])
            expect(typeof result[0]).toEqual('function');
        });
    });
    describe("Generate Provider Functions", () => {
        it("provider filter should return a function", () => {
            const result = filterDeals.filterProviderSingleFunction(['Sky'])
            expect(typeof result).toEqual('function');
        });
    });
    
    describe("filter", () => {
        it("should return the deals if no filter specified", () => {
            const result = sut.deals;
            expect(result).toEqual(mockData.deals);
        });
        it("should return 4 deals filtered when specify Broadband", () => {
            const result = filterDeals.filter(sut.deals, ['Broadband'], [])
            expect(result.length).toEqual(4);
        });
        it("WHEN filtering by broadband THEN show the broadband 4 only deals", () => {
            const result = filterDeals.filter(sut.deals, ['Broadband'], [])
            expect(result.map(item => item.id).sort()).toEqual([ 6158, 4359, 4371, 5459 ].sort());
        });
        it("WHEN filtering by broadband AND tv THEN show the 4 deals for broadband and tv only", () => {
            const result = filterDeals.filter(sut.deals, ['Broadband', 'TV'], [])
            expect(result.map(item => item.id).sort()).toEqual([ 5738, 6074, 6165, 6468 ].sort());
        });
        it("WHEN filtering by broadband AND mobile THEN show the 1 deal for broadband and mobile only", () => {
            const result = filterDeals.filter(sut.deals, ['Broadband', 'Mobile'], [])
            expect(result.map(item => item.id).sort()).toEqual([ 4276 ].sort());
        });
        it("WHEN filtering by Sky THEN show the 1 deal for Sky only (ID = 1)", () => {
            const result = filterDeals.filter(sut.deals, [], [1])
            console.log('res',result)
        });
    });
    

});
