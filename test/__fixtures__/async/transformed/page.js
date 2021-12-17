class Foo extends Page {
    async open() {
        await browser.url('https://webdriver.io');
    }

    async login() {
        await this.username.setValue('foo');
        await this.password.setValue('bar');
        await this.loginButton.click();
    }

    async foo() {
        return $('.test');
    }

    get username() { return $('foo'); }
    get password() { return $('bar'); }
}
