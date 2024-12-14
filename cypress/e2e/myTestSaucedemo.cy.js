/// <reference types="cypress" />

import login from './selectores/login'
import seleccionarProductos from './selectores/seleccionarProductos'
import comprasDeProducto from './selectores/comprasDeProducto'
import logout from './selectores/logout'


describe('Sauce Demo', () => {

    var misdatos;
    var datosCompra;
    var datosUser;
  
    beforeEach(() => {
     // cy.clearCookies();
      //cy.clearLocalStorage();
      cy.visit('/');
      cy.fixture('./user1')
          .then(mistest => {
                misdatos = mistest;
          })
      
      cy.fixture('./formulario')
      .then(test => {
            datosCompra = test;
      })

      cy.fixture('./user2')
        .then(mitest => {
              datosUser = mitest;
        })
    })
  
    it('Usuario1', () => {
  
      //Iniciar sesion
        cy.escribir(login.datos.usuario, misdatos.usuario)
        cy.escribir(login.datos.clave, misdatos.clave)	
        cy.wait(2000)
        cy.mi_click(login.datos.btn_ingresar)
    
      //Seleccionar producto  
        cy.mi_click(seleccionarProductos.productos.Backpack)
        cy.mi_click(seleccionarProductos.productos.BoltTShirt)
        cy.mi_click(seleccionarProductos.productos.BikeLight)
        cy.wait(2000)

      //Comprar producto  
        cy.mi_click(comprasDeProducto.compra.carritoDeCompra)
        cy.mi_click(comprasDeProducto.compra.checkout)

      //Completar formulario de compra
        cy.escribir(comprasDeProducto.formulario.nombre, datosCompra.nombre)
        cy.escribir(comprasDeProducto.formulario.apellido, datosCompra.apellido)
        cy.escribir(comprasDeProducto.formulario.codigoPostal, datosCompra.codigo)
        cy.mi_click(comprasDeProducto.formulario.btnContinue)
        cy.mi_click(comprasDeProducto.formulario.btnFinish)

      //Validacion de compra
       
        cy.asersion(comprasDeProducto.validarCompra.finalizacionDeCompra, 'Thank you for your order!')
        

      //Salir de la página
        cy.mi_click(logout.cerrarSesion.btnHamburguesa)
        cy.mi_click(logout.cerrarSesion.btnLogout)

    }) 


    it('Usuario2', () => {
  
      //Iniciar sesion
        cy.escribir(login.datos.usuario, datosUser.usuario)
        cy.escribir(login.datos.clave, datosUser.clave)	
        cy.wait(2000)
        cy.mi_click(login.datos.btn_ingresar)
    
      //Seleccionar producto  
        cy.mi_click(seleccionarProductos.productos.Backpack)
        cy.mi_click(seleccionarProductos.productos.BoltTShirt)
        cy.mi_click(seleccionarProductos.productos.BikeLight)
        cy.wait(2000)

      //Comprar producto  
        cy.mi_click(comprasDeProducto.compra.carritoDeCompra)
        cy.mi_click(comprasDeProducto.compra.checkout)

      //Completar formulario de compra
      cy.escribir(comprasDeProducto.formulario.nombre, datosCompra.nombre)
      cy.escribir(comprasDeProducto.formulario.apellido, datosCompra.apellido)
      cy.escribir(comprasDeProducto.formulario.codigoPostal, datosCompra.codigo)
      cy.mi_click(comprasDeProducto.formulario.btnContinue)
      cy.asersion(comprasDeProducto.validarCompra.msjErrorDeCompra, 'Error: Last Name is required')
    
    })
    
  })