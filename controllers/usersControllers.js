const colors = require ('../data/colors');



module.exports = {

    msj: (req,res) => {
        res.render('msj')
    },

    logout: (req,res) => {
        res.render('logout')
    }
}