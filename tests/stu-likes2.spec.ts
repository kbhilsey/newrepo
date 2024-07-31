import { test, expect } from '@playwright/test';

test('stu likes2', async ({ page }) => {
    await page.goto('https://stuqa.com');

    const logIn = page.getByRole('button', { name: 'Log In'});
    await logIn.click();

    await page.fill('input[type="email"]', process.env.username);

    await page.fill('input[type="password"]', process.env.password);

    await page.click('button[type="submit"]');

    await page.waitForTimeout(3000);

    await page.goto('https://www.skool.com/testers');

    
  // Selector for the button
  const buttonSelector = 'button.styled__ButtonWrapper-sc-dscagy-1.dyKdeN';

  // Function to check if the button is clicked
  async function isButtonClicked(button) {
    return await button.evaluate((btn) => btn.hasAttribute('style'));
  }

  // Get all buttons with the specified selector
  const buttons = await page.$$(buttonSelector);

  // Iterate through each button and check if it is clicked
  for (const button of buttons) {
    if (await isButtonClicked(button)) {
      console.log('Button is already clicked.');
    } else {
      // Click the button if not clicked
      await button.click();
      console.log('Button was not clicked, so it has been clicked now.');
    }
  }

  // Optional: Wait for some time to observe the result
  await page.waitForTimeout(3000);

});