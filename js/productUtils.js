const HERB = 'herb';
const OIL = 'oil';
const COSMETIC = 'cosmetic';

function printCatalog(type) {
    products.filter(p => p.type === type).forEach((i) => {
        $('#productList').append(
            renderProduct(i.id, i.name, i.description, i.image, i.price)
        )
    });
    $('.buy-button').click(function (event) {
        let productId = event.target.getAttribute('data-product-id');
        addToCart(productId, true);
    })
}

function renderProduct(id, name, description, image, price) {
    return  "<div class='col'>" +
            "<div class=\"card h-100\">" +
            "    <img src=\" " + image + " \" class=\"card-img-top\">" +
            "    <div class=\"card-body\">" +
            "        <h5 class=\"card-title\">" + name + "</h5>" +
            "        <p><span class=\"badge bg-primary\"> " + price + " PLN </span></p>" +
            "        <p class=\"card-text\"> " + description + " </p>" +
            "    </div>" +
            "        <div class=\"card-footer bg-light d-flex justify-content-end\">\n" +
            "            <button type=\"button\" data-product-id = " + id + " class=\"buy-button btn btn-primary\">" +
            "               Do koszyka</button>" +
            "        </div>" +
            "    </div>" +
            "</div>"
}

function findProductById(productId) {
    return products.find(i => i.id === productId);
}