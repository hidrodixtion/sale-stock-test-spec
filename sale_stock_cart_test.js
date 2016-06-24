Feature('Cart SaleStock');

Scenario('test cart', (I) => {

  // login first
  let username = "hidrodixtion@yahoo.com";
  let password = "123456";

  I.amOnPage("/account/login?redirectTo=%2F");

  I.fillField("#username", username);
  I.fillField("#password", password);
  I.click("//input[@data-qa-id='qa_login_member_button']");

  I.wait(3);

  // Click cart menu
  I.click("//a[@id='cart']");

  // Should open right menu
  // I.see("Keranjang Belanja");

  // But empty cart
  // I.see("Lanjut Belanja");

  I.amOnPage("/products/veanza-plain-pencil-long-pants");

  // Click a buy button
  I.scrollTo("//button[@data-qa-id='qa_buy_button']");

  I.wait(2);

  I.click("//button[@data-qa-id='qa_buy_button']");

  // Show color selection
  I.see("Pilih warnanya dulu ya Sis :)");

  // Click a color
  I.click("//button[@data-qa-id='qa_color_button']");

  // Get cart number badge value and make sure that it have value of 1
  // let cart_number = yield(I.grabValueFrom("//span[@data-qa-id='qa_cart_number']"));
  I.see(1, "//span[@data-qa-id='qa_cart_number']");

  // Click cart menu
  I.click("//a[@id='cart']");

  // See and click Lanjut ke Kasir
  I.see("Lanjut ke Kasir");
  I.click("//a[@data-qa-id='qa_checkout_link']")

  // Should open order page
  I.seeCurrentUrlEquals("/order")

  // -- scenario : clear cart

  I.amOnPage("/?login=1")

  // Click cart menu
  I.click("//a[@id='cart']");

  // Click "X" button
  I.click("//a[@class='checkout-item__remove']");

  I.acceptPopup();

  I.wait(3)

  I.see("Lanjut Belanja");
});
