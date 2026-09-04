class MyInfoPage {

    selectorsList () {

      const selectors = {

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

      return selectors    

    }

    fillPersonalDetails(firstName, lastName) {

        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)  
    }

    fillEmployeeDetails(employee, otherId, driverLicense, expiryDate) {

        cy.get(this.selectorsList().genericField).eq(4).clear().type(employee)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driverLicense)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click({force: true})
    }

    saveFrom() {
        //cy.get(selectorsList.submitButton).eq(0).click({force: true})
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus() {

        //Resposta Desafio (Eu)
        cy.get(this.selectorsList().genericField).eq(8).click()
        cy.contains('Cuban').click()
        cy.get(this.selectorsList().genericField).eq(9).click()
        cy.contains('Married').click()

        //Resposta Desafio (Aula)
        //cy.get(selectorsList.genericCombobox).eq(0).click({force: true})
        //cy.get(selectorsList.secondItemCombobox).click()
        //cy.get(selectorsList.genericCombobox).eq(1).click({force: true})
        //cy.get(selectorsList.thirdItemCombobox).click()
    }


}

export default MyInfoPage