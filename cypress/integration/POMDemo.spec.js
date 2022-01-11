 ///<refrence types="cypress" />

import LoginPage from "../pageObjects/LoginPage";

describe("Cypress POM Test Suite", function () {
    it("Login with valid credentials", function () {
        const login = new LoginPage();
        login.navigate();
        login.enterEmail('Admin');
        login.enterPassword('admin123');
        login.submit();
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
    });
});