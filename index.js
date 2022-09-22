var cardArray = [
    {name: 'Puma RS', size: '3-9', price: 2200, image: 'https://www.kicksonfire.com/wp-content/uploads/2020/07/368783_02.jpg?x27993' },
    {name: 'Puma RS-X', size: '3-9', price: 2000, image: 'https://th.bing.com/th/id/OIP.PoW2yTc5FokhzpCTuDHCOgHaHa?pid=ImgDet&w=221&h=221&c=7&dpr=1,25' },
    {name: 'Puma MTV', size: '3-9', price: 1700, image: 'https://i.ebayimg.com/images/g/4HkAAOSwzxBe63sK/s-l400.jpg' },
    {name: 'Puma XS', size: '3-9', price: 2900, image: 'https://th.bing.com/th/id/OIP.HPWZ5AJ_RvA3SldirP2plwAAAA?pid=ImgDet&rs=1' },
    {name: 'Puma Blue', size: '3-9', price: 1500, image: 'https://th.bing.com/th/id/R.da712119aa88d4695a046146e7f9efc0?rik=z2q%2boE4K2F9ArA&pid=ImgRaw&r=0' },
    {name: 'Puma 2022', size: '3-9', price: 1200, image: 'https://i.pinimg.com/originals/66/f8/d6/66f8d6c98399e3f077ed05fde024a645.jpg' },
    {name: 'Puma FL', size: '3-9', price: 5200, image: 'https://wooki.com/wp-content/uploads/2020/03/371008_02.jpg' },
    {name: 'Puma XM', size: '3-9', price: 3200, image: 'https://media.sneakin.shop/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/3/7/371870_b_06-image-371870-06.jpg' },
    
]

var cardCart = document.getElementById('cardCart');
var productsPuma = document.getElementById('productsPuma');
var totalCart = document.getElementById('totalCart');


var countArray = [];
var totalPrice = 0;

function calucatePrice() {
  totalPrice = 0;

  for (let i = 0; i < countArray.length; i++) {
    totalPrice += countArray[i].price;
  }
}

function addCart(i) {
cart = document.getElementById('cart');

countArray.push(cardArray[i]);

calucatePrice();
homeDisplay();
cartMonitor();
}


function homeDisplay() {
    productsPuma.innerHTML = "";

    for (let i = 0; i < cardArray.length; i++) {
        productsPuma.innerHTML += `
        <div class="row">
        <div class="card">
          <img
            class="productImage"
            src="${cardArray[i].image}" alt=""
          />
          <div class="cardTitle">${cardArray[i].name}</div>
          <div class="cardSize">${cardArray[i].size}</div>
          <div class="cardPrice"><span>R</span>${cardArray[i].price}</div>
          <button class='cardButton' onclick="addCart(${i})">Add to cart</button>
        </div>
        </div>`
        
    }

}

function cartMonitor() {
  cardCart.innerHTML = "";

  for (let i = 0; i < countArray.length; i++) {
    cardCart.innerHTML += `
    <div class="row">
    <div class="card">
      <img
        class="productImage"
        src="${countArray[i].image}" alt=""
      />
      <div class="cardTitle">${countArray[i].name}</div>
      <div class="cardSize">${countArray[i].size}</div>
      <div class="cardPrice"><span>R</span>${countArray[i].price}</div>
      <button class='cardButton' onclick="removeCart(${[i]})">RemoveCart</button>
    </div>
    </div>`
}

      cart.innerHTML = countArray.length;
      totalCart.innerHTML = `${totalPrice}`
}

function removeCart(i) {
    countArray.splice(i,1);


    calucatePrice();
    homeDisplay();
    cartMonitor();
}

homeDisplay();
cartMonitor();
