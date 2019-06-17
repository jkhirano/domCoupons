//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

disclaimer.innerHTML = finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.

brand1.innerHTML = 'Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

item1.innerHTML = 'Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.

price1.innerHTML = '$8.99';

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

discount1.innerHTML = 'Free fries with purchase!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

var itemDiv = document.createElement('div');
itemDiv.id = 'item2'
itemDiv.innerHTML = "Hendrick's Gin";
brand2.appendChild(itemDiv);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

var priceDiv = document.createElement('div');
priceDiv.id = 'price2';
priceDiv.innerHTML = '$34.99';
itemDiv.appendChild(priceDiv);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

var discountDiv = document.createElement('button');
discountDiv.id = 'discount3';
discountDiv.innerHTML = '50% OFF Axe body soap!';
price3.appendChild(discountDiv);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

var pandaDiv = document.getElementsByClassName('item');
pandaDiv[0].innerHTML = 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

var dcElem = document.createElement('button');
dcElem.className = 'discount';
dcElem.innerHTML = 'Free T-Shirt and fortune cookie with purchase!';
var getPanda = document.getElementsByClassName('block1');
// console.log(getPanda);
getPanda[1].appendChild(dcElem);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

var hoodie = document.getElementsByClassName('brand');
hoodie[1].innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

var hoodiePrice = document.getElementsByClassName('price');
hoodiePrice[1].innerHTML = '10,000';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

var brandName = document.createElement('div');
brandName.className = 'brand';
brandName.innerHTML = 'Hifiman Shangri-La';
var headPhone = document.getElementsByClassName('block3');
headPhone[1].appendChild(brandName);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

var headphoneDesc = document.createElement('div');
headphoneDesc.className = 'item';
headphoneDesc.innerHTML = 'Electronstatic Headphones';
headPhone[1].appendChild(headphoneDesc);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

var headphonePrice = document.createElement('div');
headphonePrice.className = 'price';
headphonePrice.innerHTML = '$18,000';
headPhone[1].appendChild(headphonePrice);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

let barryCd = document.createElement('div');
barryCd.className = 'discount';
barryCd.innerHTML = 'Free Barry Manilow CD with purchase!';
headPhone[1].appendChild(barryCd);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

let unicornBrand = document.getElementsByClassName('brand');
// console.log(unicornBrand);
unicornBrand[3].innerHTML = 'H&M';

let unicornItem = document.getElementsByClassName('item');
// console.log(unicornItem);
unicornItem[3].innerHTML = 'Unicorn-Head Slippers';

let unicornPrice = document.getElementsByClassName('price');
unicornPrice[3].innerHTML = '$21.99';

let unicornDc = document.getElementsByClassName('discount');
unicornDc[3].innerHTML = 'Free knee-high tube socks with purchase!';

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

let chipsBrand = document.getElementsByClassName('brand');
// console.log(chipsBrand);
chipsBrand[4].innerHTML = 'Frito Lay';

let chipsItem = document.getElementsByClassName('item');
chipsItem[4].innerHTML = "Poppin' Jalapeno Doritos";

let chipsPrice = document.getElementsByClassName('price');
chipsPrice[4].innerHTML = '$7.77';

let chipsDc = document.getElementsByClassName('discount');
chipsDc[4].innerHTML = '33% OFF any 6 pack Budweiser or Bud Light.';

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

let pugBrand = document.getElementsByClassName('brand');
pugBrand[5].innerHTML = 'Any Dog Breeder';

let pugItem = document.getElementsByClassName('item');
pugItem[5].innerHTML = 'Baby Puggy';

let pugPrice = document.getElementsByClassName('price');
pugPrice[5].innerHTML = 'Priceless';

let pugDc = document.getElementsByClassName('discount');
pugDc[5].innerHTML = 'No Discounts. This cute is worth every penny!';

//Final Boss 
//Create your own product for the last three sections.

// FIRST TRY (CREATE AN IMAGE ELEMENT AND APPEND THE IMAGE. CAN'T FIGURE OUT HOW TO GET THE IMAGE TO APPEND TO THE TOP.):
// let stickerImage = document.createElement('IMG');
// stickerImage.setAttribute('src', 'https://images-na.ssl-images-amazon.com/images/I/41yOKJYRdJL.jpg');
// stickerImage.setAttribute('width', '300');
// stickerImage.setAttribute('height', '300');
// let stickerPlace = document.getElementsByClassName('block1');
// console.log(stickerPlace);
// stickerPlace[3].appendChild(stickerImage);

// SECOND TRY (GET ELEMENT BY TAG NAME AND REPLACE THE IMAGE):
// let stickerImage = document.getElementsByTagName('img');
// let stickerPlace = document.getElementsByClassName('block1');
// stickerPlace[3].src = 'https://images-na.ssl-images-amazon.com/images/I/41yOKJYRdJL.jpg';

let catSticker = document.getElementsByClassName('brand');
catSticker[6].innerHTML = 'Amazon';

let catItem = document.getElementsByClassName('item');
catItem[6].innerHTML = 'Mac Cat Sticker';

let catPrice = document.getElementsByClassName('price');
catPrice[6].innerHTML = '$8.99';

let catDc = document.getElementsByClassName('discount');
catDc[6].innerHTML = 'Free catnip with purchase';

let tea = document.createElement('div');
tea.className = 'brand';
tea.innerHTML = 'Zest Tea';
var teaPlace = document.getElementsByClassName('block2');
teaPlace[3].appendChild(tea);

let teaItem = document.createElement('div');
teaItem.className = 'item';
teaItem.innerHTML = 'Blue Lady';
teaPlace[3].appendChild(teaItem);

let teaPrice = document.createElement('div');
teaPrice.className = 'price';
teaPrice.innerHTML = '$12.30';
teaPlace[3].appendChild(teaPrice);

let teaDc = document.createElement('button');
teaDc.className = 'discount';
teaDc.innerHTML = 'BOGO';
teaPlace[3].appendChild(teaDc);

let plant = document.createElement('div');
plant.className = 'brand';
plant.innerHTML = 'Plant Life';
var plantPlace = document.getElementsByClassName('block3');
plantPlace[3].appendChild(plant);

let plantItem = document.createElement('div');
plantItem.className = 'item';
plantItem.innerHTML = 'Dev Plant';
plantPlace[3].appendChild(plantItem);

let plantPrice = document.createElement('div');
plantPrice.className = 'price';
plantPrice.innerHTML = '$5.99';
plantPlace[3].appendChild(plantPrice);

let plantDc = document.createElement('button');
plantDc.className = 'discount';
plantDc.innerHTML = 'Extra oxygen fo freee';
plantPlace[3].appendChild(plantDc);
