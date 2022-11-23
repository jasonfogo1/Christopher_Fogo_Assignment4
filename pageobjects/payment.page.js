
class PaymentPage {
    get pageTitle() {
        return $("div[class='payment-group'] div[class='step-title']")
    }
    get btnPlaceOrder() {
        return $('.checkout > span:nth-child(1)')
    }
    get obstructionImg() {
        return $('div[class="loading-mask"]');
    }
}
module.exports = new PaymentPage();