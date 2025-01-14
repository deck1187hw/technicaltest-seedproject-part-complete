import "../styles/main.scss";
import ApiClient from "./ApiClient";
import Store from "./Store";
import Template from "./Template";
import ViewDeals from "./ViewDeals";
import FilterDeals from "./FilterDeals";
import ViewFilters from "./ViewFilters";

const apiClient = new ApiClient();
const store = new Store();
const template = new Template();
const filterDeals = new FilterDeals(store);
const viewDeals = new ViewDeals(store, template, filterDeals);
const viewFilters = new ViewFilters(store);

store.subscribe(viewDeals);
store.subscribe(viewFilters);

apiClient.getDeals().then(data => {
  store.setDeals(data);
});
