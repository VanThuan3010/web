import $ from "jquery";
import _ from "lodash";
import { products } from "./product";

// add to cart
const addToCart = (event) => {
  event.preventDefault();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = _.find(cart, { product: event.data.id });
  let input = $(".enter-number").find("input.form-input").val();
  input = Number(input);
  if (item) {
    item.quantity += input;
  } else
    cart.push({
      product: event.data.id,
      quantity: 1,
      price: event.data.price,
      total: 1,
    });
  for (let i = 0; i < cart.length; i++){
    cart[i].total = cart[i].price * cart[i].quantity;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};
const increment = (event) => {
  let input = $(".enter-number").find("input.form-input").val();
  input = Number(input);
  input +=1;
  console.log(input);
  $(".enter-number").find("input.form-input").val(input);
};

const decrement = (event) => {
  let input = $(".enter-number").find("input.form-input").val();
  input = Number(input);
  if (input === 1) return;
  else input -= 1;
  $(".enter-number").find("input.form-input").val(input);
};

$(function () {
  const url = new URL(location.href);
  const id = Number(url.searchParams.get("id"));
  const product = _.find(products, { id });

  const productTemplate = $("#productTemplate").html();
  const template = _.template(productTemplate);

  const dom = $(template(product));
  $(".product").append(dom);

  dom.find(".add").on("click", product, addToCart);
  dom.find(".minus").on("click", product, decrement);
  dom.find(".plus").on("click", product, increment);
  $(".product").append(dom);
});

