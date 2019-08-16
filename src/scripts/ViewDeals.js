class ViewDeals {
  constructor(store, template) {
    this.store = store;
    this.template = template;
    this.dealList = document.getElementById("deal-list");
  }

  render(data) {
    if (this.dealList && data.length) {
      const htmlToAppend = this.template.buildDealList(data);
      this.dealList.innerHTML = htmlToAppend;
    }
  }

  update(state) {
    this.filteredDeals = this.filterDeals.filter(state.deals, state.productFilters, state.providerFilters)
    this.render(this.filteredDeals)
  }
}

export default ViewDeals;
