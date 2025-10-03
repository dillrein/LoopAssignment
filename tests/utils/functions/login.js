async function login(page, email, password) {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.getByRole('textbox', { name: 'Username' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password)
  await page.click('button[type="submit"]');
}

module.exports = { login };