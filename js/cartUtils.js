async function printCart() {
    $('#cartContent').empty();

    let cart;

    if (sessionStorage.getItem('cart')) {
        cart = new Map(JSON.parse(sessionStorage.cart));
        if (cart.size <= 0) {
            handleEmptyCart();
            return;
        }
    } else {
        handleEmptyCart();
        return;
    }

    //wyswietl liste produktow w koszyku
    cart.forEach(async (amount, id) => {
        await renderCartItem(id, amount);
    });

    //wyswietl cene calkowita
    $('#cartContent').append(
        "<td></td><td></td><td>" +
        "suma: " + await calculateTotalPrice() + " PLN" +
        "</td>"
    );

    setupAddRemoveProductListeners();
}



function renderCartItem(productId, amount) {
    let product = findProductById(productId);
    $('#cartContent').append(
        "<tr>" +
        "      <td>" +
        "       <img src=\"" + product.image + "\"/> " +
                product.name + "</td>" +
        "      <td><button class='btn btn-secondary btn-sm remove-from-cart' data-product-id = " + productId + ">-</button>" +
        "      " + amount + "" +
        "      <button class='btn btn-secondary btn-sm add-to-cart' data-product-id = " + productId + ">+</button></td>" +
        "      <td>" + product.price + " PLN </td>" +
        "</tr>"
    )
}

async function calculateTotalPrice() {
    let sum = 0;
    if (sessionStorage.getItem('cart')) {
        cart = new Map(JSON.parse(sessionStorage.cart));

        await cart.forEach(async (amount, id) => {
            let product = await findProductById(id);
            sum += product.price * amount;
            console.log(sum);
        });
    }
    return sum.toFixed(2);
}

function setupAddRemoveProductListeners() {
    $('.remove-from-cart').click(function (event) {
        let productId = event.target.getAttribute('data-product-id');
        removeFromCart(productId);
    });
    $('.add-to-cart').click(function (event) {
        let productId = event.target.getAttribute('data-product-id');
        addToCart(productId, false);
    });
}

function addToCart(productId, showToast) {
    let cart;

    if (sessionStorage.getItem('cart'))
        cart = new Map(JSON.parse(sessionStorage.cart));
    else cart = new Map();

    if (cart.has(productId))
        cart.set(productId, parseInt(cart.get(productId)) + 1)
    else cart.set(productId, 1)

    sessionStorage.cart = JSON.stringify(Array.from(cart.entries()));

    if(showToast) $('.toast').toast('show');

    printCart();
}

function removeFromCart(productId) {
    let cart;

    if (sessionStorage.getItem('cart'))
        cart = new Map(JSON.parse(sessionStorage.cart));
    else cart = new Map();

    if(cart.get(productId) <= 1)
        cart.delete(productId);
    else if (cart.has(productId))
        cart.set(productId, parseInt(cart.get(productId)) - 1)

    sessionStorage.cart = JSON.stringify(Array.from(cart.entries()));
    $('.toast').toast('show');

    printCart();
}

function handleEmptyCart() {
    $('#main').empty();
    $('#main').append("<p class='pt-3 pb-3'>Twój koszyk jest pusty. Dodaj do niego conajmniej jeden produkt aby móc przejść dalej.</p>");
}