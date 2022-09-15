const {check,body} = require ('express-validator');
const {loadUsers} = require ('../data/db_modules');


module.exports = [

    check('nombre')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({
            min:2,
            max:20
        }).withMessage('Debe ingresar entre 2 y 20 caracteres').bail()
        .isAlpha('es-ES').withMessage('Solo caracteres alfabeticos'),

    body('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debe ingresar un email valido')
        .custom((value,{req})=> {
            const user = loadUsers().find(user => user.email === value)
            if (user){
                return false
            } else {
                return true
            }
        }).withMessage('El email ya se encuentra registrado'),
    
    check('edad')
        .custom((value,{req})=> {
            if (value<1){
                return false
            } else {
                return true
            }
        }).withMessage('La edad debe ser mayor a 1'),
  ]

