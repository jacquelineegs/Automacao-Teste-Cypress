/// <reference types="cypress" />


describe('Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')

    });

    it('Deve selecionar um produto do grid', () => {
        cy.get('.product-block')
            .contains('jax Full-Zip Sweatshirt')
            .click()


    });

    it('Deve adicionar o produto escolhido ao carrinho', () => {
             var quantidade = 4

        cy.get('.product-block')
            .contains('jax Full-Zip Sweatshirt').click()
            cy.get('.button-variable-item-L').click()
            cy.get('.button-variable-item-Red').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.woocommerce-message').should('contain',  quantidade  + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')


    });

    it('Deve adiconar produtos no carrinho usando comandos customizados', () => {
        cy.addProdutos('jax Full-Zip Sweatshirt', 'M','Red', 4)
    });

    
});

