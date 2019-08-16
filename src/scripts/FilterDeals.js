class FilterDeals {
    constructor(store) {
        this.store = store;
    }
    findFilter(productTypes = [], element = ""){
        return productTypes.find(function(ptype){
            return ptype.toLowerCase().includes(element.toLowerCase());
        }) || null
    }
    
    filter(state){
        this.deals = state.deals;
        this.filterTypes = state.productFilters;
        this.filterProvider = state.providerFilter;
        
        return this.deals
  
      }
  }
  export default FilterDeals;