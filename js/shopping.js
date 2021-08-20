// text change function-->
function Change(src, descValue, priceValue) {
  // for image
  const mainImage = document.getElementById('main-image');
  mainImage.src = src;
  // for desc
  const descText = document.getElementById('first-desc');
  descText.innerText = descValue;
  // for price
  const priceText = document.getElementById('price');
  priceText.innerText = priceValue;
}

// show function
function showDeliveryCost(issRegular) {
  // regular cost
  const regularDeliveryCost = parseInt(document.getElementById('regular').innerText);

  // express cost
  const expressDeliveryCost = parseInt(document.getElementById('express').innerText);

  // current cost
  const currentCostId = document.getElementById('delivery-cost');
  //   set cost
  if (issRegular == true) {
    currentCostId.innerText = regularDeliveryCost;
  } else {
    currentCostId.innerText = expressDeliveryCost;
  }
}

// show total
function showTotal() {
  const price = parseInt(document.getElementById('price').innerText);
  const shipping = parseInt(document.getElementById('delivery-cost').innerText);
  const currentTotal = document.getElementById('Total-cost');
  const total = price + shipping;
  currentTotal.innerText = total;
}

//<-- -------------shipping event handling------------- -->
// for regular-->
document.getElementById('regular-button').addEventListener('click', function () {
  showDeliveryCost(true);
  showTotal();
});

// for express-->
document.getElementById('express-button').addEventListener('click', function () {
  showDeliveryCost(false);
  showTotal();
});

//<-- -------------- Photo change event handling-------------- -->

// first photo-->
document.getElementById('first').addEventListener('click', function () {
  Change('images/1.jpg', 'First-Image desc:', 700);
  showTotal();
});

// second photo-->
document.getElementById('second').addEventListener('click', function () {
  Change('images/2.jpg', 'Second-Image desc:', 600);
  showTotal();
});

// third photo-->
document.getElementById('third').addEventListener('click', function () {
  Change('images/3.jpg', 'First Image desc:', 500);
  showTotal();
});
