import Store from "../Store";
import FilterDeals from "../FilterDeals";
import mockData from "../../../public/db.json";

describe("filter", () => {
    it('should find the string on the array of product types', () => {

        const sut = new Store();
        const filterDeals = new FilterDeals(sut);
        const result = filterDeals.findFilter(['Broadband', 'Phone'], 'Broadband')

        expect(result).toEqual(true);
      });
});
