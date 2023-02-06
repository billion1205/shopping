const addToCartButtonElement = document.querySelector(
  "#product-details button"
);
const cartBadgeElements=document.querySelectorAll('.nav-items .badge');

async function addToCart() {
  const productId = addToCartButtonElement.dataset.productid;
  const csrfToken=addToCartButtonElement.dataset.csrf;
  let response;
  try {
    response = await fetch("/cart/items", {
      method: "post",
      body: JSON.stringify({
        productId: productId,
        _csrf:csrfToken
      }),
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    alert("Something went wrong!");
    return;
  }

  const responseData=await response.json();
  const newTotalQuantity=responseData.newTotalQuantity;
  
  for(const carBadgeElement of cartBadgeElements){
    cartBadgeElement.textContent=newTotalQuantity;
  }

}

addToCartButtonElement.addEventListener("click", addToCart);
