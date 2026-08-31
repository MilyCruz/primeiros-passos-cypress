import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

   const selectorsList = {      
   
    
    firstNameField: "[name= 'firstName']",
    lastNameField: "[name= 'lastName']",
    genericField: ".oxd-input-group",
    dataField:"[placeholder='yyyy-mm-dd']",    
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ":nth-child(6) > span",
    thirdItemCombobox: ":nth-child(3) > span",
    dateCloseButton: ".--close",
    submitButton: "cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button')",  
    
  }    

  it.only('User Info Update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)  
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
   
    
    
    
    cy.get(selectorsList.firstNameField).clear().type('Fist Name Test')
    cy.get(selectorsList.lastNameField).clear().type('Last Name Test')    
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click({force: true})

    //Resposta Desafio (Eu)
    cy.get(selectorsList.genericField).eq(8).click()
    cy.contains('Cuban').click()
    cy.get(selectorsList.genericField).eq(9).click()
    cy.contains('Married').click()

    //Resposta Desafio (Aula)
    //cy.get(selectorsList.genericCombobox).eq(0).click({force: true})
    //cy.get(selectorsList.secondItemCombobox).click()
    //cy.get(selectorsList.genericCombobox).eq(1).click({force: true})
    //cy.get(selectorsList.thirdItemCombobox).click()
    

    //cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    
    
   
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type (userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)   
  })
})