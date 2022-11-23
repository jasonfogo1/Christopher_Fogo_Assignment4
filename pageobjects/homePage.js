
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    get welcomeMsg() {
        return $('div[class="panel header"] span[class="logged-in"]');
    }
    get btnMenu() {
        return $('(//button[@type="button"])[1]');
    }
    get btnMyAccount() {
        return $('(//a[contains(text(),"My Account")])[1]');
    }
    get btnSignout() {
        return $('(//a[normalize-space()="Sign Out"])[1]');
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://magento.softwaretestingboard.com/${path}`)
    }
}
