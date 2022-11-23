
class MyOrdersPage {

    get orderPageTitle() {
        return $('span[data-ui-id="page-title-wrapper"]');
    }
    get btnViewOrder() {
        return $('//a[contains(@href,"4875")]');
    }
    get viewOrderTitle() {
        return $('//span[contains(text(),"Order #")]');
    }
}
module.exports = new MyOrdersPage();