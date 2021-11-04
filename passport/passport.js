const LocalStrategy = require('passport-local').Strategy;
const usuario = require('../models/user/usuarios');
const bcrypt = require('bcryptjs')

module.exports = function (passport) {
    passport.serializeUser((user, done)=>{
        done(null, user.id_usuario);
    });

    passport.deserializeUser(async(id, done)=>{
        await usuario.findOne({
            where: {
                id_usuario: id
            }}).then((user)=>{
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

    passport.use('local-login', new LocalStrategy({
        username: 'username',
        password: 'password',
        passReqToCallback: true,
    },
    function (req, username, password, done) {
        var isValidPassword = (userpass, password) => {
            return bcrypt.compareSync(password, userpass);
        }
        usuario.findOne({
            where: {
                name: username
            }
        }).then((user) => {
            if (!user) {
                return done(null, false, {
                    message: 'Usuario no existe'
                });
            }
            if (!isValidPassword(user.password, password)) {
                return done(null, false, {
                    message: 'Contraseña incorrecta'
                })
            }
            var userinfo = user.get();
            return done(null, userinfo);
        }).catch((err) => {
            console.error(err);
            return done(null, false, {
                message: 'Algo salio mal'
            })
        })
    }
));
    
}