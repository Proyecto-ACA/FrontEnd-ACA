const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const axios = require('axios');

//direccion de la api (express)
var api = 'http://localhost:3023/';

module.exports = function (passport) {

    passport.serializeUser((user, done)=>{
        console.log("hola " + user.data);
        done(null, user.data.data.id);
    });

    passport.deserializeUser((id, done)=>{
        axios.post(api+'users/userid',{id: id})
        .then((user)=>{
            if (user) {
                done(null, user.data.data);
            } else {
                done(user.errors, null);
            }
        });
    });
/*

██╗      ██████╗  ██████╗ ██╗███╗   ██╗
██║     ██╔═══██╗██╔════╝ ██║████╗  ██║
██║     ██║   ██║██║  ███╗██║██╔██╗ ██║
██║     ██║   ██║██║   ██║██║██║╚██╗██║
███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║
╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝
                                
*/
    passport.use('local-login', new LocalStrategy({
        username: 'username',
        password: 'password',
        passReqToCallback: true,
    },
    function (req, username, password, done) {
        var isValidPassword = (userpass, password) => {
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
        }).catch((err) => 
        {
            console.error(err);
            return done(null, false, {
                message: 'Algo salio mal'
            })
        })
    }
));
        
/*

███████╗██╗ ██████╗ ███╗   ██╗    ██╗   ██╗██████╗ 
██╔════╝██║██╔════╝ ████╗  ██║    ██║   ██║██╔══██╗
███████╗██║██║  ███╗██╔██╗ ██║    ██║   ██║██████╔╝
╚════██║██║██║   ██║██║╚██╗██║    ██║   ██║██╔═══╝ 
███████║██║╚██████╔╝██║ ╚████║    ╚██████╔╝██║     
╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝     ╚═════╝ ╚═╝     

*/

        passport.use('local-signup', new LocalStrategy({
            username: 'username',
            password: 'password',
            passReqToCallback: true,
        },
        function (req, username, password, done) {
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
            var obj = new Object();
            obj.name = username;
            obj.rol_id = 2;
            obj.password = hash;
            var usuarionuevo= JSON.stringify(obj);      
            console.log(usuarionuevo)
            axios.post(api+'users/user',{name: username})
                .then((user) =>
                {
                
                    //se valida si existe o no el usuario
                    axios.post(api+'users/save', JSON.parse(usuarionuevo))
                    .then(function (res) {
                        return done(null, res);
                        })
                    .catch(function (err) {
                        console.log(err)
                    });
                }).catch((err) => 
                {
                    console.error(err);
                    return done(null, false, {
                        message: 'Algo salio mal'
                    })
                .catch(function (err) {
                    console.log(err)
                });
                return done(null, user);
            }).catch((err) => 
            {
                console.error(err);
                return done(null, false, {
                    message: 'Algo salio mal'
                })
            })
        }
    ));
}
