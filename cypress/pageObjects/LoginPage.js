class LoginPage {
    navigate() {
        cy.visit('http://opensource-demo.orangehrmlive.com')
    }

    enterEmail(username) {
        cy.get('#txtUsername').clear()
        cy.get('#txtUsername').type(username);
        return this
    }

    enterPassword(pswd) {
        cy.get('#txtPassword').clear()
        cy.get('#txtPassword').type(pswd)
        return this
    }

    submit() {
        cy.get('input#btnLogin').click()
    }

}
export default LoginPage

// export function navigate(){
//     cy.visit('http://opensource-demo.orangehrmlive.com')
// }

// export function enterEmail(username){
//     cy.get('#txtUsername').clear()
//     cy.get('#txtUsername').type(username);
            
// }

// export function enterPassword(pswd){
//     cy.get('#txtPassword').clear()
//         cy.get('#txtPassword').type(pswd)
            
// }

// export function submit(){
//     cy.get('input#btnLogin').click()
// }