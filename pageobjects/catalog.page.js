
const Page = require('./homePage');
/**
     * define selectors using getter methods
     */
class CatalogPage extends Page {

    get hoverProductImage() {
        return $('img[alt="Strike Endurance Tee"]');
    }
    get selectSize() {
        return $('(//div[@id="option-label-size-143-item-167"])[1]');
    }
    get selectColour() {
        return $('(//div[@id="option-label-color-93-item-49"])[1]');
    }
    get addToCartButton() {
        return $('(//button[@title="Add to Cart"])[1]');
    }
    get successMsg() {
        return $('div[data-ui-id="message-success"]');
    }
    get btnCart() {
        return $('.action.showcart');
    }
    get btnCheckout() {
        return $('#top-cart-btn-checkout');
    }
    get errorMsg() {
        return $('(//div[contains(text(), "You need")])');
    }

    async add2Cart() {

        await this.selectSize.click();
        await this.selectColour.click();
        await this.addToCartButton.click()
    }
    async goToCheckOut() {
        await this.btnCart.click();
        await this.btnCheckout.click();
    }


    open() {
        return super.open('men/tops-men/tees-men.html');
    }
}
module.exports = new CatalogPage();