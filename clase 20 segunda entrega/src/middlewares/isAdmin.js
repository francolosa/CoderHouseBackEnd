const isAdmin = (req,res,next) => {
    let admin = false;
    if(admin){
        next()
    } else {
        res.send(`error, ruta o metodo no autorizado`)
    }
}

module.exports = { isAdmin }