const { user } = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { password } = require('../../config/database')
const authConfig = require('../../config/auth')


module.exports = {

    //Login
    login(req, res) {

        let { email, password } = req.body;

        //Buscar users

        user.findOne({
            where: {
                email,
            }
        }).then(user => {
            if (!user) {
                res.status(404).json({ message: 'User not found' })
            } else {
                if (bcrypt.compareSync(password, user.password)) {

                    let token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires //expiresIn-Tiempo que dura la expiracion
                    })

                    res.json({
                        user,
                        token,
                    })

                } else {
                    res.status(401).json({ msg: 'Incorrect password ' })
                }
            }
        }).catch(err => { res.status(500).json(err) });

    },

    //Funcion para registro
    check_in(req, res) {
        //Encriptar contraseña
        let password = bcrypt.hashSync(req.body.password, +authConfig.rounds);//-Llamo de .env a rounds



        //Creación de users
        user.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        }).then(user => {
            let token = jwt.sign({ user: user }, authConfig.secret, {
                expiresIn: authConfig.expires //expiresIn-Tiempo que dura la expiracion
            })

            res.json({
                user,
                token,
            })
        }).catch(err => {
            res.status(500).json(err)
        })
    }
}