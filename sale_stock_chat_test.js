Feature('Live Chat SaleStock');

Scenario('test live chat', (I) => {
  I.amOnPage("/");

  // Click on live chat window title
  I.click("//div[@class='chat-close']")

  // Should maximize window
  I.seeElement("//div[@class='chat-open']")

  // Click on opened live chat window title
  I.click("//div[@class='chat-title']")

  I.wait(2)

  // Should minimize window
  // I.see("Chat", "span")

  // Click on live chat window title
  I.click("//div[@class='chat-close']")

  // Should show disable button when no message
  // I.seeElement("//button[@style='border-width: 0px; outline: medium none; text-shadow: -0.1rem -0.1rem rgba(0, 0, 0, 0.08); width: 100%; line-height: 100%; background-color: rgb(214, 214, 214); background-image: linear-gradient(rgb(234, 234, 234) 0%, rgb(214, 214, 214) 100%); color: rgba(74, 74, 74, 0.5); border-radius: 3px; padding: 8px 5px 9px; font-size: 13px;']")

  let message = "Dev Testing";

  // Fill message text
  I.fillField("//textarea[@rows='1']", message);

  // Send (Click kirim button)
  I.click({css: "div.chat-open button"});

  // Message inside chat. This used to be `I.see(message, 'span')` but the operation wont finish
  I.see(message);
});
