async function login(page, url, user) {
  await page.goto(url);
  await page.getByRole("textbox", { name: "Username" }).fill(user.email);
  await page.getByRole("textbox", { name: "Password" }).fill(user.password);
  await page.getByRole("button", { name: "Sign in" }).click();
};

module.exports = { login };