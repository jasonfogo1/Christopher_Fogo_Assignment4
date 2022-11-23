
class OrderCompletePage {
    
    get successMsg() {
        return $('span[data-ui-id="page-title-wrapper"]');
    }
}
module.exports = new OrderCompletePage();