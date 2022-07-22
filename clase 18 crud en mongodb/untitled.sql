> use ecommerce

> db.createCollection("mensajes")
> db.createCollection("productos")

> db.productos.insert({name:"regla", precio:120})
> db.productos.insert({name:"goma", precio:580})
> db.productos.insert({name:"cuaderno", precio:900})
> db.productos.insert({name:"ojalillos", precio:1280})
> db.productos.insert({name:"resaltador", precio:1700})
> db.productos.insert({name:"compas", precio:2300})
> db.productos.insert({name:"tinta", precio:3350})
> db.productos.insert({name:"mochila", precio:4320})
> db.productos.insert({name:"cartuchera", precio:4990})
> db.productos.insert({name:"lapizera", precio:5000})

> db.mensajes.insert({email:"a@gmail.com", msg:"a"})
> db.mensajes.insert({email:"b@gmail.com", msg:"b"})
> db.mensajes.insert({email:"c@gmail.com", msg:"c"})
> db.mensajes.insert({email:"d@gmail.com", msg:"d"})
> db.mensajes.insert({email:"f@gmail.com", msg:"f"})
> db.mensajes.insert({email:"f@gmail.com", msg:"g"})
> db.mensajes.insert({email:"g@gmail.com", msg:"g"})
> db.mensajes.insert({email:"h@gmail.com", msg:"h"})
> db.mensajes.insert({email:"h@gmail.com", msg:"i"})
> db.mensajes.insert({email:"i@gmail.com", msg:"i"})

> db.mensajes.find()
{ "_id" : ObjectId("62da1d55f1fb73d784a9cf5b"), "email" : "a@gmail.com", "msg" : "a" }
{ "_id" : ObjectId("62da1d5af1fb73d784a9cf5c"), "email" : "b@gmail.com", "msg" : "b" }
{ "_id" : ObjectId("62da1d5ff1fb73d784a9cf5d"), "email" : "c@gmail.com", "msg" : "c" }
{ "_id" : ObjectId("62da1d63f1fb73d784a9cf5e"), "email" : "d@gmail.com", "msg" : "d" }
{ "_id" : ObjectId("62da1d69f1fb73d784a9cf5f"), "email" : "f@gmail.com", "msg" : "f" }
{ "_id" : ObjectId("62da1d6bf1fb73d784a9cf60"), "email" : "f@gmail.com", "msg" : "g" }
{ "_id" : ObjectId("62da1d6ef1fb73d784a9cf61"), "email" : "g@gmail.com", "msg" : "g" }
{ "_id" : ObjectId("62da1d73f1fb73d784a9cf62"), "email" : "h@gmail.com", "msg" : "h" }
{ "_id" : ObjectId("62da1d76f1fb73d784a9cf63"), "email" : "h@gmail.com", "msg" : "i" }
{ "_id" : ObjectId("62da1d7bf1fb73d784a9cf64"), "email" : "i@gmail.com", "msg" : "i" }
{ "_id" : ObjectId("62da1d80f1fb73d784a9cf65"), "email" : "j@gmail.com", "msg" : "j" }
{ "_id" : ObjectId("62da1d86f1fb73d784a9cf66"), "email" : "k@gmail.com", "msg" : "k" }

> db.productos.find()
{ "_id" : ObjectId("62da1c25f1fb73d784a9cf51"), "name" : "regla", "precio" : 120 }
{ "_id" : ObjectId("62da1c2bf1fb73d784a9cf52"), "name" : "goma", "precio" : 580 }
{ "_id" : ObjectId("62da1c34f1fb73d784a9cf53"), "name" : "cuaderno", "precio" : 900 }
{ "_id" : ObjectId("62da1c3cf1fb73d784a9cf54"), "name" : "ojalillos", "precio" : 1280 }
{ "_id" : ObjectId("62da1c42f1fb73d784a9cf55"), "name" : "resaltador", "precio" : 1700 }
{ "_id" : ObjectId("62da1c49f1fb73d784a9cf56"), "name" : "compas", "precio" : 2300 }
{ "_id" : ObjectId("62da1c59f1fb73d784a9cf57"), "name" : "tinta", "precio" : 3350 }
{ "_id" : ObjectId("62da1c64f1fb73d784a9cf58"), "name" : "mochila", "precio" : 4320 }
{ "_id" : ObjectId("62da1c73f1fb73d784a9cf59"), "name" : "cartuchera", "precio" : 4990 }
{ "_id" : ObjectId("62da1c8bf1fb73d784a9cf5a"), "name" : "lapizera", "precio" : 5000 }

> db.mensajes.count()
12

> db.productos.count()
10

> db.productos.insert({name:"lapiz", precio:300})

> db.productos.find({precio: {$lt: 1000}})
{ "_id" : ObjectId("62da22acf1fb73d784a9cf68"), "name" : "regla", "precio" : 120 }
{ "_id" : ObjectId("62da22b3f1fb73d784a9cf69"), "name" : "goma", "precio" : 580 }
{ "_id" : ObjectId("62da22baf1fb73d784a9cf6a"), "name" : "cuaderno", "precio" : 900}

> db.productos.find({ $and: [ { precio: {$gt: 100} }, { precio: { $lt:3000} } ] } )
{ "_id" : ObjectId("62da22acf1fb73d784a9cf68"), "name" : "regla", "precio" : 120 }
{ "_id" : ObjectId("62da22b3f1fb73d784a9cf69"), "name" : "goma", "precio" : 580 }
{ "_id" : ObjectId("62da22baf1fb73d784a9cf6a"), "name" : "cuaderno", "precio" : 900 }
{ "_id" : ObjectId("62da22c0f1fb73d784a9cf6b"), "name" : "ojalillos", "precio" : 1280 }
{ "_id" : ObjectId("62da22c6f1fb73d784a9cf6c"), "name" : "resaltador", "precio" : 1700 }
{ "_id" : ObjectId("62da22cdf1fb73d784a9cf6d"), "name" : "compas", "precio" : 2300 }

 db.productos.find({precio: {$gte: 3000}})
{ "_id" : ObjectId("62da22d2f1fb73d784a9cf6e"), "name" : "tinta", "precio" : 3350 }
{ "_id" : ObjectId("62da22d8f1fb73d784a9cf6f"), "name" : "mochila", "precio" : 4320 }
{ "_id" : ObjectId("62da22dff1fb73d784a9cf70"), "name" : "cartuchera", "precio" : 4990 }
{ "_id" : ObjectId("62da22e5f1fb73d784a9cf71"), "name" : "lapizera", "precio" : 5000 }

> db.productos.aggregate({$addFields: { "stock": 100 }})
{ "_id" : ObjectId("62da22acf1fb73d784a9cf68"), "name" : "regla", "precio" : 120, "stock" : 100 }
{ "_id" : ObjectId("62da22b3f1fb73d784a9cf69"), "name" : "goma", "precio" : 580, "stock" : 100 }
{ "_id" : ObjectId("62da22baf1fb73d784a9cf6a"), "name" : "cuaderno", "precio" : 900, "stock" : 100 }
{ "_id" : ObjectId("62da22c0f1fb73d784a9cf6b"), "name" : "ojalillos", "precio" : 1280, "stock" : 100 }
{ "_id" : ObjectId("62da22c6f1fb73d784a9cf6c"), "name" : "resaltador", "precio" : 1700, "stock" : 100 }
{ "_id" : ObjectId("62da22cdf1fb73d784a9cf6d"), "name" : "compas", "precio" : 2300, "stock" : 100 }
{ "_id" : ObjectId("62da22d2f1fb73d784a9cf6e"), "name" : "tinta", "precio" : 3350, "stock" : 100 }
{ "_id" : ObjectId("62da22d8f1fb73d784a9cf6f"), "name" : "mochila", "precio" : 4320, "stock" : 100 }
{ "_id" : ObjectId("62da22dff1fb73d784a9cf70"), "name" : "cartuchera", "precio" : 4990, "stock" : 100 }
{ "_id" : ObjectId("62da22e5f1fb73d784a9cf71"), "name" : "lapizera", "precio" : 5000, "stock" : 100 }
{ "_id" : ObjectId("62da2301f1fb73d784a9cf72"), "name" : "lapiz", "precio" : 300, "stock" : 100 }

db.productos.updateMany({precio: { $gt: 4000 }}, {$set: { stock: 0 }})
{ "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
> db.productos.find({"stock":0})
{ "_id" : ObjectId("62da22d8f1fb73d784a9cf6f"), "name" : "mochila", "precio" : 4320, "stock" : 0 }
{ "_id" : ObjectId("62da22dff1fb73d784a9cf70"), "name" : "cartuchera", "precio" : 4990, "stock" : 0 }
{ "_id" : ObjectId("62da22e5f1fb73d784a9cf71"), "name" : "lapizera", "precio" : 5000, "stock" : 0 }

> db.productos.deleteMany({ precio: { $lt: 1000 } })

> db.createUser({ user: "pepe", pwd: "123456", roles: [ { role: "read", db: "ecommerce" } ] })
Successfully added user: {
        "user" : "pepe",
        "roles" : [
                {
                        "role" : "read",
                        "db" : "ecommerce"
                }
        ]
}
