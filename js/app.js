// cart icon
const cartBtn=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const closeBtn=document.querySelector('#cart-close');

cartBtn.addEventListener('click', () => {
    cart.classList.add('cart-active');
});

closeBtn.addEventListener('click', () => {
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadFood);

function loadFood(){
    loadcontent();
}

function loadcontent(){
    let removeBtn=document.querySelectorAll('#cart-remove');
    removeBtn.forEach((btn)=>{
        btn.addEventListener('click', removeItem);
    });

    let elementQty=document.querySelectorAll('.cart-quantity');
    elementQty.forEach((input)=>{
        input.addEventListener('click', changeQty);
    });

    let addCartBtn=document.querySelectorAll('#add-cart');
    addCartBtn.forEach((btn)=>{
        btn.addEventListener('click', addCart);
    });

    updateTotal();
}

function removeItem(){
    let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList=itemList.filter(ems=>ems.title!=title);
    this.parentElement.remove();
    loadcontent();
}

function changeQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
    loadcontent();
}

let itemList =[];

function addCart(){
    let food=this.parentElement;
    let title=food.querySelector('.food-title').innerHTML;
    let price=food.querySelector('.food-price').innerHTML;
    let image=food.querySelector('.food-image').src;

    let newProduct={title,price,image}
    if(itemList.find((els) => els.title==newProduct.title))
    {
        alert("Already in Cart")
        return;
    }
    else{
        itemList.push(newProduct);
    }

    let newProductElements = createCartProduct(title, price, image);

    let element = document.createElement('div');
    element.innerHTML=newProductElements;

    let cartBasket=document.querySelector('.cart-content');
    cartBasket.append(element);
    loadcontent();
}

function createCartProduct(title,price,image){
    return `
        <div class="cart-box">
            <img src="${image}" class="cart-image" alt="">
            <div class="detail-box">
                <div class="cart-food-title">${title}</div>
                <div class="price-box">
                    <div class="cart-price">${price}</div>
                    <div class="cart-amount">${price}</div>
                </div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <i class='bx bx-trash' id="cart-remove"></i>
        </div>
    `;
}

function updateTotal(){
    const cartItems=document.querySelectorAll('.cart-box');
    const totalValue=document.querySelector('.total-price');
    let total=0;

    cartItems.forEach(product=>{
        let priceElement=product.querySelector('.cart-price');
        let price=(priceElement.innerHTML.replace("Rs.",""));
        let qty=product.querySelector('.cart-quantity').value;
        total+=(price*qty);
        product.querySelector('.cart-amount').innerText="Rs."+price*qty;
    });

    totalValue.innerHTML='Rs.'+total;

    const cartCount=document.querySelector('.count');
    let counts=itemList.length;
    cartCount.innerHTML=counts;

    if(counts==0){
        cartCount.style.display="none"
    }
    else{
        cartCount.style.display="block"
    }

}


// sign in

const cartBtns=document.querySelector('#sign-in');
const sign=document.querySelector('.sign');
const closeBtns=document.querySelector('#sign-close');


cartBtns.addEventListener('click', () => {
    sign.classList.add('sign-active');
});

closeBtns.addEventListener('click', () => {
    sign.classList.remove('sign-active');
});

// favourites

const favBtn=document.querySelector('#fav-logo');
const fav=document.querySelector('.favs');
const favCloseBtn=document.querySelector('#fav-close');

favBtn.addEventListener('click', () => {
    fav.classList.add('favs-active');
});

favCloseBtn.addEventListener('click', () => {
    fav.classList.remove('favs-active');
});


document.addEventListener('DOMContentLoaded', loadFav);

function loadFav(){
    let favBtnRemove=document.querySelectorAll('#fav-remove');
    favBtnRemove.forEach((ftn)=>{
        ftn.addEventListener('click',removeFavItem);
    });

       // fav count

       const favCounts=document.querySelector('.counts');
       let countings=itemList.length;
       favCounts.innerHTML=countings;
       
       if(countings==0){
           favCounts.style.display="none"
       }
       else{
           favCounts.style.display="block"
       }

       loadFav();
}

function removeFavItem(){
    this.parentElement.remove();
}

let favBtns=document.querySelectorAll('#add-heart');
favBtns.forEach((ftn)=>{
    ftn.addEventListener('click', addFavt);
});

function addFavt(){
    let food=this.parentElement;
    let title=food.querySelector('.food-title').innerHTML;
    let price=food.querySelector('.food-price').innerHTML;
    let image=food.querySelector('.food-image').src;

    let newFavProduct={title,price,image}
    if(itemList.find((els) => els.title==newFavProduct.title))
    {
        alert("Already in Favourite")
        return;
    }
    else{
        itemList.push(newFavProduct);
    }

    let newProductElement = createFavProduct(title, price, image);

    let element = document.createElement('div');
    element.innerHTML=newProductElement;

    let favBasket=document.querySelector('.fav-content');
    favBasket.append(element);
    loadFav();     
}

function createFavProduct(title,price,image){
    return `
    <div class="fav-box">
    <div>
        <div class="fav-picture">
            <img src="${image}" class="fav-image" alt="">
        </div>
        <h2 class="favs-title">${title}</h2>
        <span class="fav-price">${price}</span>
    </div>
    <i class='bx bx-trash' id="fav-remove"></i>
</div> `
}

// dark mode

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})
