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

//<-- -------------shipping event handling------------- -->
// for regular-->
document.getElementById('regular-button').addEventListener('click', function () {});

// for express-->
document.getElementById('express-button').addEventListener('click', function () {});

//<-- -------------- Photo change event handling-------------- -->

// first photo-->
document.getElementById('first').addEventListener('click', function () {
  //    change
  Change('images/1.jpg', 'First-Image desc:', 700);
});

// second photo-->
document.getElementById('second').addEventListener('click', function () {
  //   change
  Change('images/2.jpg', 'Second-Image desc:', 600);
});
// third photo-->
document.getElementById('third').addEventListener('click', function () {
  // change
  Change('images/3.jpg', 'First Image desc:', 500);
});
