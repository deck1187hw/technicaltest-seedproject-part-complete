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
    filterIgnorePhone(filterTypes){
        return item => item.productTypes.length <= filterTypes.length + 1
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
    filterProviderSingleFunction(provider){
        return item => item.provider.id === provider
    }

    filter(deals = [], productFilters = [], providerFilters = [] ){
        this.deals = deals;
        this.filterTypes = productFilters;
        this.filterProvider = providerFilters;
        this.customFiltersFncts = this.filterCustomProvidersGenerateFunctions(this.filterTypes)
        this.customFiltersFncts.push(this.filterIgnorePhone(this.filterTypes));
        
        // Filter product types
        if(this.filterTypes.length > 0){
            this.deals = this.customFiltersFncts.reduce(function (acc, filterFunc) {
                return acc.filter(filterFunc);
            }, this.deals );
        }
        if(this.filterProvider.length > 0){
            this.deals = this.deals.filter(this.filterProviderSingleFunction(this.filterProvider[0]))
        }
        
        return this.deals
  
      }
  }
  export default FilterDeals;