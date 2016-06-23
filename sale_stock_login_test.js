Feature('Login SaleStock');

Scenario('test login', (I) => {
  // Open salestockindonesia.com
  I.amOnPage("/");

  // Open hamburger menu
  I.click("//a[@type='link']");

  // Should open left menu
  I.seeElement("//a[@data-qa-id='qa_login_hamburger_menu_button']");

  // I.click({css: "div .chat-close"})

  // Click on "Masuk" button
  I.click("//a[@data-qa-id='qa_login_hamburger_menu_button']");

  I.wait(3)

  // Should be redirected to https://www.salestockindonesia.com/account/login?redirectTo=%2F
  I.seeCurrentUrlEquals("/account/login?redirectTo=%2F");
  I.see("Masuk atau Daftar Member");

  // I.wait(2)

  // Click on "Masuk Member" button without filling any field
  I.click("//input[@data-qa-id='qa_login_member_button']")

  // Should see email warning
  I.see("Telepon atau Email wajib diisi ya Sis :)")

  // Should see kata sandi warning
  I.see("Kata Sandi wajib diisi ya Sis :)")

  let username = "hidrodixtion@yahoo.com";
  let password = "123456";

  // Fill username
  I.fillField("#username", username);

  // Click on "Masuk Member" button
  I.click("//input[@data-qa-id='qa_login_member_button']");

  // Should see kata sandi warning
  I.see("Kata Sandi wajib diisi ya Sis :)");

  // Should not see username warning
  I.dontSee("Telepon atau Email wajib diisi ya Sis :)");

  // Empty the username
  I.fillField("#username", "");

  // Fill the password
  I.fillField("#password", password);

  // Click on "Masuk Member" button
  I.click("//input[@data-qa-id='qa_login_member_button']");

  // Should not see kata sandi warning
  I.dontSee("Kata Sandi wajib diisi ya Sis :)");

  // Should see username warning
  I.see("Telepon atau Email wajib diisi ya Sis :)");

  // Fill the username
  I.fillField("#username", username);

  // Fill the password
  I.fillField("#password", password);

  // Click on "Masuk Member" button
  I.click("//input[@data-qa-id='qa_login_member_button']");

  I.wait(3)

  // should be redirectedTo https://www.salestockindonesia.com/?login=1
  I.seeCurrentUrlEquals("/?login=1");
  I.see("Selamat datang Kembali Sista!");

  // Open hamburger menu
  I.click("//a[@type='link']");

  // Should see profile menu
  I.see("Profil");
});
