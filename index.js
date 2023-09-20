// Write your solution in this file!
var customerName = "bob";

var upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
  return customerName;
};

var setBestCustomer = () => {
  bestCustomer = "not bob";
  return bestCustomer;
};

var overwriteBestCustomer = () => {
  bestCustomer = "maybe bob";
  return bestCustomer;
};

const leastFavoriteCustomer = "Doe";

var changeLeastFavoriteCustomer = () => {
  leastFavoriteCustomer = "Peter";
  return leastFavoriteCustomer;
};
