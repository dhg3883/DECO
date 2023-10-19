var Persona = require('../persona.js')
exports.Login = function (req, res) {
    Persona.find({ email: req.body.email, password: req.body.password }, function (err, per) {
        if (err) {
            res.send(err);
        }
        else {
            if (per.length > 0) {
                res.json(per)
            } else {
                res.json("error")
            }
        }
    }
    )
}
exports.Seleccionartodos = function (req, res) {
    console.log(req.body)
    //encontramos todos los objetos
    Persona.find(
        function (err, per) {
            if (err) {
                res.send(err)
            } else {
                Persona.find(function (err, per) {
                    if (err) {
                        res.send(err)
                    }
                    else {
                        res.json(per)
                    }
                })
            }
        }


    )
}
exports.Guardar = function (req, res) {
    console.log(req.body)
    Persona.create({
        //Se crea todos los objetos
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        tipousuario: req.body.tipousuario,
        password: encrypt(req.body.password),
        foto: req.body.foto,
       

    },

        function (err, per) {
            if (err) {
                res.send(err)
            } else {
                //busca todos los datos
                Persona.find(function (err, per) {
                    //Si da error
                    if (err) {
                        res.send(err)
                    }
                    else {
                        //Si no da error enviamos el dato
                        res.json(per)
                    }
                })
            }
        }
    )

}
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'q1w2e3r43883$'

function encrypt(text){
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = cipher.update(text,"utf-8","hex")
    crypted += cipher.final('hex')
    return crypted
}

function decrypt(text){
    var decipher = crypto.createCipher(algorithm, password)
    var dec = decipher.update(text,"hex",'utf-8')
    dec += decipher.final('utf-8')
    return dec
}

