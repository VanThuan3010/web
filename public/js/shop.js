import $ from "jquery";
import _ from "lodash";
import { products } from "./product";

const render = (event) => {
  const $productList = $(".list-pro");
  const productTemplate = $("#productTemplate").html();
  const product = _.template(productTemplate);

  $productList.html("");
  $productList.append(
    _.map(event, (p) => {
      const dom = $(product(p));

      dom.find(".btn-add-to-cart").on("click", p, addToCart);

      return dom;
    })
  );
};
// filter
const filterByCategory = (event) => {
  const categories = [];
  $("input:checked").each(function () {
    categories.push(this.value);
  });
  const filterProducts = products.filter(
    (p) => categories.length === 0 || categories.includes(p.category)
  );
  render(filterProducts);
};

const filterByPrice = (event) => {
  let min = $(".min-price").val();
  let max = $(".max-price").val();
  let filterProducts;
  if(min == "") min = 0;
  if (max != "")
  {filterProducts = products.filter(
    (p) => p.price >= min && p.price <= max
  );}
  else {
    filterProducts = products.filter(
      (p) => p.price >= min
    );
  }
  render(filterProducts);
}

const sort = (event) => {
  let value = $("#sort-by").val();
  let clone = [];
  for (let i = 0; i < products.length; i++) {
    clone[i] = products[i];
  }
  if (value ==  "sort-by-ascending"){
  let sortProduct = clone.sort((a,b) => a.price - b.price);
  render(sortProduct);}
  if (value == "sort-by-decreasing") {
    let sortProduct = clone.sort((a, b) => b.price - a.price);
    render(sortProduct);
  }
  if (value == "default") {
    render(products);
  }
};
// add to cart
const addToCart = (event) => {
  event.preventDefault();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = _.find(cart, { product: event.data.id });
  if (item) {
    item.quantity += 1;
  } else
    cart.push({
      product: event.data.id,
      quantity: 1,
      price: event.data.price,
      total: 1,
    });
  for (let i = 0; i < cart.length; i++) {
    cart[i].total = cart[i].price * cart[i].quantity;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};
// render product
$(() => {
  render(products);

  $(".categories-filter").append(
    _.uniq(products.map(({ category }) => category)).map((c) => {
      const categoryTemplate = $("#categoryTemplate").html();
      const template = _.template(categoryTemplate);

      const dom = $(template({ category: c }));

      return dom;
    })
  );

  $("form.by-category").on("change", filterByCategory);
  $(".filter-btn").on("click", filterByPrice);
  $("#sort-by").on("change", sort);
});
