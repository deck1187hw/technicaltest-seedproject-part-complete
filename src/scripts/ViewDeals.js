class ViewDeals {
  constructor(store, template, filterDeals) {
    this.store = store;
    this.template = template;
    this.filterDeals = filterDeals;
    this.dealList = document.getElementById("deal-list");
  }

  render(data) {
    if (this.dealList && data.length) {
      const htmlToAppend = this.template.buildDealList(data);
      this.dealList.innerHTML = htmlToAppend;
    }
  }

  update(state) {
    this.filteredDeals = this.filterDeals.filter(state.deals, state.productFilters, state.providerFilter)
    this.render(this.filteredDeals)
  }
}

export default ViewDeals;
