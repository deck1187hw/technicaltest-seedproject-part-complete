import "../styles/main.scss";
import ApiClient from "./ApiClient";
import Store from "./Store";
import Template from "./Template";
import ViewDeals from "./ViewDeals";
import FilterDeals from "./utils/FilterDeals";
import ViewFilters from "./ViewFilters";

const apiClient = new ApiClient();
const store = new Store();
const template = new Template();
const viewDeals = new ViewDeals(store, template);
const filterDeals = new FilterDeals(store);
const viewFilters = new ViewFilters(store);

store.subscribe(viewDeals);
store.subscribe(viewFilters);

apiClient.getDeals().then(data => {
  store.setDeals(data);
});
