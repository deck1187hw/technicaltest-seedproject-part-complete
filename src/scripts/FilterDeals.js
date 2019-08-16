class FilterDeals {
    constructor(store) {
        this.store = store;
        this.deals = store.state.deals;
        this.filterTypes = store.state.productFilters;
        this.filterProvider = store.state.providerFilter;
    }
    findFilter(productTypes = [], element = ""){
        return productTypes.find(function(ptype){
            return ptype.toLowerCase().includes(element.toLowerCase());
        }) || null
    }
    filterCustomProvidersGenerateFunctions(filterTypes){
        let customFiltersFncts = []
        filterTypes.forEach((filterValue) => {
          customFiltersFncts.push(
            item => this.findFilter(item.productTypes, filterValue)
          );
        });
        return customFiltersFncts
    }

    filter(deals = [], productFilters = [], providerFilters = [] ){
        this.deals = deals;
        this.filterTypes = productFilters;
        this.filterProvider = providerFilters;
        this.customFiltersFncts = this.filterCustomProvidersGenerateFunctions(this.filterTypes)
        
        return this.deals
  
      }
  }
  export default FilterDeals;