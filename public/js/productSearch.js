const CART = {
    key: 'dehydheuydheuy',
    user_id: 12,
    contents: [],
    init: function(){
        let _contents = localStorage.getItem(CART.key);
        if(_contents){
            CART.contents = JSON.parse(_contents);
        }else{
            CART.contents = [
                {
                    id: 3,
                    img: '/images/camiseta3.jpeg',
                    name: 'AC MILAN 21/22 HOME JERSEY BY PUMA',
                    qtty: 2,
                    price: 'ARS$ 9.200'
                },
                {
                    id: 2,
                    img: '/images/camiseta3.jpeg',
                    name: 'INTER MILAN 21/22 AUTHENTIC HOME JERSEY',
                    qtty: 1,
                    price: 'ARS$ 6.332'
                },
                {
                    id: 1,
                    img: '/images/camiseta3.jpeg',
                    name: 'JUVENTUS 21/22 AUTHENTIC HOME JERSEY',
                    qtty: 3,
                    price: 'ARS$ 5.461'
                },
            ]
        };
    },
    sort: function(field='name'){
        let sorted = CART.contents.sort((a,b)=>{
            if(a[field]>b[field]){
                return 1;
            }else if(a[field] < a[field]){
                return -1;
            }else{
                return 0;
            }
        })
        return sorted;
    },
    empty: function(){
        CART.contents = [];
        CART.sync()
    },
    sync: async function(){
        let _cart = JSON.stringify(CART.contents);
        await localStorage.setItem(CART.key, _cart);
    },
    find: function(id){
        let match = CART.contents.filter(item=>{
            if(item.id == id){
                return true;
            }
        })
        if(match && match[0]){
            return match[0];
        }
    },
    add: function(id, qtty){
        if(CART.find(id)){
            CART.replaceQtty(id, qtty);
        }else{
            let selected_product = products.filter(product=>{
                if(product.id==id){
                    return true;
                }
            })
            if(selected_product && selected_product[0]){
                let productToAdd = {
                    id: product_selected[0].id,
                    img: product_selected[0].image_main,
                    name: product_selected[0].name,
                    title: product_selected[0].qtty,
                    price: product_selected[0].special_price
                };
                CART.contents.push(productToAdd);
                CART.sync();
            }else{
                console.log('Invalid product');
            }
        }
    },
    replaceQtty: function(id, qtty=1){
        CART.contents = CART.contents.map(item=>{
            if(item.id==id){
                item.qtty = qtty;
            }
            return item;
        })
    },
    remove: function(id){
        CART.contents = CART.contents.filter(item=>{
            if(item.id !== id){
                return true;
            }
        })
        CART.sync();
    }
}

const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    });

function getCookie(cname) {

    var allcookies = document.cookie;
    var arrayb = allcookies.split("; ");
    for (let i = 0; i<arrayb.length; i++){
        if (arrayb[i].startsWith(cname)){
            return arrayb[i].replace(cname+"=","");
        }
    }
};
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function getProducts(success, failure){
    //buscar con un api
    const URL = 'http://localhost:3001/files/products';
    fetch(URL, {
        method: 'GET',
        mode: 'cors'
    })
    .then((response) => response.json())
    .then(success)
    .then()
    .catch(failure);
}

function pagination(querySet, page, rows){
    var start = (page-1) * rows;
    var end = start + rows;
    var pages = querySet.length/rows;

    var trimmedData = querySet.slice(start, end);

    return {
        'querySet': trimmedData,
        'pages': pages
    }
}

function showProducts(products){
    state.results = products.length;
    productsToShow = pagination(products, state.page, state.rows).querySet;
    let productSection = document.getElementById('product-section');
    productSection.innerHTML = "";
    productsToShow.forEach((product, i) => {
        let productItem = document.createElement('div');
        productItem.className = 'col-6';
        productItem.classList.add('col-sm-4');
        let commentTitle = `<!--Product ${i+1}-->`
        productSection.innerHtml = commentTitle;
        productSection.appendChild(productItem);

        let productCard = document.createElement('div');
        productCard.setAttribute('id', `"product-card-${i+1}"`);
        productCard.setAttribute('data-card-id', i+1);
        productCard.setAttribute('data-product-id', product.id);
        productCard.className = 'product';
        productItem.appendChild(productCard);

        let productTile = document.createElement('div');
        productTile.className = 'product-tile';
        productCard.appendChild(productTile);

        let imageContent = 
        `                    
            <!-- Imagen -->
            <div class="image-container">
                <a href="product/${product.id}">
                    <div class="product-image-container">
                        <img class="tile-image" src="/images/${product.image_main}">
                    </div>
                </a>
                <a class="wishlistTile">
                    <span class="fa-stack fa-lg">
                        <i class="far fa-heart fa-stack-1x"></i>
                        <i class="fas fa-circle fa-inverse fa-stack-2x"></i>
                    </span>
                </a>
                <a class="quickview hidden-sm-down">
                    <span class="fa-stack fa-lg">
                        <i class="fas fa-expand-alt fa-stack-1x"></i>
                        <i class="fas fa-circle fa-inverse fa-stack-2x"></i>
                    </span>
                </a>
            </div>
            <!-- Cuerpo -->
        `
        productTile.innerHTML = imageContent;

        let tileBody = document.createElement('div');
        tileBody.className = 'tile-body';
        productTile.appendChild(tileBody);

        let descContent = 
        `                        
            <!-- Descripcion -->
            <div class="description">
                <a href="product/${product.id}">${product.name_product}</a>
            </div>
            <!-- Precio wide screens-->
        `
        tileBody.innerHTML = descContent;

        let tileOp1 = document.createElement('div')
        tileOp1.className = 'tile-op-1';
        tileBody.appendChild(tileOp1);

        let priceBody = 
        `                            
            <div class="price-box">
                <p class="old-price">
                    <span class="price-label value price">${formatter.format(product.regular_price)}</span>
                </p>
                <p class="special-price">
                    <span class="price-label value price" data-special_price='${product.special_price}'>${formatter.format(product.special_price)}</span>
                </p>
            </div>
        `

        tileOp1.innerHTML = priceBody;

        let formBody = document.createElement('form');
        formBody.className = 'form-box';
        tileOp1.appendChild(formBody);

        let qttyBody = 
        `
            <p class="text-center qty-label">Cantidad</p>
            <div class="input-group">
                <select class='input-number' name='qty-card-${i+1}'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
        `
        formBody.innerHTML = qttyBody;

        let buttonBody = document.createElement('div');
        buttonBody.className = 'button-div';
        formBody.appendChild(buttonBody);

        let buyButton = document.createElement('button');
        buyButton.className = 'button btn-cart';
        buyButton.setAttribute('data-card-id', i+1);
        buyButton.setAttribute('data-product-id', product.id);
        buyButton.setAttribute('type', 'button');
        buyButton.setAttribute('id', `"buy-button-ws-${i+1}"`);
        buyButton.setAttribute('onclick', 'addItem');
        buttonBody.appendChild(buyButton);
        buyButton.addEventListener("click", addItem);
        //buyButton.setAttribute('onclick', 'addItem()');

        let cartIcon = document.createElement('i');
        cartIcon.className = 'fas fa-shopping-cart';
        buyButton.appendChild(cartIcon);

        let buyButtonText = document.createElement('span');
        buyButtonText.innerHTML = 'Comprar';
        buyButton.appendChild(buyButtonText);
        buyButtonText.addEventListener("click", addItem);
        //buyButtonText.setAttribute('onclick', 'addItem()');

        let commentSmallScreens = `<!--Product ${i+1}-->`
        tileBody.innerHTML += commentSmallScreens;

        let tileOp2 = document.createElement('div');
        tileOp2.className = 'tile-op-2';
        tileBody.appendChild(tileOp2);        

        let tileOp2Content = 
        `
            <div class="bfg-price-badge">
                <span class="bfg-price-text">
                    <button type="button" class="bfg-price-button btn-unstyled">
                        Black Friday Prices <span>Guaranteed</span>
                    </button>
                </span>
            </div>
            <div class="price">
                <span class="sales">
                    <span class="value">
                        ${formatter.format(product.special_price)}
                    </span>
                </span>
            </div>
            <div class="price-savings-box">
                <div class="price-savings">
                    <div class="price-savings-value">
                        Save ${formatter.format(product.regular_price-product.special_price)}
                    </div>
                </div>
                <span>
                    <div class="regular-price">
                        Was ${formatter.format(product.regular_price)}
                    </div>
                </span>
            </div>
        `

        tileOp2.innerHTML = tileOp2Content;

        let addToCart2 = document.createElement('div');
        addToCart2.className = 'add-to-cart';
        addToCart2.setAttribute('id', `"add-cart-product-${product.id}"`);
        tileOp2.appendChild(addToCart2);

        let buttonBody2 = document.createElement('button');
        buttonBody2.className = 'button btn-cart-sm';
        buttonBody2.setAttribute('data-product-id', product.id);
        buttonBody2.setAttribute('type', 'button');
        buttonBody2.setAttribute('id',`"buy-button-ss-${i+1}"`);
        addToCart2.appendChild(buttonBody2);
        //buttonBody2.addEventListener("click", addItem);
        //buttonBody2.setAttribute('onclick', 'addItem');

        let buyIcon2 = document.createElement('i');
        buyIcon2.className = "fas fa-shopping-cart";
        buttonBody2.appendChild(buyIcon2);

        let buyText2 = document.createElement('span');
        buyText2.innerHTML = 'comprar';
        buttonBody2.appendChild(buyText2);
        //buyText2.addEventListener("click", addItem);
        buyText2.setAttribute('onclick', 'addItem');
    })

    let endPage = 
    `                                            
        <!--End Page-->
        <div class="col-12 grid-footer">
            <div class="end-page-container pagination-lg">
                <div class="text-center">
                    <span class="page">Páginas:</span>
                    <button id="previousPageBtn" onclick="loadPreviousPage()" class="btn btn-padding"> < </button>
                    <button class="btn pagination-page btn-active"> 1</button>
                    <button class="btn pagination-page"> 2</button>
                    <span class="ellipsis btn-padding">...</span>
                    <button class="btn pagination-page"> 24</button>
                    <button id="nextPageBtn" onclick="loadNextPage()" class="btn btn-padding"> > </button>
                </div>
            </div>
            <div class="end-page-container pagination-sm">
                <div class="text-center">
                    <button class="btn pagination-page btn-padding" disabled> Anterior </button>
                    <button class="btn pagination-page btn-active"> 1</button>
                    <button class="btn btn-padding"> Siguiente ></button>
                </div>
            </div>
        </div>
    `
    productSection.innerHTML += endPage;

}

function showCart(){
    let imgPath = '/images/';
    let cartSection = document.getElementById("cart-sidebar");
    cartSection.innerHTML = "";
    let s = CART.sort('name');
    s.forEach((item, i) => {
        let cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartSection.appendChild(cartItem);

        let itemButtons = document.createElement('div');
        itemButtons.className = 'product-control-buttons';
        cartItem.appendChild(itemButtons);

        let removeButton = document.createElement('a');
        removeButton.className = 'btn-remove';
        removeButton.setAttribute('data-product-id', item.id);
        itemButtons.appendChild(removeButton);
        removeButton.addEventListener('click', removeItem)

        let imageCard = document.createElement('span');
        imageCard.className = 'cart-product-image';
        insertAfter(imageCard, itemButtons);

        let center = document.createElement('div');
        center.className = 'center';
        imageCard.appendChild(center);

        let itemImage = document.createElement('img');
        itemImage.src = item.img;
        center.appendChild(itemImage);

        let cartItemContent = 
            `
            <p class='cart-product-name'>${item.name}</p>
            <div class='cart-product-details'>
                <strong>${item.qtty}</strong>
                x 
                <span class='price'>${item.price}</span>
            </div>
            `
        cartItem.innerHTML += cartItemContent;
    })
}

function addItem(ev){
    console.log(ev.target); 
    ev.preventDefault();
    let id = parseInt(ev.target.getAttribute('data-product-id'));
    let tileOp = ev.target.parentElement.parentElement.parentElement.parentElement.className;
    let qtty = document.querySelector('.tile-body .'+tileOp+' .input-number').value;
    console.log('add to cart item: ', id);
    CART.add(id, qtty);
}

function removeItem(e){
    let id = parseInt(ev.target.getAttribute('data-product-id'));
    console.log('remove from cart item: ', id);
    CART.remove(id);
}

function errorMessage(err){
    console.log(err);
}

function resultsCount(count){
    var countSection = document.querySelector(".search-result-count");
    var countResult = document.createElement('span');
    countSection.innerHTML = '';
    countResult.className = 'count';
    countSection.appendChild(countResult);
    countResult.innerHTML = count+' Resultados';
}

function loadNextPage(page=state.page+1){
    state.page = Math.min(page, Math.ceil(state.results/state.rows));
    getProducts(showProducts, errorMessage)
}

function loadPreviousPage(page=state.page-1){
    state.page = Math.max(page,1);
    getProducts(showProducts, errorMessage)
}

function loadSpecificPage(event){
    console.log(event.currentTarget.innerHTML)
    page = event.currentTarget.innerHTML;
    state.page = page;
    getProducts(showProducts, errorMessage)
}

async function storeProducts(object) {
    let toStore = JSON.stringify(object);
    await localStorage.setItem('PRODUCTOS', object);
}

function pageNumber(total, max, current){
    const half = Math.round(max/2);
    let to = max;

    if(current + half >= total){
        to = total;
    } else if(current > half) {
        to = current + half;
    }

    let from = to - max;
    
    return Array.from({length: max}, (_, i) => (i+1) + from)

}

function test(){
    alert('testeando')
}


var PRODUCTS = []

var state = {
    'results': 0,
    'page': 1,
    'rows': 9
}

window.addEventListener("load", function() {

    //Inicializo
    getProducts(showProducts, errorMessage);
    resultsCount(12);
    CART.init();
    showCart();





    //Definicion de variables


    //Creacion de funciones



})
