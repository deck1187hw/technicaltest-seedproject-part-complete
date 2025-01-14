class FilterDeals {
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

    filter(deals = [], productFilters = [], providerFilter ){

        this.customFiltersFncts = this.filterCustomProvidersGenerateFunctions(productFilters)
        this.customFiltersFncts.push(this.filterIgnorePhone(productFilters));
        let filteredDeals = deals
        
        if(productFilters.length > 0){
            filteredDeals = this.customFiltersFncts.reduce(function (acc, filterFunc) {
                return acc.filter(filterFunc);
            }, deals );
        }
        if(providerFilter){
            filteredDeals = filteredDeals.filter(this.filterProviderSingleFunction(providerFilter))
        }
        
        return filteredDeals
  
      }
  }
  export default FilterDeals;