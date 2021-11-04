const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const axios = require('axios');

var api = 'http://localhost:3023/';

module.exports = function (passport) {
    passport.serializeUser((user, done)=>{
        done(null, user.data.data.id);
    });

    passport.deserializeUser((id, done)=>{
        axios.post(api+'users/userid',{id: id})
        .then((user)=>{
            if (user) {
                done(null, user);
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
            /* var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
            console.log(hash); */
            return bcrypt.compareSync(password, userpass);
        }
        axios.post(api+'users/user',{name: username})
        .then((user) => {
            if (!user) {
                return done(null, false, {
                    message: 'Usuario no existe'
                });
            }
            if (!isValidPassword(user.data.data.password, password)) {
                return done(null, false, {
                    message: 'Contraseña incorrecta'
                })
            }
            return done(null, user);
        }).catch((err) => {
            console.error(err);
            return done(null, false, {
                message: 'Algo salio mal'
            })
        })
    }
));
    
}