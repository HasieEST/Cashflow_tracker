describe('Task App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Adds and removes tasks in the specified order', () => {
        const taskPrioritySelector = '.new-expense__control select';
        // Add a low-priority task
        cy.get('.new-expense__init button').click(); // click on add new task button
        cy.get('input[type="text"]').type('Low Priority Task')
        cy.get('input[type="date"]').type('2023-02-28')
        cy.get(taskPrioritySelector).select('Low').should('have.value','Low')
        cy.contains('Add Expense').click()

        // Add a mid-priority task
        cy.get('.new-expense__init button').click(); // click on add new task button
        cy.get('input[type="text"]').type('Mid Priority Task')
        cy.get('input[type="date"]').type('2023-02-28')
        cy.get(taskPrioritySelector).select('Mid').should('have.value','Mid')
        cy.contains('Add Expense').click()

        // Add a high-priority task
        cy.get('.new-expense__init button').click(); // click on add new task button
        cy.get('input[type="text"]').type('High Priority Task')
        cy.get('input[type="date"]').type('2023-02-28')
        cy.get(taskPrioritySelector).select('High').should('have.value','High')
        cy.contains('Add Expense').click()

        // Open add tasking window and close it without sending data.
        cy.get('.new-expense__init button').click(); // click on add new task button
        cy.get('input[type="text"]').type('High Priority Task')
        cy.get('input[type="date"]').type('2023-02-28')
        cy.get(taskPrioritySelector).select('High').should('have.value','High')
        cy.contains('Cancel').click()


        // Remove the mid-priority task
        cy.get('.expense-item__description').contains('Mid Priority Task')
            .parent('.expense-item')
            .within(() => {
                cy.get('.expense-item__actions button').click({force: true})
            })

        // Check that the remaining tasks are rendered correctly
        cy.get('.expense-item').should('have.length', 2)
        cy.get('.expense-item__description').contains('Low Priority Task')
        cy.get('.expense-item__description').contains('High Priority Task')
        cy.get('.expense-item__price').contains('Low')
        cy.get('.expense-item__price').contains('High')
        cy.get('.expense-item__description').contains('2023-02-28')

        // Filter tasks by priority
        cy.get('select').select('Low')
        cy.get('.expense-item').should('have.length', 1)
        cy.get('.expense-item__description').contains('Low Priority Task')
        cy.get('.expense-item__price').contains('Low')

        // View all tasks
        cy.get('select').select('')
        cy.get('.expense-item').should('have.length', 2)
        cy.get('.expense-item__description').contains('Low Priority Task')
        cy.get('.expense-item__description').contains('High Priority Task')
        cy.get('.expense-item__price').contains('Low')
        cy.get('.expense-item__price').contains('High')
        cy.get('.expense-item__description').contains('2023-02-28')
    })
})
