class comprasDeProducto{

    compra ={
        carritoDeCompra: '#shopping_cart_container > a',
        checkout: '[data-test="checkout"]'
    }

    formulario ={
        nombre: '[data-test="firstName"]',
        apellido: '#last-name',
        codigoPostal: '#postal-code',
        btnContinue: '#continue',
        btnFinish: '[data-test="finish"]',
        home:'[data-test="back-to-products"]'
    }

    validarCompra ={
        validarCantidadDeProductos: '[data-test="shopping-cart-badge"]',
        finalizacionDeCompra: '[data-test="complete-header"]',
        msjErrorDeCompra: '.error-message-container'
    }

}
module.exports = new comprasDeProducto();