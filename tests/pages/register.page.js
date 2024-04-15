import { faker } from '@faker-js/faker';

export class RegisterPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.loginField = page.getByLabel('Login *');
        this.passwordField = page.getByLabel('Password *');
        this.passwordConfrmationField = page.getByLabel('Confirmation *');
        this.firstNamenField = page.getByLabel('First name *');
        this.lastNamenField = page.getByLabel('Last name *');
        this.emailField = page.getByLabel('Email *');
        this.sumbitBtn = page.getByRole('button', { name: 'Submit' });
        this.successMsg = page.getByText('Account was successfully');
    }

    async generateRandomEmail() {
        return faker.internet.email();
    }

    async generateRandomLogin() {
        return faker.internet.userName();
    }
}