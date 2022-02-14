const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Clientes = db.Cliente;


const usersAPIController = {
    'list': (req, res) => {
        db.User.findAll({attributes: ['first_name', 'email', 'detailUrl']})
        .then(usuarios => {
            let respuesta = {
                meta: {
                    status : 200,
                    count: usuarios.length,
                    url: '/api/usuarios'
                },
                users: usuarios
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.User.findByPk(req.params.id, {attributes: {exclude: ['detailUrl', 'passwd', 'admin_category', 'adult']}})
            .then(usuario => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/usuarios/:id'
                    },
                    usuario: usuario
                }
                res.json(respuesta);
            });
    },

    'image': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(usuario => {
                console.log("el id es:",req.params.id)
                //res.sendFile('http://localhost:3000/images/'+usuario.face_pic);
                res.sendFile(path.join(__dirname, '../../public/images', usuario.face_pic));
            });
    },

    create: (req,res) => {
        Clientes
        .create(
            {
                email: req.body.email,
                passwd: passEncriptada,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                country: req.body.pais,
                face_pic: req.body.face_pic,
                admin_category: req.body.admin == 'on'? 1 : 0,
                adult: req.body.mayor == 'on'? 1 : 0,
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/api/clientes/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        url: '/api/clientes/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let clienteId = req.params.id;
        Clientes.update(
            {
                email: req.body.email,
                passwd: passEncriptada,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                country: req.body.pais,
                face_pic: req.body.face_pic,
                admin_category: req.body.admin == 'on'? 1 : 0,
                adult: req.body.mayor == 'on'? 1 : 0,
            },
            {
                where: {id: clienteId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/api/clientes/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        url: '/api/clientes/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let clienteId = req.params.id;
        Clientes
        .destroy({where: {id: clienteId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/api/clientes/destroy/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        url: '/api/clientes/destroy/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
    
}

module.exports = usersAPIController;