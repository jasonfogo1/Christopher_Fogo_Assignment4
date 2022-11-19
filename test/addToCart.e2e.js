const CatalogPage = require('../pageobjects/catalog.page');

describe.skip("Add to Cart", ()=> {
    it('Should add product to cart', async ()=> {
        await CatalogPage.open();
        await CatalogPage.hoverProductImage.moveTo();
        await expect(CatalogPage.addToCartButton).toBeDisplayed();
        await CatalogPage.add2Cart();
        await CatalogPage.successMsg.waitForExist();
        await expect(CatalogPage.successMsg).toBeDisplayed();

    })
                        // Unhappy Test
    it('Should not add product to cart(colour NOT selected)', async ()=> {
        await CatalogPage.open();
        await CatalogPage.hoverProductImage.moveTo();
        await expect(CatalogPage.addToCartButton).toBeDisplayed();
        await CatalogPage.selectColour.click();
        await CatalogPage.addToCartButton.click();
        await expect(CatalogPage.errorMsg).toBeDisplayed();

    })
    it('Should NOT add product to cart(size NOT selected)', async ()=> {
        await CatalogPage.open();
        await CatalogPage.hoverProductImage.moveTo();
        await expect(CatalogPage.addToCartButton).toBeDisplayed();
        await CatalogPage.selectSize.click();
        await CatalogPage.addToCartButton.click();
        await expect(CatalogPage.errorMsg).toBeDisplayed();

    })
})