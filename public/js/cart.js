import $ from "jquery";
import _ from "lodash";
import { products } from "./product";

let cart = JSON.parse(localStorage.getItem("cart")) || [];
// delete item
const deleteItem = (event) => {
  if (confirm("Are your sure to delete?")) {
    cart = _.filter(cart, (item) => item.product !== event.data.product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    event.target.closest(".item").remove();
  }
};
const increment = (event) => {
  const product = _.find(cart, { product: event.data.product.id });
  product.quantity +=1;
  const item = $(event.target.closest(".item"));
  item.find(".form-input").val(product.quantity);
  localStorage.setItem("cart", JSON.stringify(cart));
};

const decrement = (event) => {
  const product = _.find(cart, { product: event.data.product.id });
  if(product.quantity === 1) return;
  else product.quantity -= 1;
  const item = $(event.target.closest(".item"));
  item.find(".form-input").val(product.quantity);
  localStorage.setItem("cart", JSON.stringify(cart));
};
// show on cart
$(function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length == 0) {
  } else {
    cart = _.map(cart, (item) => {
      item.product = _.find(products, { id: item.product });
      return item;
    });
  }
  $(".cart-list").append(
    _.map(cart, (p) => {
      const itemTemplate = $("#item").html();
      const item = _.template(itemTemplate);
      const dom = $(item(p));
      dom.find(".btn").on("click", p, deleteItem);
      dom.find(".plus").on("click", p, increment);
      dom.find(".minus").on("click", p, decrement);
      return dom;
    })
  );
});
