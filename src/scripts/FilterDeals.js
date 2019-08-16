class FilterDeals {
    constructor(store) {
        this.store = store;
    }
    findFilter(productTypes = [], element = ""){
        return productTypes.find(function(ptype){
            return ptype.toLowerCase().includes(element.toLowerCase());
        }) || null
    }
  }
  export default FilterDeals;