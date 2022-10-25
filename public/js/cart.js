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
  product.quantity += 1;
  const item = $(event.target.closest(".item"));
  item.find(".form-input").val(product.quantity);
  product.total = product.quantity * product.price;
  item.find(".total").text(product.total);
  localStorage.setItem("cart", JSON.stringify(cart));
  total();
};

const decrement = (event) => {
  const product = _.find(cart, { product: event.data.product.id });
  if (product.quantity === 1) return;
  else product.quantity -= 1;
  const item = $(event.target.closest(".item"));
  item.find(".form-input").val(product.quantity);
  product.total = product.quantity * product.price;
  item.find(".total").text(product.total);
  localStorage.setItem("cart", JSON.stringify(cart));
  total();
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
  total();
  
});

const total = () => {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += Number(cart[i].total);
  }
  $(".total-all-value").text(sum);
};

$(".apply-coupon").on("click", function () {
  let codeName = $(".btn-input-coupon").val().toString().toLowerCase();
  let total = $(".total-all-value").text();
  Number(total);
  let code = [
    { id: 1, name: "techmaster", value: 5 },
    { id: 2, name: "mrtrung", value: 10 },
    { id: 3, name: "tfruit", value: 15 },
  ];
  for (let i = 0; i < code.length; i++){
    if (codeName == code[i].name)
      total -= total * (code[i].value) / 100;
  }
  $(".total-all-value").text(total);
});
