/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
/**setShadowDOM(true);
navigateTo("https://www.saucedemo.com/");
setValue(fallback(`textbox(0, _in(div("login_button_container")))`,
   `textbox(0, _in(div({'id':'login_button_container'})))`,
   `byXPath('//*[@id="user-name"]')`,
   `textbox("form_input input_error")`,
   `byXPath('//*[@name="user-name"]')`,
   `textbox("user-name")`,
   `textbox("user-name")`,
   `byXPath("//input[@id='user-name']")`,
   `byXPath('//*[@class="input_error form_input"]')`,
   `byXPath('/html/body/div/div/div[2]/div/div/div/form/div/input')`,
   `byXPath("id('user-name')")`,
   `textbox({'type':'text'})`,
   `byJQuery('div[class="form_group"] > input[class="input_error form_input"]')`,
   `byJQuery('#user-name')`,
   `byJQuery('input[name="user-name"]')`,
   `byJQuery('input[value="s"]')`),"standard_user");
setValue(fallback(`byXPath('//*[@id="password"]')`,
   `password("form_input input_error")`,
   `byXPath('//*[@name="password"]')`,
   `password("password")`,
   `password("password")`,
   `byXPath("//input[@id='password']")`,
   `byXPath('/html/body/div/div/div[2]/div/div/div/form/div[2]/input')`,
   `byXPath("id('password')")`,
   `password({'type':'password'})`,
   `byJQuery('#password')`,
   `byJQuery('input[name="password"]')`,
   `byJQuery('input[value=""]')`),"secret_sauce");
click(fallback(`byXPath('//*[@id="login-button"]')`,
   `submit("btn_action submit-button")`,
   `byXPath('//*[@name="login-button"]')`,
   `submit("login-button")`,
   `submit("login-button")`,
   `submit("Login")`,
   `byXPath("//input[@id='login-button']")`,
   `byXPath('//*[@class="submit-button btn_action"]')`,
   `byXPath('/html/body/div/div/div[2]/div/div/div/form/input')`,
   `byXPath("id('login-button')")`,
   `submit({'type':'submit'})`,
   `byJQuery('input[class="submit-button btn_action"]')`,
   `byJQuery('#login-button')`,
   `byJQuery('input[name="login-button"]')`,
   `byJQuery('input[value="Login"]')`));
click(fallback(`submit(0, _in(div("inventory_container")))`,
   `submit(0, _in(div({'id':'inventory_container'})))`,
   `byXPath('//*[@id="add-to-cart-sauce-labs-backpack"]')`,
   `submit("btn btn_inventory btn_primary btn_small")`,
   `byXPath('//*[@name="add-to-cart-sauce-labs-backpack"]')`,
   `submit("add-to-cart-sauce-labs-backpack")`,
   `submit("add-to-cart-sauce-labs-backpack")`,
   `submit("Add to cart")`,
   `byXPath("//button[@id='add-to-cart-sauce-labs-backpack']")`,
   `byXPath('//*[@class="btn btn_primary btn_small btn_inventory "]')`,
   `byXPath('//*[text()="Add to cart"]')`,
   `byXPath('/html/body/div/div/div/div[2]/div/div/div/div/div[2]/div[2]/button')`,
   `byXPath("id('add-to-cart-sauce-labs-backpack')")`,
   `submit({'data-test':'add-to-cart-sauce-labs-backpack'})`,
   `byJQuery('div[class="inventory_list"] > div[class="inventory_item"] > div[class="inventory_item_description"] > div[class="pricebar"] > button[class="btn btn_primary btn_small btn_inventory "]')`,
   `byJQuery('#add-to-cart-sauce-labs-backpack')`,
   `byJQuery('button[name="add-to-cart-sauce-labs-backpack"]')`));
click(fallback(`link(0, _in(div("shopping_cart_container")))`,
   `link(0, _in(div({'id':'shopping_cart_container'})))`,
   `link("shopping_cart_link")`,
   `link("1")`,
   `byXPath("//div[@id='shopping_cart_container']/a")`,
   `byXPath('//*[@class="shopping_cart_link"]')`,
   `byXPath('/html/body/div/div/div/div/div/div[3]/a')`,
   `byXPath("id('shopping_cart_container')/a[@class='shopping_cart_link']")`,
   `link({'data-test':'shopping-cart-link'})`,
   `byJQuery('div[class="header_container"] > div[class="primary_header"] > div[class="shopping_cart_container"] > a[class="shopping_cart_link"]')`,
   `byJQuery('#shopping_cart_container > .shopping_cart_link')`));
click(fallback(`submit(2, _in(div("cart_contents_container")))`,
   `submit(2, _in(div({'id':'cart_contents_container'})))`,
   `byXPath('//*[@id="checkout"]')`,
   `submit("btn btn_action btn_medium checkout_button")`,
   `byXPath('//*[@name="checkout"]')`,
   `submit("checkout")`,
   `submit("checkout")`,
   `submit("Checkout")`,
   `byXPath("//button[@id='checkout']")`,
   `byXPath('//*[@class="btn btn_action btn_medium checkout_button "]')`,
   `byXPath('//*[text()="Checkout"]')`,
   `byXPath('/html/body/div/div/div/div[2]/div/div[2]/button[2]')`,
   `byXPath("id('checkout')")`,
   `submit({'data-test':'checkout'})`,
   `byJQuery('div[class="cart_footer"] > button[class="btn btn_action btn_medium checkout_button "]')`,
   `byJQuery('#checkout')`,
   `byJQuery('button[name="checkout"]')`));
click(fallback(`div(2, _in(div("checkout_info_container"))).xy(0.25, 0.79 )`,
   `div(2, _in(div({'id':'checkout_info_container'}))).xy(0.25, 0.79 )`,
   `div("form_group").xy(0.25, 0.79 )`,
   `byXPath("//div[@id='checkout_info_container']/div/form/div[1]/div[1]").xy(0.25, 0.79 )`,
   `byXPath('//*[@class="form_group"]').xy(0.25, 0.79 )`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/div/div').xy(0.25, 0.79 )`,
   `byXPath("id('checkout_info_container')/div[@class='checkout_info_wrapper']/form[1]/div[@class='checkout_info']/div[@class='form_group']").xy(0.25, 0.79 )`,
   `byJQuery('div[class="checkout_info"] > div[class="form_group"]').xy(0.25, 0.79 )`,
   `byJQuery('.checkout_info > .form_group').xy(0.25, 0.79 )`));
setValue(fallback(`textbox(0, _in(div("checkout_info_container")))`,
   `textbox(0, _in(div({'id':'checkout_info_container'})))`,
   `byXPath('//*[@id="first-name"]')`,
   `textbox("form_input input_error")`,
   `byXPath('//*[@name="firstName"]')`,
   `textbox("first-name")`,
   `textbox("firstName")`,
   `byXPath("//input[@id='first-name']")`,
   `byXPath('//*[@class="input_error form_input"]')`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/div/div/input')`,
   `byXPath("id('first-name')")`,
   `textbox({'type':'text'})`,
   `byJQuery('div[class="checkout_info"] > div[class="form_group"] > input[class="input_error form_input"]')`,
   `byJQuery('#first-name')`,
   `byJQuery('input[name="firstName"]')`,
   `byJQuery('input[value="madhu"]')`),"madhu");
setValue(fallback(`textbox(1, _in(div("checkout_info_container")))`,
   `textbox(1, _in(div({'id':'checkout_info_container'})))`,
   `byXPath('//*[@id="last-name"]')`,
   `textbox("form_input input_error[1]")`,
   `byXPath('//*[@name="lastName"]')`,
   `textbox("last-name")`,
   `textbox("lastName")`,
   `byXPath("//input[@id='last-name']")`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/div/div[2]/input')`,
   `byXPath("id('last-name')")`,
   `textbox({'placeholder':'Last Name'})`,
   `byJQuery('#last-name')`,
   `byJQuery('input[name="lastName"]')`,
   `byJQuery('input[value=""]')`),);
setValue(fallback(`textbox(0, _in(div("checkout_info_container")))`,
   `textbox(0, _in(div({'id':'checkout_info_container'})))`,
   `byXPath('//*[@id="first-name"]')`,
   `textbox("form_input input_error")`,
   `byXPath('//*[@name="firstName"]')`,
   `textbox("first-name")`,
   `textbox("firstName")`,
   `byXPath("//input[@id='first-name']")`,
   `byXPath('//*[@class="input_error form_input"]')`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/div/div/input')`,
   `byXPath("id('first-name')")`,
   `textbox({'type':'text'})`,
   `byJQuery('div[class="checkout_info"] > div[class="form_group"] > input[class="input_error form_input"]')`,
   `byJQuery('#first-name')`,
   `byJQuery('input[name="firstName"]')`,
   `byJQuery('input[value="madhu"]')`),"madhu");
setValue(fallback(`textbox(1, _in(div("checkout_info_container")))`,
   `textbox(1, _in(div({'id':'checkout_info_container'})))`,
   `byXPath('//*[@id="last-name"]')`,
   `textbox("form_input input_error[1]")`,
   `byXPath('//*[@name="lastName"]')`,
   `textbox("last-name")`,
   `textbox("lastName")`,
   `byXPath("//input[@id='last-name']")`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/div/div[2]/input')`,
   `byXPath("id('last-name')")`,
   `textbox({'placeholder':'Last Name'})`,
   `byJQuery('#last-name')`,
   `byJQuery('input[name="lastName"]')`,
   `byJQuery('input[value="1r"]')`),"R");
click(fallback(`div(4, _in(div("checkout_info_container"))).xy(0.50, 0.44 )`,
   `div(4, _in(div({'id':'checkout_info_container'}))).xy(0.50, 0.44 )`,
   `div("form_group[2]").xy(0.50, 0.44 )`,
   `byXPath("//div[@id='checkout_info_container']/div/form/div[1]/div[3]").xy(0.50, 0.44 )`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/div/div[3]').xy(0.50, 0.44 )`));**/
setValue(fallback(`textbox(2, _in(div("checkout_info_container")))`,
   `textbox(2, _in(div({'id':'checkout_info_container'})))`,
   `byXPath('//*[@id="postal-code"]')`,
   `textbox("form_input input_error[2]")`,
   `byXPath('//*[@name="postalCode"]')`,
   `textbox("postal-code")`,
   `textbox("postalCode")`,
   `byXPath("//input[@id='postal-code']")`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/div/div[3]/input')`,
   `byXPath("id('postal-code')")`,
   `textbox({'placeholder':'Zip/Postal Code'})`,
   `byJQuery('#postal-code')`,
   `byJQuery('input[name="postalCode"]')`,
   `byJQuery('input[value="4"]')`),"4356");
click(fallback(`byXPath('//*[@id="continue"]')`,
   `submit("btn btn_action btn_primary cart_button submit-button")`,
   `byXPath('//*[@name="continue"]')`,
   `submit("continue")`,
   `submit("continue")`,
   `submit("Continue")`,
   `byXPath("//input[@id='continue']")`,
   `byXPath('//*[@class="submit-button btn btn_primary cart_button btn_action"]')`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/div[2]/input')`,
   `byXPath("id('continue')")`,
   `submit({'type':'submit'})`,
   `byJQuery('div[class="checkout_buttons"] > input[class="submit-button btn btn_primary cart_button btn_action"]')`,
   `byJQuery('#continue')`,
   `byJQuery('input[name="continue"]')`,
   `byJQuery('input[value="Continue"]')`));
click(fallback(`submit(1, _in(div("checkout_summary_container")))`,
   `submit(1, _in(div({'id':'checkout_summary_container'})))`,
   `byXPath('//*[@id="finish"]')`,
   `submit("btn btn_action btn_medium cart_button")`,
   `byXPath('//*[@name="finish"]')`,
   `submit("finish")`,
   `submit("finish")`,
   `submit("Finish")`,
   `byXPath("//button[@id='finish']")`,
   `byXPath('//*[@class="btn btn_action btn_medium cart_button"]')`,
   `byXPath('//*[text()="Finish"]')`,
   `byXPath('/html/body/div/div/div/div[2]/div/div[2]/div[9]/button[2]')`,
   `byXPath("id('finish')")`,
   `submit({'data-test':'finish'})`,
   `byJQuery('div[class="summary_info"] > div[class="cart_footer"] > button[class="btn btn_action btn_medium cart_button"]')`,
   `byJQuery('#finish')`,
   `byJQuery('button[name="finish"]')`));
